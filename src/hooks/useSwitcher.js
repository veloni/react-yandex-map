 import { useState, useEffect } from 'react';

const useSwitcher = ( 
  dataBelarus, 
  dataRussia, 
  refMap,
  clusterRef,
  ) => {
  const [isSeeData, setIsSeeData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  const switchBelarus = () => {
    setIsSeeData(dataBelarus);
    setIsVisible(false);

    setTimeout(() => { 
      refMap.current.setBounds(clusterRef.current.getBounds()); 
    }, 1);  
  } 

  const switchRussia = () => {
    setIsSeeData(dataRussia);
    setIsVisible(true);

    setTimeout(() => { 
      refMap.current.setBounds(clusterRef.current.getBounds());
     }, 1); 
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