import React from "react";

const NumberBar = ({ number, color }) => {
  return (
    <div
      style={{ height: number >= 100 ? "100%" : `${number}%` }}
      className={`${color} rounded-md flex-auto text-white`}
    ></div>
  );
};

export default NumberBar;
