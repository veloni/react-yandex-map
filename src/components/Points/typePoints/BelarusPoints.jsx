import React from 'react';

import { Placemark} from 'react-yandex-maps';

const BelarusPoints = ({ dataBelarus }) => {

  const getPointData = (index) => {
    return {
      balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
      clusterCaption: "placemark <strong>" + index + "</strong>"
    };
  };

  return (
    dataBelarus && Object.keys(dataBelarus[0]).map((keyCity) => (
      dataBelarus[0][keyCity].map((item,index) => (
        <Placemark
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          properties={getPointData(item.nameOrganization, item.email)} 
          geometry={item.coordinate}
        />
      ))  
    ))    
  );
}

export default BelarusPoints;
