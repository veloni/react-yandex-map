import React, { useRef, useState } from 'react';

import { YMaps, Map, Clusterer } from 'react-yandex-maps';

import useLoadData from '../../hooks/useLoadData'; 
import useSwitcher from '../../hooks/useSwitcher'; 
import useMoveToItem from '../../hooks/useMoveToItem';

import Points from '../Points/Points';
import Aside from '../Aside/Aside';

import './Body.scss';

const Body = () => {
  const refMap = useRef(null);
  const clusterRef = useRef(null);

  const [clusterLoad, setClusterLoad] = useState(null);

  const [isYmapsLoad, setIsYmapsLoad] = useState(null);

  const [
    dataBelarus,
    dataRussia,
    arrayRef,
    setArrayRef,
    firstRender,
    setFirstRender,
	] = useLoadData();

  const [
    moveToItem,
    giveRef,
    toCenterWindow,
    isBalloonOpened,
	] = useMoveToItem(
    refMap,
    clusterLoad,
    isYmapsLoad,
    firstRender,
    setFirstRender,
  );

  const [
    isSeeData,
    isVisible,
    switchBelarus,
    switchRussia,
	] = useSwitcher(
    dataBelarus, 
    dataRussia, 
    refMap, 
    clusterRef,
    clusterLoad,
    isBalloonOpened,
  );

  const clusterLayout = () => {
    if (isYmapsLoad) {
      const clusterLayout = isYmapsLoad.templateLayoutFactory.createClass(
        `<div class="cluster-number">$[properties.geoObjects.length]</div>`,
      );
      return clusterLayout;
    }
    return null;
  };

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
            defaultState = {{ center: [55, 85], zoom: 4}}
            height="50vw"
            width="65vw"  
            onLoad={isYmapsLoad => setIsYmapsLoad(isYmapsLoad)}
            modules={[
              "templateLayoutFactory",
              "geoObject.addon.balloon",
              "clusterer.addon.balloon",
            ]}
          >
            <Clusterer
              instanceRef={clusterRef}
              onLoad={clusterLoad => setClusterLoad(clusterLoad)}
              options={{
                groupByCoordinates: false,
                clusterIcons: [
                  {
                    size: [40, 40],
                    offset: [-20, -20]
                  }
                ],
                clusterIconContentLayout: clusterLayout(),
              }}
            
            > 
              <Points
                isYmapsLoad={isYmapsLoad}
                isSeeData={isSeeData}
                dataBelarus={dataBelarus}
                dataRussia={dataRussia}
                isVisible={isVisible}
                giveRef={giveRef}
                toCenterWindow={toCenterWindow}
              />
            </Clusterer> 
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default Body;
