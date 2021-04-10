import React, { useRef, useState } from 'react';

import { YMaps, Map, Clusterer } from 'react-yandex-maps';

import useLoadData from '../../hooks/useLoadData'; 
import useSwitcher from '../../hooks/useSwitcher'; 
import useCoordinateAndZoom from '../../hooks/useCoordinateAndZoom'; 
import useMoveToItem from '../../hooks/useMoveToItem';

import Points from '../Points/Points';
import Aside from '../Aside/Aside';

import './Body.scss';

const Body = () => {
  const refMap = useRef(null);

  const [
    dataBelarus,
    dataRussia,
    arrayRef,
    setArrayRef,
	] = useLoadData();

  const [
		mapPositionX,
    mapPositionY,
    setMapPositionX,
    setMapPositionY,
	] = useCoordinateAndZoom();

  const [
    moveToItem,
    giveRef,
	] = useMoveToItem(
    refMap,
    arrayRef, 
    setArrayRef,
  );

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
  );

  return (
    <div className="main-wrapper">    
      <Aside
         switchBelarus={switchBelarus}
         switchRussia={switchRussia}
         isSeeData={isSeeData}
         isVisible={isVisible}
         moveToItem={moveToItem}
         refMap={refMap}
      />
      <YMaps>
        <div className="map-wrapper">
          <Map 
            instanceRef={refMap}
            state = {{ center: [mapPositionY, mapPositionX], zoom: 5}}
            height="1000px"
            width="1300px"  
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
                giveRef={giveRef}
              />
            </Clusterer>
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default Body;
