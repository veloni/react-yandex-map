import React from 'react';

import RenderCity from '../RenderCity/RenderCity';

import './Aside.scss';

const Aside = ({
  switchBelarus, 
  switchRussia, 
  isSeeData, 
  setMapPositionX, 
  setMapPositionY, 
  setMapZoom,
  isVisible, 
  moveToItem, 
}) => 
  (
    <div className="wrapper-aside">
      <div className="aside-box-switcher"> 
        <button 
          className={isVisible ? "button-switcher button-switcher-active" : "button-switcher"}
          onClick={() => switchRussia()}
        >
          Россия
        </button>
        <button 
          className={!isVisible ? "button-switcher button-switcher-active" : "button-switcher"}
          onClick={() => switchBelarus()}
        >
          Белоруссия
        </button>
      </div>
      <div className="wrapper-aside-content">
        {  
          isSeeData && Object.keys(isSeeData[0]).map((keyCity, index) => (
            <RenderCity
              key={index}
              keyCity={keyCity}
              isSeeData={isSeeData}
              setMapPositionX={setMapPositionX}
              setMapPositionY={setMapPositionY}
              setMapZoom={setMapZoom}
              moveToItem={moveToItem}
            />
          ))
        } 
      </div>
    </div>
  )

export default Aside