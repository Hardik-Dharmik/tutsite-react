/* eslint-disable */
// eslint-disable-next-line
import { TypeAnimation } from "react-type-animation";
import "../css/Main.css";
import React from "react";

function Main() {
  return (
    <div className="jumbotron">
      <div className="main text-center py-5">
        <h3>fvngjb</h3>
        <h1>Education</h1>
        <TypeAnimation
          sequence={[
            "8th and 9th State and CBSE",
            1000,
            "10th State and CBSE",
            1000,
            "11th and 12th State and CBSE",
            1000,
            "JEE",
            1000,
            "NEET",
            1000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em" }}
        />

        <button className="main__btn">Contact Now</button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,234.7C384,235,480,245,576,250.7C672,256,768,256,864,229.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Main;
