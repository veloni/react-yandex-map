import React, {useState, useEffect} from 'react';

import RenderCity from '../RenderCity/RenderCity';

import './Aside.scss';

const Aside = ({dataBelarus, dataRussia, isSeeData, setIsSeeData, setMapPositionX, setMapPositionY, setMapZoom }) => {

  return (
    <div className="wrapper-aside">
      <div className="aside-box-switcher"> 
        <button 
          className="button-swicher"
          onClick={() => setIsSeeData(dataRussia)}
        >
          Россия
        </button>
        <button 
          className="button-swicher"
          onClick={() => setIsSeeData(dataBelarus)}
        >
          Белоруссия
        </button>
      </div>
      <div className="wrapper-aside-content">
        {  
          isSeeData && Object.keys(isSeeData[0]).map((keyCity) => (
            <RenderCity
              keyCity={keyCity}
              isSeeData={isSeeData}
              setMapPositionX={setMapPositionX}
              setMapPositionY={setMapPositionY}
              setMapZoom={setMapZoom}
            />
          ))
        } 
      </div>
    </div>
  )
}

export default Aside