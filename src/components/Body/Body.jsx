import React, { useRef } from 'react';

import { YMaps, Map, Clusterer, ObjectManager} from 'react-yandex-maps';

import useLoadData from '../../hooks/useLoadData'; 
import useSwitcher from '../../hooks/useSwitcher'; 
import useCoordinateAndZoom from '../../hooks/useCoordinateAndZoom'; 

import useMoveToItem from '../../hooks/useMoveToItem';

import Points from '../Points/Points';
import Aside from '../Aside/Aside';

const Body = () => {
  const features = useRef(null);

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
	] = useMoveToItem(setMapPositionX, setMapPositionY, setMapZoom);

  const [
		dataBelarus,
    dataRussia,
	] = useLoadData();

  const [
		isSeeData,
    setIsSeeData,
    isVisible, 
    setIsVisible,
	] = useSwitcher(dataBelarus, dataRussia);

  return (
  <div>    
    <Aside
      dataBelarus={dataBelarus}
      dataRussia={dataRussia}
      isSeeData={isSeeData}
      setIsSeeData={setIsSeeData}
      setMapPositionX={setMapPositionX}
      setMapPositionY={setMapPositionY}
      setMapZoom={setMapZoom}
      isVisible={isVisible}
      setIsVisible={setIsVisible}
      moveToItem={moveToItem}
    />
    <YMaps>
      <Map 
        state = {{ center: [mapPositionY, mapPositionX], zoom: mapZoom}}
        height="100vh"
        width="100vw"
      >

      <ObjectManager
        options={{
          clusterize: true,
          gridSize: 32,
        }}
        objects={{
          openBalloonOnClick: true,
          preset: 'islands#greenDotIcon',
        }}
        clusters={{
          preset: 'islands#redClusterIcons',
        }}
        filter={object => object.id % 2 === 0}
        modules={[
          'objectManager.addon.objectsBalloon',
          'objectManager.addon.objectsHint',
        ]}
      />

        <Clusterer
          options={{
            preset: 'islands#nightCircleIcon', 
        /*     groupByCoordinates: false,
            clusterDisableClickZoom: true,
            clusterHideIconOnBalloonOpen: false,
            geoObjectHideIconOnBalloonOpen: false,  */
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
    </YMaps>
    </div>
  );
}

export default Body;
