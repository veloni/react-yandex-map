import { useState, useEffect } from 'react';

const useMoveToItem = (
  refMap,
  clusterLoad,
  isYmapsLoad,
  firstRender,
  setFirstRender,
) => {
  const [isBalloonOpened, setIsBalloonOpened] = useState(false);


  let arrayRef = [];
  

  const moveToItem = (item, id) => {
    console.log(arrayRef);
    refMap.current.setZoom(15, {duration: 1000}); 
    refMap.current.panTo([item.coordinate[0], item.coordinate[1]]);  

    setIsBalloonOpened(true);

    setTimeout(() => {
      arrayRef[id].current.balloon.open();    
      setIsBalloonOpened(false);
    }, 1500);  
  }

  const giveRef = (placeRef) => {
    arrayRef.push(placeRef);
  };

  const toCenterWindow = (item) => {
    refMap.current.setZoom(15, {duration: 1000}); 
    refMap.current.panTo([item.coordinate[0], item.coordinate[1]]);  
  }

  return [
    moveToItem,
    giveRef,
    toCenterWindow,
    isBalloonOpened,
  ];
};

export default useMoveToItem; 