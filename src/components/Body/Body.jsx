import React, { useRef, useState } from 'react';

import { YMaps, Map, Clusterer } from 'react-yandex-maps';

import useLoadData from '../../hooks/useLoadData'; 
import useSwitcher from '../../hooks/useSwitcher'; 
import useMoveToItem from '../../hooks/useMoveToItem';

import PlaceMarks from '../PlaceMarks/PlaceMarks';
import Aside from '../Aside/Aside';

import './Body.scss';

const Body = () => {
  const refMap = useRef(null);
  const clusterRef = useRef(null);

  const [isYmapsLoad, setIsYmapsLoad] = useState(null);

  const [
    dataBelarus,
    dataRussia,
	] = useLoadData();

  const [
    moveToItem,
    giveRef,
    clickPlaceMark,
    isBalloonOpened,
	] = useMoveToItem(refMap);

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
    isBalloonOpened,
  );

  const clusterLayout = () => {
    if (isYmapsLoad) {
      const clusterLayout = isYmapsLoad.templateLayoutFactory.createClass(
        `<div class="cluster-number">
          $[properties.geoObjects.length]
        </div>`,
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
            defaultState = {{ center: [50, 50], zoom: 4}}
            height="100vh"
            width={document.body.clientWidth - 400}
            onLoad={isYmapsLoad => setIsYmapsLoad(isYmapsLoad)}
            modules={[
              "templateLayoutFactory",
              "geoObject.addon.balloon",
              "clusterer.addon.balloon",
            ]}
          >
            <Clusterer
              instanceRef={clusterRef}
              options={{
                hasBalloon: false,
                clusterIcons: [
                  {
                    size: [40, 40],
                    offset: [-20, -20]
                  }
                ],
                clusterIconContentLayout: clusterLayout(),
              }}
            > 
              <PlaceMarks
                isYmapsLoad={isYmapsLoad}
                isSeeData={isSeeData}
                dataBelarus={dataBelarus}
                dataRussia={dataRussia}
                isVisible={isVisible}
                giveRef={giveRef}
                clickPlaceMark={clickPlaceMark}
              />
            </Clusterer> 
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default Body;
