import React, { useEffect, useState } from "react";
import Visualizer from "./components/Visualizer";
import useQuickSort from "./hooks/useQuickSort";
import { ChartBarIcon } from "@heroicons/react/solid";
import QuickSortStatus from "./components/QuickSortStatus";
import randomArray from "./helper/randomArray";

const App = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    generateArray();
    // eslint-disable-next-line
  }, []);

  // generate new random array
  const generateArray = () => {
    let newarray = randomArray(5, 5, 100);
    setArray(newarray);
    setArraySnapshot(newarray);
  };

  const [
    animation,
    colorizer,
    arraySnapShot,
    setArraySnapshot,
    startSorting,
    isSorting,
  ] = useQuickSort(array, 150);

  return (
    <div className="p-2">
      <div className="container">
        <div className="row justify-center">
          <h1 className="text-3xl font-medium">
            React app sorting visualization
          </h1>
        </div>
      </div>
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 gap-y-3">
          <Visualizer array={arraySnapShot} colorizer={colorizer}>
            {!isSorting && (
              <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full bg-white opacity-0 hover:opacity-100 hover:bg-opacity-50">
                <button
                  type="button"
                  className="btn green font-medium uppercase"
                  onClick={startSorting}
                >
                  <ChartBarIcon className="h-5 w-5 inline-block -mt-1" />
                  Sort
                </button>
              </div>
            )}
          </Visualizer>
          <div className="row-span-2 border rounded-md shadow-md">
            <div className="row">
              <button
                type="button"
                className="btn gray font-medium"
                onClick={generateArray}
              >
                Regen
              </button>
            </div>
          </div>
          <QuickSortStatus
            animation={animation}
            colorizer={colorizer}
            array={arraySnapShot}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
