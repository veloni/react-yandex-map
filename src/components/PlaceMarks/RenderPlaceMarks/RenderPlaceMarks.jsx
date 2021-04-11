import React from 'react';

import RenderOnePlaceMark from './RenderOnePlaceMark';

const RenderPlaceMarks = ({ 
  isYmapsLoad,
  dataObject,
  giveRef,
  clickPlaceMark,
}) => (
  dataObject && Object.keys(dataObject[0]).map((keyCity) => (
    dataObject[0][keyCity].map((item, index) => (
      <RenderOnePlaceMark
        elementId={item.id}
        key={index}
        isYmapsLoad={isYmapsLoad}
        item={item}
        index={index}
        giveRef={giveRef}
        clickPlaceMark={clickPlaceMark}
      />
    ))  
  ))  
);

export default RenderPlaceMarks;
