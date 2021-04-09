import { useState, useEffect } from 'react';

import dataPlaceMark from '../dataPlaceMark/dataPlaceMark';

const useLoadData = () => {
  const [dataBelarus, setDataBelarus] = useState(null);
  const [dataRussia, setDataRussia] = useState(null);

	useEffect(() => {
		setDataBelarus(dataPlaceMark['Belarus']);
    setDataRussia(dataPlaceMark['Russia']);
	},[]);


  return [
    dataBelarus,
    dataRussia,
  ];
};

export default useLoadData;