import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import logo from "./assets/icon.png";
function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <React.Fragment>
      <div
        className="container"
        style={{ width: screenSize.width, height: screenSize.height }}
      >
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <img src={logo} alt="Logo" width={48} height={48} />
              <h1 className="title">WELCOME!</h1>
              <p className="des">CONTACT ME</p>
            </div>
            <div className="card-back">
              <p className="title-back">Ponlawat Chatkaew</p>
              <p className="des-back">Computer engineer</p>
              <a href="https://github.com/ponlawat2001" target="blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
