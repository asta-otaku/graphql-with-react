import "./App.css";
import logo from "./spacex.jpg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Launches from "./components/Launches";
import Launch from "./components/Launch";
import InvalidPage from "./components/InvalidPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 200, display: "block", margin: "auto" }}
        />
        <Routes>
          <Route path="/" element={<Launches />} />
          <Route path="/launch/:id" element={<Launch />} />
          <Route path="*" element={<InvalidPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
