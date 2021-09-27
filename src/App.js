import { HeartIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import QuickSort from "./components/QuickSort";
import randomArray from "./helper/randomArray";

const App = () => {
  const [array, setArray] = useState(randomArray(100, 5, 100));

  // form state
  const [algorithm, setAlgorithm] = useState("");
  const [speed, setSpeed] = useState(150);
  const [length, setLength] = useState(30);

  // handle Changes
  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  // generate new random array
  const updateApp = (resetAnimation) => {
    let newarray = randomArray(100, 5, 100);
    setArray(newarray);
    resetAnimation(newarray);
  };

  return (
    <>
      <div className="p-2 h-full w-full bg-gray-50">
        <div className="container">
          <div className="row justify-center">
            <h1 className="text-3xl font-medium">
              React app sorting visualization
            </h1>
          </div>
        </div>
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 gap-y-3">
            <div className="col-span-5 rounded-md shadow-md bg-gray-900 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 gap-y-3 p-10">
                <div>
                  <label for="algorithm" className="text-sm font-medium">
                    Algorithm
                  </label>
                  <select
                    id="algorithm"
                    className="form-input text-sm bg-gray-900 text-white"
                    value={algorithm}
                    onChange={handleChange(setAlgorithm)}
                  >
                    <option></option>
                    <option value="quickSort">Quick Sort</option>
                    <option value="mergeSort">Merge Sort</option>
                  </select>
                </div>
                <div>
                  <label for="length" className="text-sm font-medium">
                    Array Length : {length}
                  </label>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-md font-medium">5</span>
                    <input
                      type="range"
                      className="form-input cursor-pointer"
                      id="length"
                      name="length"
                      min="5"
                      max="120"
                      value={length}
                      onChange={handleChange(setLength)}
                    />
                    <span className="text-md font-medium">120</span>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Speed : {speed / 1000} s</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-md font-medium">50ms</span>
                    <input
                      type="range"
                      className="form-input"
                      id="speed"
                      name="speed"
                      min="50"
                      max="5000"
                      value={speed}
                      onChange={handleChange(setSpeed)}
                    />
                    <span className="text-md font-medium">5s</span>
                  </div>
                </div>
              </div>
            </div>
            <QuickSort array={array} updateApp={updateApp} />
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
