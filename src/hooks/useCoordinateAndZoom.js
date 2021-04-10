import { useState } from 'react';

const useCoordinateAndZoom = () => {
  const [mapPositionX, setMapPositionX] = useState(80);
  const [mapPositionY, setMapPositionY] = useState(60);
  const [mapZoom, setMapZoom] = useState(4);

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