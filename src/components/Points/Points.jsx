import React from 'react';

import BelarusPoints from './typePoints/BelarusPoints';
import RussiaPoints from './typePoints/RussiaPoints';

import './Points.scss';

const Points = ({ 
  dataBelarus, 
  dataRussia , 
  isVisible, 
  refPlace,
  giveRef,
}) => {
  return (
    <div>
      {
        isVisible && <RussiaPoints
          refPlace={refPlace}
          dataRussia={dataRussia}
          giveRef={giveRef}
        />
      }
      {
        !isVisible && <BelarusPoints
          dataBelarus={dataBelarus}
        />
      }
    </div>
  );
};

export default Points;
