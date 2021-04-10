import { useState, useEffect } from 'react';

const useMoveToItem = (
  refMap,
) => {

  let arrayRef = [];

  const moveToItem = (item, id) => {
    refMap.current.setZoom(15, {duration: 1000}); 
    refMap.current.panTo([item.coordinate[0], item.coordinate[1]]);  

    setTimeout(() => {
      arrayRef[id].current.balloon.open();    
    }, 1200);  
 
  }

  const giveRef = (placeRef) => {
    arrayRef.push(placeRef);
  };

  return [
    moveToItem,
    giveRef,
  ];
};

export default useMoveToItem; 