import React from 'react';

import BelarusPoints from './typePoints/BelarusPoints/BelarusPoints';
import RussiaPoints from './typePoints/RussiaPoints/RussiaPoints';

import './Points.scss';

const Points = ({ 
  isYmapsLoad,
  dataBelarus, 
  dataRussia , 
  isVisible, 
  giveRef,
  toCenterWindow,
}) => (
  <div>
    {isVisible && <RussiaPoints
      isYmapsLoad={isYmapsLoad}
      dataRussia={dataRussia}
      giveRef={giveRef}
      toCenterWindow={toCenterWindow}
    />}
    {!isVisible && <BelarusPoints
      isYmapsLoad={isYmapsLoad}
      dataBelarus={dataBelarus}
      giveRef={giveRef}
      toCenterWindow={toCenterWindow}
    />} 
  </div>
);

export default Points;
