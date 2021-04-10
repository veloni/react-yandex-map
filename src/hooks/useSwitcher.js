 import { useState, useEffect } from 'react';

const useSwitcher = (dataBelarus, dataRussia) => {
  const [isSeeData, setIsSeeData] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
/*   useEffect(() => {
		setIsSeeData(dataBelarus);
	},[]); */

  return [
    isSeeData,
    setIsSeeData,
    isVisible,
    setIsVisible,
  ];
};

export default useSwitcher; 