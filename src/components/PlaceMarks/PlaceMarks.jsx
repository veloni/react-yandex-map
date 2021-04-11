import React from 'react';

import RenderPlaceMarks from './RenderPlaceMarks/RenderPlaceMarks';

import './PlaceMarks.scss';

const Points = ({ 
  isYmapsLoad,
  dataBelarus, 
  dataRussia , 
  isVisible, 
  giveRef,
  clickPlaceMark,
}) => (
  <div>
    {isVisible && <RenderPlaceMarks
      isYmapsLoad={isYmapsLoad}
      dataObject={dataRussia}
      giveRef={giveRef}
      clickPlaceMark={clickPlaceMark}
    />}
    {!isVisible && <RenderPlaceMarks
      isYmapsLoad={isYmapsLoad}
      dataObject={dataBelarus}
      giveRef={giveRef}
      clickPlaceMark={clickPlaceMark}
    />} 
  </div>
);

export default Points;
