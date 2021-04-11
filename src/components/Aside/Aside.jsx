import React from 'react';

import RenderCity from './RenderCity/RenderCity';

import './Aside.scss';

const Aside = ({
  switchBelarus, 
  switchRussia, 
  isSeeData, 
  isVisible, 
  moveToItem, 
}) => (
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
      {isSeeData && Object.keys(isSeeData[0]).map((keyCity, index) => (
        <RenderCity
          key={index}
          isVisible={isVisible}
          keyCity={keyCity}
          isSeeData={isSeeData}
          moveToItem={moveToItem}
        />
      ))} 
    </div>
  </div>
)

export default Aside