import "./App.css";
import logo from "./spacex.jpg";
import Launches from "./components/Launches";

function App() {
  return (
    <div className="container">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 200, display: "block", margin: "auto" }}
      />
      <h1 className="display-4 my-3">Launches</h1>
      <Launches />
    </div>
  );
}

export default App;
