import React, { useRef } from 'react';

import { YMaps, Map, Clusterer} from 'react-yandex-maps';

import useLoadData from '../../hooks/useLoadData'; 
import useSwitcher from '../../hooks/useSwitcher'; 
import useCoordinateAndZoom from '../../hooks/useCoordinateAndZoom'; 

import Points from '../Points/Points';
import Aside from '../Aside/Aside';

const Body = () => {

  const [
		mapPositionX,
    mapPositionY,
    mapZoom,
    setMapPositionX,
    setMapPositionY,
    setMapZoom,
	] = useCoordinateAndZoom();

  const [
		dataBelarus,
    dataRussia,
	] = useLoadData();

  const [
		isSeeData,
    setIsSeeData,
	] = useSwitcher(dataBelarus, dataRussia);



  const testing = () => {
   /*  setMapZoom(4);
    setMapPositionX(13);
    console.log(myMap); */
  }


  return (
  <div>

    <button
      onClick={() => testing()}
    />
     
    <Aside
      dataBelarus={dataBelarus}
      dataRussia={dataRussia}
      isSeeData={isSeeData}
      setIsSeeData={setIsSeeData}
      setMapPositionX={setMapPositionX}
      setMapPositionY={setMapPositionY}
      setMapZoom={setMapZoom}
    />
    <YMaps>
      <Map 
        instanceRef = {myMap}
        state = {{ center: [mapPositionY, mapPositionX], zoom: mapZoom}}
        height="1920px"
        width="1680px"
      >
        <Clusterer
          options={{
        /*     preset: "islands#nightIcon", */
      /*       groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false, */
          }}
        >
          <Points
            isSeeData={isSeeData}
          />
        </Clusterer>
      </Map>
    </YMaps>
    </div>
  );
}

export default Body;
