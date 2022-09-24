import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "./App.css";
import Loader from "./components/Loader";
import HomePage from "./pages/HomePage";

function App() {
  const [loader, setLoader] = useState(false)

  useEffect (() => {
    setLoader(true)
    setTimeout(()=> {
      setLoader(false)
    },8000)
  },[])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="app">
      {loader ? <Loader /> : <HomePage /> }
      <BsFillArrowUpSquareFill
        className="toTop"
        onClick={() => scrollToTop()}
      />
    </div>
  );
}

export default App;
