import React, { useState } from "react";
import { registredAlgorithms } from "../algorithms";

const SortingForm = ({ createApp }) => {
  const [algorithm, setAlgorithm] = useState("");
  const [speed, setSpeed] = useState(150);
  const [length, setLength] = useState(30);

  // handle Changes
  const handleChange = (setState) => (event) => {
    const inputName = event.target.name;
    let value = event.target.value;
    if (inputName === "speed" || inputName === "length") {
      value = parseInt(value, 10);
    }
    setState(value);
  };

  // validate values and create app using params
  const submit = (e) => {
    e.preventDefault();
    if (isValideLength() && isvalideSpeed() && isValideAlgorithm()) {
      createApp(algorithm, length, speed);
    }
  };

  // Speed validation
  const isvalideSpeed = () => {
    if (speed >= 50 && speed <= 5000) return true;
    return false;
  };

  // Length validation
  const isValideLength = () => {
    if (length >= 5 && length <= 120) return true;
    return false;
  };

  // Algorithm validation
  const isValideAlgorithm = () => {
    return registredAlgorithms.includes(algorithm);
  };

  return (
    <div className="col-span-5 rounded-md shadow-md border border-gray-600 bg-gray-900 text-white p-3">
      <form onSubmit={submit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 gap-y-3 p-6">
          <div>
            <label htmlFor="algorithm" className="text-sm font-medium">
              Algorithm
            </label>
            <select
              id="algorithm"
              className="form-input text-sm bg-gray-800 text-white"
              value={algorithm}
              onChange={handleChange(setAlgorithm)}
            >
              <option></option>
              <option value="quicksort">Quick Sort</option>
              <option value="mergesort">Merge Sort</option>
            </select>
          </div>
          <div>
            <label htmlFor="length" className="text-sm font-medium">
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
        <div className="flex container justify-end">
          <button type="submit" className="btn green text-sm">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SortingForm;
