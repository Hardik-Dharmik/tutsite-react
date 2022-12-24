import React from "react";
import "../css/Courses.css";
import img_8 from "../img/8.png";
import img_9 from "../img/9.png";
import img_10 from "../img/10.png";
import img_11_12 from "../img/11_12.png";
import img_jee from "../img/jee.png";
import img_neet from "../img/neet.png";

function Courses() {
  return (
    <div className="courses container text-center" id="course">
      <h2>Courses</h2>

      <div className="course__Group d-flex flex-sm-column flex-lg-row">
        <div className="course__Info">
          <img src={img_8} alt="faculty" />
          <h3 className="course__Name">8th Standard</h3>
        </div>
        <div className="course__Info">
          <img alt="faculty" src={img_9} />
          <h3 className="course__Name">9th Standard</h3>
        </div>
        <div className="course__Info">
          <img alt="faculty" src={img_10} />
          <h3 className="course__Name">10th Standard</h3>
        </div>
      </div>
      <div className="course__Group d-flex flex-sm-column flex-lg-row">
        <div className="course__Info">
          <img alt="faculty" src={img_11_12} />
          <h3 className="course__Name">11th and 12th Standard</h3>
        </div>
        <div className="course__Info">
          <img alt="faculty" src={img_jee} />
          <h3 className="course__Name">Joint Entrance Exam</h3>
        </div>
        <div className="course__Info">
          <img alt="faculty" src={img_neet} />
          <h3 className="course__Name">National Eligibility Entrace Test</h3>
        </div>
      </div>
    </div>
  );
}

export default Courses;
