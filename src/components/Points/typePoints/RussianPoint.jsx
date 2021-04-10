import React, { useRef, useEffect } from 'react';

import { Placemark } from 'react-yandex-maps';

const RussianPoint = ({ 
  item,
  index,
  giveRef,
}) => {

  const placeRef = useRef(null);

  const getPointData = (item) => {
    return {
      balloonContent: `<div class=wrapper-balloon> <ul class=ballon-list>  <li class=balloon-name-organization>${item.nameOrganization}</li> <li class=balloon-name-phone>${item.nameDirector}</li> <li class=balloon-name-phone>${item.phone}</li> <li class=balloon-email>${item.email}</li> </ul> </div>`,
    };
  };

  const getPointOptions = () => {
    return {
      preset: 'islands#nightCircleIcon;',
    };
  };

  useEffect(() => {
    giveRef(placeRef); 
  },[]);

  return (
    <div
      key={index}
    >
      <Placemark
        instanceRef={placeRef}
        options={getPointOptions()}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        properties={getPointData(item)}  
        geometry={item.coordinate}
      />
    </div>
 
  );
}

export default RussianPoint;
