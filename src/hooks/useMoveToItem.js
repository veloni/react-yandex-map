import { useState } from 'react';

const useMoveToItem = (
  refMap,
) => {
  const [isBalloonOpened, setIsBalloonOpened] = useState(false);

  let arrayRef = [];
  
  const moveToItem = (item, id) => {
    refMap.current.setZoom(15, {duration: 1000}); 
    openBalloonMove(item, id);
  };

  const clickPlaceMark = (item, id) => {
    if (refMap.current.getZoom() < 6) {
      refMap.current.setZoom(15, {duration: 1000}); 
    }

    openBalloonMove(item, id);
  };

  const openBalloonMove = (item, id) => {
    refMap.current.panTo([item.coordinate[0], item.coordinate[1]]);   

    setIsBalloonOpened(true);

    setTimeout(() => {
      arrayRef[id].current.balloon.open();   
      setIsBalloonOpened(false); 
    }, 1000);  
  }

  const giveRef = (placeRef) => {
    arrayRef.push(placeRef);
  };

  return [
    moveToItem,
    giveRef,
    clickPlaceMark,
    isBalloonOpened,
  ];
};

export default useMoveToItem; 