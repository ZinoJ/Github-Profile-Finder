import { Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./components/User";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
