import Visualizer from "./components/Visualizer";
import useQuickSort from "./hooks/useQuickSort";
import { ChartBarIcon } from "@heroicons/react/solid";

const App = () => {
  const array = [
    82, 51, 18, 24, 49, 60, 10, 5, 67, 15, 20, 60, 10, 15, 18, 40, 20, 61, 16,
    51, 87, 46, 23, 36, 91, 50, 18, 74, 42, 26, 11, 15, 18, 41, 20, 63, 13, 53,
  ];

  const [animation, arraySnapShot, startSorting] = useQuickSort(array, 150);

  return (
    <div className="p-2 h-screen">
      <div className="container">
        <div className="row justify-center">
          <h1 className="text-3xl font-medium">
            React app sorting visualization
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1">
          <Visualizer animation={animation} array={arraySnapShot} />
          <div className="flex flex-col">
            <p>
              Array :
              {arraySnapShot.map((item, index) => (
                <span key={index} className="mx-1">
                  {item}
                </span>
              ))}
            </p>
            <p>
              Action :
              <span className="text-lg font-medium text-green-400">
                {animation.action}
              </span>
            </p>
            <p>Pivot index : {animation.pivot}</p>
            <p> Pivot item : {arraySnapShot[animation.pivot]}</p>
            <p> Left : {animation.first} </p>
            <p>Right : {animation.second}</p>
          </div>
        </div>
        <div className="row justify-end">
          <button
            type="button"
            className="btn green font-medium uppercase"
            onClick={startSorting}
          >
            <ChartBarIcon className="h-5 w-5 inline-block -mt-1" />
            Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
