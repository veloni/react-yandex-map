import React, {useState} from 'react';

import './RenderCityData.scss';

const RenderCityData = ({ keyCity, isSeeData }) => {

  return (
    <div className="wrapper-data-object">
     {     
        isSeeData && isSeeData[0][keyCity].map((item) => (
          <div 
            className="wrapper-one-city"
          >
            <span>
              {item.nameOrganization}
            </span>
            <span>
              {item.nameDirector}
            </span>
            <span>
              {item.phone}
            </span>
            <span>
              {item.email}
            </span>
          </div>

        ))
      }
    </div>
  )
}

export default RenderCityData;