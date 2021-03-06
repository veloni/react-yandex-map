import React, {useState, useEffect} from 'react';

import RenderOfficeData from '../RenderOfficeData/RenderOfficeData';

import arrowUp from './svg/up-arrow-up.png';
import arrowDown from './svg/up-arrow-down.png';

import './RenderCity.scss';

const RenderCity = ({
  keyCity, 
  isSeeData, 
  moveToItem,
  isVisible,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  },[isVisible]);

  const openAndView = () => {
    setIsOpen(!isOpen);
  };

  return (  
    <div className="aside-name-city-and-data">  
      <div className="wrapper-city-name-open">
        <span className={isOpen ? "aside-text-name-city aside-text-name-city-active" : "aside-text-name-city" }>
          {keyCity}
        </span>   
        <img 
          alt="arrow"
          src={isOpen ? arrowDown : arrowUp}
          className={!isOpen ? "icon-actve aside-icon-open" : "aside-icon-open"}
          onClick={() => openAndView()}
        /> 
      </div>
      {isOpen && <RenderOfficeData
        keyCity={keyCity}
        isSeeData={isSeeData}
        moveToItem={moveToItem}
      />}
    </div>
  )
};

export default RenderCity;