import { EmojiHappyIcon, EmojiSadIcon, XIcon } from "@heroicons/react/solid";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { alertDelete } from "./redux/action-creators/AlertActions";

const Alert = () => {
  const { alerts } = useSelector((state) => state.alerts);

  const dispatch = useDispatch();

  const deleteAlert = (index) => {
    dispatch(alertDelete(index));
  };

  const style = {
    success: {
      color: "bg-green-500",
      icon: <EmojiHappyIcon className="h-6 w-6" />,
    },

    error: {
      color: "bg-red-500",
      icon: <EmojiSadIcon className="h-6 w-6" />,
    },
  };

  return (
    <div className="fixed z-20 right-5 bottom-5">
      <div className="space-y-2">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`flex items-center space-x-5 ${
              style[alert.type].color
            } rounded-md shadow-md text-white text-sm font-medium px-4 py-3`}
            role="alert"
          >
            {style[alert.type].icon}
            <div className="flex-1">
              <p>{alert.message}</p>
            </div>
            <div>
              <button
                type="button"
                className="p-2"
                onClick={() => deleteAlert(index)}
              >
                <XIcon className="h-4 x-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alert;
