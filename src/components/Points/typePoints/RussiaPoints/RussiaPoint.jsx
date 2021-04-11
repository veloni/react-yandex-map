import React, { useRef, useEffect } from 'react';

import { Placemark } from 'react-yandex-maps';

const RussiaPoint = ({ 
  item,
  index,
  giveRef,
  toCenterWindow,
  elementId,
}) => {
  const placeRef = useRef(null);

  const getPointData = (item) => {
    return {
      balloonContent: 
      `<div class=wrapper-balloon>
        <ul class=ballon-list> 
          <li class=balloon-name-organization>
            ${item.nameOrganization}
          </li> <li class=balloon-name-phone>
            ${item.nameDirector}
          </li> 
          <li class=balloon-name-phone>
            ${item.phone}
          </li> 
          <li class=balloon-email>
            ${item.email}
          </li> 
        </ul> 
      </div>`,
    };
  };
  
  useEffect(() => {
    giveRef(placeRef); 
  },[giveRef]);

  return (
    <div
      key={index}
    >
      <Placemark
        onClick={() => toCenterWindow(item, elementId)}
        instanceRef={placeRef}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        properties={getPointData(item)}  
        geometry={item.coordinate}
      />
    </div>
  );
};

export default RussiaPoint;
