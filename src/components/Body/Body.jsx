import React from 'react';

import { YMaps, Map, Clusterer} from 'react-yandex-maps';

import useLoadData from '../../hooks/useLoadData'; 
import useSwitcher from '../../hooks/useSwitcher'; 
import useCoordinateAndZoom from '../../hooks/useCoordinateAndZoom'; 
import useMoveToItem from '../../hooks/useMoveToItem';
import useOpenSpoiler from '../../hooks/useOpenSpoiler';

import Points from '../Points/Points';
import Aside from '../Aside/Aside';

import './Body.scss';

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
    moveToItem
	] = useMoveToItem(
    setMapPositionX, 
    setMapPositionY, 
    setMapZoom,
  );

  const [
		dataBelarus,
    dataRussia,
	] = useLoadData();

  const [
    isSeeData,
    isVisible,
    switchBelarus,
    switchRussia,
	] = useSwitcher(
    dataBelarus, 
    dataRussia, 
    setMapPositionX, 
    setMapPositionY, 
    setMapZoom,
  );

  return (
    <div className="main-wrapper">    
      <Aside
        switchBelarus={switchBelarus}
        switchRussia={switchRussia}
        isSeeData={isSeeData}
        setMapPositionX={setMapPositionX}
        setMapPositionY={setMapPositionY}
        setMapZoom={setMapZoom}
        isVisible={isVisible}
        moveToItem={moveToItem}
      />
      <YMaps>
        <div className="map-wrapper">
          <Map 
            state = {{ center: [mapPositionY, mapPositionX], zoom: mapZoom}}
            height="100vh"
            width="80vw" 
          >
            <Clusterer
              options={{
                preset: 'islands#nightCircleIcon', 
                groupByCoordinates: false,
                clusterDisableClickZoom: true,
                clusterHideIconOnBalloonOpen: false,
                geoObjectHideIconOnBalloonOpen: false,  
              }}
            >
              <Points
                isSeeData={isSeeData}
                dataBelarus={dataBelarus}
                dataRussia={dataRussia}
                isVisible={isVisible}
              />
            </Clusterer>
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default Body;
