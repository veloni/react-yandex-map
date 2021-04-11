 import { useState, useEffect } from 'react';

const useSwitcher = ( 
  dataBelarus, 
  dataRussia, 
  refMap, 
  clusterRef,
  clusterLoad,
  isBalloonOpened,
  ) => {
  const [isSeeData, setIsSeeData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsSeeData(dataRussia);
  },[dataRussia]);

  const switchBelarus = (data) => {
    if (!isBalloonOpened) {
      setIsSeeData(dataBelarus);
      setIsVisible(false);

      setTimeout(() => { 
        refMap.current.setBounds(clusterRef.current.getBounds()); 
      }, 1); 
    }
  };

  const switchRussia = () => {
    if (!isBalloonOpened) {
      setIsSeeData(dataRussia);
      setIsVisible(true);

      setTimeout(() => { 
        refMap.current.setBounds(clusterRef.current.getBounds());
      }, 1); 
    }
  };

  const switcher = (data, render) => {
    if (!isBalloonOpened) {
      setIsSeeData(data);
      setIsVisible(render);

      setTimeout(() => { 
        refMap.current.setBounds(clusterRef.current.getBounds());
      }, 1); 
    }
  };

  return [
    isSeeData,
    isVisible,
    switchBelarus,
    switchRussia,
  ];
};

export default useSwitcher; 