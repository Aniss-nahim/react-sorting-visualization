import Visualizer from "./components/Visualizer";

const App = () => {
  const array = [
    1, 5, 8, 4, 2, 6, 1, 5, 7, 15, 2, 6, 10, 15, 18, 4, 2, 6, 1, 5, 8, 4, 2, 6,
    1, 5, 8, 4, 2, 6, 1, 5, 8, 410, 20, 6, 1, 5, 8, 48, 32, 26, 19, 52, 81, 43,
    2, 6, 1, 5, 8, 4, 2, 6, 1, 50, 8, 4, 2, 6, 1, 5, 8, 4, 2, 6, 1, 5, 7, 15, 2,
    6, 10, 15, 18, 4, 2, 6, 100, 5, 1, 5, 8, 4, 2, 6, 1, 5, 7, 15, 2, 6, 10, 15,
    18, 4, 2, 6, 1, 5, 8, 4, 2, 6, 1, 5, 8, 4, 2, 6, 1, 5, 8, 41, 20, 6, 1, 5,
    8, 48, 32, 26, 19, 52, 81, 43, 2, 6, 1, 5, 8, 4, 2, 6, 1, 5, 8, 4, 2, 6,
  ];

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
          <Visualizer array={array} />
        </div>
      </div>
    </div>
  );
};

export default App;
