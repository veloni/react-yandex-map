import React, { useState, useEffect} from 'react';

import BelarusPoints from './typePoints/BelarusPoints';
import RussiaPoints from './typePoints/RussiaPoints';

import './Points.scss';

const Points = ({ dataBelarus, dataRussia , isVisible}) => {

  return (

  <div>
    {
      isVisible && <RussiaPoints
        dataRussia={dataRussia}
      />
    }

    {
      !isVisible && <BelarusPoints
        dataBelarus={dataBelarus}
      />
    }
  </div>
  );
}

export default Points;
