import { useState, useEffect } from "react";
import { quikSort } from "../algorithms";

const useQuikSort = (array, speed) => {
  const [animation, setAnimation] = useState({});

  const animiationEffect = (index) => {
    setAnimation({ pointer: index });
  };

  useEffect(() => {
    quikSort(array, speed, animiationEffect);
  }, []);

  return [animation];
};

export default useQuikSort;
