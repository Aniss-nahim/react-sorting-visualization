import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registredAlgorithms } from "../algorithms";
import { putConfig } from "../redux/action-creators/ConfigActions";

const SortingForm = ({ createApp }) => {
  const config = useSelector((state) => state.config);
  const dispatch = useDispatch();

  // handle Changes
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name === "speed" || name === "length") {
      value = parseInt(value, 10);
    }
    dispatch(putConfig({ ...config, [name]: value }));
  };

  // validate values and create app using params
  const submit = (e) => {
    e.preventDefault();
    if (isValideLength() && isvalideSpeed() && isValideAlgorithm()) {
    }
  };

  // Speed validation
  const isvalideSpeed = () => {
    if (!isNaN(config.speed) && config.speed >= 50 && config.speed <= 5000)
      return true;

    // dipsatch error
    return false;
  };

  // Length validation
  const isValideLength = () => {
    if (
      !isNaN(config.length) >= config.minLength &&
      config.length <= config.maxLength
    )
      return true;

    // disptach error
    return false;
  };

  // Algorithm validation
  const isValideAlgorithm = () => {
    return registredAlgorithms.includes(config.algorithm) ? true : false;
    // dispatch error
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
              name="algorithm"
              className="form-input text-sm bg-gray-800 text-white"
              value={config.algorithm}
              onChange={handleChange}
            >
              <option></option>
              <option value="quicksort">Quick Sort</option>
              <option value="mergesort">Merge Sort</option>
            </select>
          </div>
          <div>
            <label htmlFor="length" className="text-sm font-medium">
              Array Length : {config.length}
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
                value={config.length}
                onChange={handleChange}
              />
              <span className="text-md font-medium">120</span>
            </div>
          </div>
          <div>
            <p className="font-medium">Speed : {config.speed / 1000} s</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-md font-medium">50ms</span>
              <input
                type="range"
                className="form-input"
                id="speed"
                name="speed"
                min="50"
                max="5000"
                value={config.speed}
                onChange={handleChange}
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
