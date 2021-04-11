 import { useState, useEffect } from 'react';

const useSwitcher = ( 
  dataBelarus, 
  dataRussia, 
  refMap, 
  clusterRef,
  isBalloonOpened,
) => {
  const [isSeeData, setIsSeeData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsSeeData(dataRussia);
  },[dataRussia]);

  const switchBelarus = () => {
    switcher(dataBelarus, false); 
  };

  const switchRussia = () => {
    switcher(dataRussia, true); 
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