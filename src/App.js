import "./App.css";
import logo from "./spacex.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launches from "./components/Launches";
import MissionKey from "./components/MissionKey";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 200, display: "block", margin: "auto" }}
        />
        <h1 className="display-4 my-3">Launches</h1>
        <MissionKey />
        <Routes>
          <Route path="/" component={<Launches />} />
        </Routes>
        <Launches />
      </div>
    </BrowserRouter>
  );
}

export default App;
