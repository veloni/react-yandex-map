import React, {useState, useEffect} from 'react';

import RenderCityData from '../RenderCityData/RenderCityData';

import './RenderCity.scss';

const RenderCity = ({keyCity, isSeeData, setMapZoom}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAndView = () => {
    setIsOpen(!isOpen);
    console.log(setMapZoom);
    setMapZoom(50);
  }

  return (
    <div className="aside-name-city-and-data">  
      <div className="wrapper-city-name-open">
        <span className="aside-text-name-city">
          {keyCity}
        </span>   
        <span 
          className="aside-icon-open"
          onClick={() => openAndView()}
        >
          открыть
        </span>   
      </div>
      {
        isOpen && <RenderCityData
          keyCity={keyCity}
          isSeeData={isSeeData}
        />
      }
    </div>
  )
}

export default RenderCity;