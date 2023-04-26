import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NetworkGraph from "./components/networkGraph";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NetworkGraph />}></Route>
      </Routes>
    </div>
  );
}

export default App;
