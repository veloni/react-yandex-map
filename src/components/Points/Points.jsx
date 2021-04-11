import React from 'react';

import RenderPoints from './RenderPoints/RenderPoints';

import './Points.scss';

const Points = ({ 
  isYmapsLoad,
  dataBelarus, 
  dataRussia , 
  isVisible, 
  giveRef,
  clickPlaceMark,
}) => (
  <div>
    {isVisible && <RenderPoints
      isYmapsLoad={isYmapsLoad}
      dataObject={dataRussia}
      giveRef={giveRef}
      clickPlaceMark={clickPlaceMark}
    />}
    {!isVisible && <RenderPoints
      isYmapsLoad={isYmapsLoad}
      dataObject={dataBelarus}
      giveRef={giveRef}
      clickPlaceMark={clickPlaceMark}
    />} 
  </div>
);

export default Points;
