import React from 'react';

import './RenderOfficeData.scss';

const RenderOfficeData = ({ 
  keyCity, 
  isSeeData, 
  moveToItem
}) => (
  <div className="wrapper-data-object">
    {isSeeData && isSeeData[0][keyCity].map((item, index) => (
      <div 
        key={index}
        className="wrapper-one-city"
        onClick={() => moveToItem(item, item.id)}
      >
        <span className="aside-text-name-organization">
          {item.nameOrganization}
        </span>
        <span>
          {item.nameDirector}
        </span>
        <span className="aside-text-phone-organization">
          {item.phone}
        </span>
        <span className="aside-text-email-organization">
          {item.email}
        </span>
      </div>
    ))}
  </div>
);

export default RenderOfficeData;