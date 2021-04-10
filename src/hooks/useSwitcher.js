 import { useState, useEffect } from 'react';

const useSwitcher = ( 
  dataBelarus, 
  dataRussia, 
  setMapPositionX, 
  setMapPositionY, 
  ) => {
  const [isSeeData, setIsSeeData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const switchBelarus = () => {
    setIsSeeData(dataBelarus);
    setIsVisible(false);
    setMapPositionX(28);
    setMapPositionY(53);
  } 

  const switchRussia = () => {
    setIsSeeData(dataRussia);
    setIsVisible(true);
    setMapPositionX(80);
    setMapPositionY(60);
  } 

  useEffect(() => {
    setIsSeeData(dataRussia);
  },[dataRussia]);
  
  return [
    isSeeData,
    isVisible,
    switchBelarus,
    switchRussia,
  ];
};

export default useSwitcher; 