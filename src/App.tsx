import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import logo from "./assets/icon.png";
import faceicon from "./assets/facebook.png";
import disicon from "./assets/discord.png";
import linkinicon from "./assets/linkedin.png";
import giticon from "./assets/github-sign.png";

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
              <div className="card-back-inner-left">
                <p className="contact">
                  <a
                    href="https://www.linkedin.com/in/ponlawat-chatkaew-11491627a"
                    target="blank"
                  >
                    <div>
                      <img src={linkinicon} width={16} />
                      Linkin
                    </div>
                  </a>
                  <a href="https://github.com/ponlawat2001" target="blank">
                    <div>
                      <img src={giticon} width={16} />
                      Github
                    </div>
                  </a>
                  <a
                    href="https://discord.com/users/mixponlawat"
                    target="blank"
                  >
                    <div>
                      <img src={disicon} width={16} />
                      Discord
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/mixzaponlawat"
                    target="blank"
                  >
                    <div>
                      <img src={faceicon} width={16} />
                      Facebook
                    </div>
                  </a>
                </p>
              </div>

              <div className="card-back-inner">
                <p className="title-back">Ponlawat</p>
                <p className="title-back">Chatkaew</p>
                <p className="des-back">Computer engineer</p>
                <p className="solid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
