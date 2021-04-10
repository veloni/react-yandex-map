import React, { useRef, useEffect } from 'react';

import { Placemark } from 'react-yandex-maps';

const RussiaPoint = ({ 
  ymaps,
  item,
  index,
  giveRef,
  toCenterWindow,
}) => {

  const placeRef = useRef(null);

   const getPointData = (item) => {
    return {
       balloonContent: `<div class=wrapper-balloon> <ul class=ballon-list>  <li class=balloon-name-organization>${item.nameOrganization}</li> <li class=balloon-name-phone>${item.nameDirector}</li> <li class=balloon-name-phone>${item.phone}</li> <li class=balloon-email>${item.email}</li> </ul> </div>`,
    };
  };

   const getPointOptions = () => {
    return {
     /*    iconLayout: clusterLayout(),    */
     preset: 'islands#circleIcon',
     iconColor: '#3caa3c'
    };
  };

/*   const clusterLayout = () => {
    if (ymaps) {
      const clusterLayout = ymaps.templateLayoutFactory.createClass(
        `<div 
          class="cluster-number-small"
          onclick=toCenterWindow(item)
        > 
        </div>`,
      );
      return clusterLayout;
    }
    return null;
  };   */

  useEffect(() => {
    giveRef(placeRef); 
  },[]);

  return (
    <div
      key={index}
    >
      <Placemark
        onClick={() => toCenterWindow(item)}
        instanceRef={placeRef}
        options={getPointOptions()}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        properties={getPointData(item)}  
        geometry={item.coordinate}
      />
    </div>
 
  );
}

export default RussiaPoint;
