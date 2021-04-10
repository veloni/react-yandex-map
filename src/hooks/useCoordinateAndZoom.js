import { useState } from 'react';

const useCoordinateAndZoom = () => {
  const [mapPositionX, setMapPositionX] = useState(80);
  const [mapPositionY, setMapPositionY] = useState(60);

  return [
    mapPositionX,
    mapPositionY,
    setMapPositionX,
    setMapPositionY,
  ];
};

export default useCoordinateAndZoom; 