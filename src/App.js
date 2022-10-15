import "./App.css";
import logo from "./spacex.jpg";

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        alt=""
        style={{ width: 200, display: "block", margin: "auto" }}
      />
    </div>
  );
}

export default App;
