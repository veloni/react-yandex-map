import React from 'react';

import BelarusPoint from './BelarusPoint';

const BelarusPoints = ({ 
  dataBelarus,
  giveRef,
  toCenterWindow,
}) => 
(
  dataBelarus && Object.keys(dataBelarus[0]).map((keyCity) => (
    dataBelarus[0][keyCity].map((item, index) => (
      <BelarusPoint
        key={index}
        item={item}
        index={index}
        giveRef={giveRef}
        toCenterWindow={toCenterWindow}
      />
    ))  
  ))    
);

export default BelarusPoints;
