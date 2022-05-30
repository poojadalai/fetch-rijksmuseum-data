import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arts/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
