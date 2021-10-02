import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HeartIcon } from "@heroicons/react/solid";
import { registredAlgorithms } from "./algorithms";
import { createArray } from "./redux/action-creators/ArrayActions";
import SortingForm from "./components/SortingForm";
import QuickSort from "./components/QuickSort";
import MergeSort from "./components/MergeSort";
import Alert from "./Alert";
import HeapSort from "./components/HeapSort";

const App = () => {
  const config = useSelector((state) => state.config);
  const [currentAlgo, setCurrentAlgo] = useState("");

  const dispatch = useDispatch();

  // Start the app
  const createApp = () => {
    setCurrentAlgo(config.algorithm);
    dispatch(createArray());
  };

  // Get right component based on chosen algorithm
  const getComponent = () => {
    switch (currentAlgo) {
      case registredAlgorithms[0]:
        return <QuickSort />;

      case registredAlgorithms[1]:
        return <MergeSort />;

      case registredAlgorithms[2]:
        return <HeapSort />;

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
    <div className="relative">
      <Alert />
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
    </div>
  );
};

export default App;
