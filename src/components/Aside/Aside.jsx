import React, {useState, useEffect} from 'react';

import RenderCity from '../RenderCity/RenderCity';

import './Aside.scss';

const Aside = ({dataBelarus, dataRussia, isSeeData, setIsSeeData, setMapPositionX, setMapPositionY, setMapZoom ,isVisible, setIsVisible ,moveToItem }) => {

  const oneBut = () => {
    setIsSeeData(dataRussia);
    setIsVisible(true);
    setMapZoom(4);
  } 

  const twoBut = () => {
    setIsSeeData(dataBelarus);
    setIsVisible(false);
    setMapZoom(6);
  } 

  const testing = () => {

     const test2 = document.querySelector('.ymaps-2-1-78-svg-icon ymaps_https___api_maps_yandex_ru_2_1_78_381114548132islands_clusterSmallIcon___1E98FF_46x46_1618037945963');
  /*   const test3 = document.querySelector('.ymaps-2-1-78-placemark-overlay');
    const test4 = document.querySelector('.ymaps-2-1-78-placemark-overlay');   */
    
    console.log(test2);



 
  }

  return (
    <div className="wrapper-aside">
      <button
    onClick={() => testing()}
    >
12312
    </button>
      <div className="aside-box-switcher"> 
        <button 
          className={isVisible ? "button-switcher button-switcher-active" : "button-switcher"}
          onClick={() => oneBut()}
        >
          Россия
        </button>
        <button 
          className={!isVisible ? "button-switcher button-switcher-active" : "button-switcher"}
          onClick={() => twoBut()}
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
              moveToItem={moveToItem}
            />
          ))
        } 
      </div>
    </div>
  )
}

export default Aside