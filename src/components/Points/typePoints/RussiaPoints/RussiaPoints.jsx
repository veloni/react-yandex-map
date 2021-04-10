import React from 'react';

import RussianPoint from './RussiaPoint';

const RussiaPoints = ({ 
  ymaps,
  dataRussia,
  giveRef,
  toCenterWindow,
}) => 
(
  dataRussia && Object.keys(dataRussia[0]).map((keyCity) => (
    dataRussia[0][keyCity].map((item, index) => (
      <RussianPoint
        key={index}
        ymaps={ymaps}
        item={item}
        index={index}
        giveRef={giveRef}
        toCenterWindow={toCenterWindow}
      />
    ))  
  ))    
);

export default RussiaPoints;
