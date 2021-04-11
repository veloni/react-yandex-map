import { useState, useEffect } from 'react';

import dataPlaceMark from '../dataPlaceMark/dataPlaceMark';

const useLoadData = () => {
  const [dataBelarus, setDataBelarus] = useState(null);
  const [dataRussia, setDataRussia] = useState(null);
/*   const [arrayRef, setArrayRef] = useState([]); */

  const [firstRender, setFirstRender] = useState(true);

  let arrayRef = []
  
	useEffect(() => {
		setDataBelarus(dataPlaceMark['Belarus']);
    setDataRussia(dataPlaceMark['Russia']);
	},[]);

  return [
    dataBelarus,
    dataRussia,
    firstRender,
    arrayRef,
  ];
};

export default useLoadData;