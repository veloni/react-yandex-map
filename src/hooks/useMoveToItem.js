import { useState, useEffect } from 'react';

const useMoveToItem = (
  refMap,
  clusterLoad,
) => {

  let arrayRef = [];

  const moveToItem = (item, id) => {
    refMap.current.setZoom(15, {duration: 1000}); 
    refMap.current.panTo([item.coordinate[0], item.coordinate[1]]);  

    setTimeout(() => {
      arrayRef[id].current.balloon.open();    
    }, 1500);  
  }

  const giveRef = (placeRef) => {
    arrayRef.push(placeRef);
  };

  const toCenterWindow = (item) => {
    refMap.current.panTo([item.coordinate[0], item.coordinate[1]]);  
  }

  return [
    moveToItem,
    giveRef,
    toCenterWindow,
  ];
};

export default useMoveToItem; 