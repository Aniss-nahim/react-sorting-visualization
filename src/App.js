import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeartIcon } from "@heroicons/react/solid";
import { registredAlgorithms } from "./algorithms";
import randomArray from "./helper/randomArray";
import SortingForm from "./components/SortingForm";
import QuickSort from "./components/QuickSort";
import MergeSort from "./components/MergeSort";

const App = () => {
  const { array } = useSelector((state) => state.array);

  const [componentProps, setComponentProps] = useState(null);
  const [currentAlgo, setCurrentAlgo] = useState("");

  // generate new random array
  const updateApp = (length) => {
    // setArray(randomArray(length, 5, 100));
  };

  // Start the app
  const createApp = (algorithm, length, speed) => {
    setCurrentAlgo(algorithm);
    setComponentProps({ speed, length });
    updateApp(length);
  };

  // Get right component based on chosen algorithm
  const getComponent = () => {
    switch (currentAlgo) {
      case registredAlgorithms[0]:
        return (
          <QuickSort array={array} updateApp={updateApp} {...componentProps} />
        );

      case registredAlgorithms[1]:
        return (
          <MergeSort array={array} updateApp={updateApp} {...componentProps} />
        );

      default:
        return (
          <div className="h-96 p-2 lg:col-span-3 lg:col-start-2 flex items-center justify-center">
            <div className="text-xl text-gray-400">
              Please select one of the avilable algorithms.
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className="p-2 h-full w-full bg-gray-800">
        <div className="border-b border-gray-300">
          <div className="container text-white">
            <div className="row justify-center">
              <h1 className="text-4xl text-gray-300 font- uppercase">
                sorting visualizer
              </h1>
            </div>
          </div>
        </div>
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 gap-y-3">
            <SortingForm createApp={createApp} />
            {getComponent()}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 h-10 flex justify-center items-center text-white uppercase">
        Made with <HeartIcon className="h-4 w-4 inline-block text-red-600" /> By
        Aniss Nahim
      </div>
    </>
  );
};

export default App;
