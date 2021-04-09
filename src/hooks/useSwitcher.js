 import { useState, useEffect } from 'react';

const useSwitcher = (dataBelarus, dataRussia) => {
  const [isSeeData, setIsSeeData] = useState(dataRussia);

  useEffect(() => {
		setIsSeeData(dataRussia);
	},[dataRussia]);

  return [
    isSeeData,
    setIsSeeData,
  ];
};

export default useSwitcher; 