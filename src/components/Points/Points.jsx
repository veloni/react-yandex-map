import React from 'react';

import BelarusPoints from './typePoints/BelarusPoints/BelarusPoints';
import RussiaPoints from './typePoints/RussiaPoints/RussiaPoints';

import './Points.scss';

const Points = ({ 
  ymaps,
  dataBelarus, 
  dataRussia , 
  isVisible, 
  giveRef,
  toCenterWindow,
}) => 
(
  <div>
    {
      isVisible && <RussiaPoints
        ymaps={ymaps}
        dataRussia={dataRussia}
        giveRef={giveRef}
        toCenterWindow={toCenterWindow}
      />
    }
    {
      !isVisible && <BelarusPoints
        dataBelarus={dataBelarus}
        giveRef={giveRef}
        toCenterWindow={toCenterWindow}
      />
    }
  </div>
);


export default Points;
