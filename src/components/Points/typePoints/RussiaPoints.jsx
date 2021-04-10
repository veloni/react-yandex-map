import React from 'react';

import { Placemark } from 'react-yandex-maps';

const RussiaPoints = ({ dataRussia}) => {

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

  return (
    dataRussia && Object.keys(dataRussia[0]).map((keyCity) => (
      dataRussia[0][keyCity].map((item, index) => (
        <div
          key={index}
        >
          <Placemark
            options={getPointOptions()}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
            properties={getPointData(item)}  
            geometry={item.coordinate}
          />
        </div>
      ))  
    ))    
  );
}

export default RussiaPoints;
