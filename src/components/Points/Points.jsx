import React, { useState, useEffect} from 'react';

import { Placemark, map } from 'react-yandex-maps';

import './Points.scss';

const Points = ({ isSeeData }) => {

  const getPointData = (index) => {
    return {
      balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
      clusterCaption: "placemark <strong>" + index + "</strong>"
    };
  };

  return (
    isSeeData && Object.keys(isSeeData[0]).map((keyCity) => (
      isSeeData && isSeeData[0][keyCity].map((item,index) => (
        <Placemark
          modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          properties={getPointData(index)}
          geometry={item.coordinate}
        />
      ))  
    ))  
  );
}

export default Points;
