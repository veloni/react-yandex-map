const useMoveToItem = (
  setMapPositionX, 
  setMapPositionY, 
  setMapZoom
) => {

  const moveToItem = (item) => {
    setMapPositionX(item.coordinate[1]);
    setMapPositionY(item.coordinate[0]);
    setMapZoom(18);
  }

  return [
   moveToItem
  ];
};

export default useMoveToItem; 