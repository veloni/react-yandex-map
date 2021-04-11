import React from 'react';

import RussianPoint from './RussiaPoint';

const RussiaPoints = ({ 
  isYmapsLoad,
  dataRussia,
  giveRef,
  toCenterWindow,
}) => (
  dataRussia && Object.keys(dataRussia[0]).map((keyCity) => (
    dataRussia[0][keyCity].map((item, index) => (
      <RussianPoint
        elementId={item.id}
        key={index}
        isYmapsLoad={isYmapsLoad}
        item={item}
        index={index}
        giveRef={giveRef}
        toCenterWindow={toCenterWindow}
      />
    ))  
  ))  
);

export default RussiaPoints;
