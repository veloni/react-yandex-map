import { useState, useEffect } from 'react';

import dataPlaceMark from '../dataPlaceMark/dataPlaceMark';

const useLoadData = () => {
  const [dataBelarus, setDataBelarus] = useState(null);
  const [dataRussia, setDataRussia] = useState(null);
  const [arrayRef, setArrayRef] = useState([]);

	useEffect(() => {
		setDataBelarus(dataPlaceMark['Belarus']);
    setDataRussia(dataPlaceMark['Russia']);
	},[]);

  return [
    dataBelarus,
    dataRussia,
    arrayRef,
    setArrayRef,
  ];
};

export default useLoadData;