import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/FacultySection.css";

function FacultySection() {
  return (
    <div className="faculty" id="faculties">
      <h2>Faculties</h2>
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="faculty__Group d-flex flex-column flex-sm-column flex-lg-row">
            <div className="faculty__Info">
              <img
                src="https://mui.com/static/images/avatar/1.jpg"
                alt="faculty"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img
                alt="faculty"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img
                alt="faculty"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="faculty__Group d-flex flex-column flex-sm-column flex-lg-row">
            <div className="faculty__Info">
              <img
                src="https://mui.com/static/images/avatar/1.jpg"
                alt="faculty"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img
                alt="faculty"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img
                alt="faculty"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="faculty__Group d-flex flex-column flex-sm-column flex-lg-row">
            <div className="faculty__Info">
              <img
                src="https://mui.com/static/images/avatar/1.jpg"
                alt="faculty"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img
                alt="faculty"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img
                alt="faculty"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FacultySection;
