import { useState } from 'react';

const useCoordinateAndZoom = () => {
  const [mapPositionX, setMapPositionX] = useState(40);
  const [mapPositionY, setMapPositionY] = useState(50);
  const [mapZoom, setMapZoom] = useState(5);

  return [
    mapPositionX,
    mapPositionY,
    mapZoom,
    setMapPositionX,
    setMapPositionY,
    setMapZoom,
  ];
};

export default useCoordinateAndZoom; 