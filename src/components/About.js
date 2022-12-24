import React from "react";
import logo from "../img/logo.png";

function About() {
  return (
    <div id="about">
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title position-relative mb-4">
                <h1 className="display-4">About Us</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
                iste, exercitationem debitis suscipit nobis veritatis? Sit
                obcaecati libero quis nemo! Obcaecati minus accusamus voluptatem
                quam non. Voluptatem aperiam nemo alias.
              </p>
              <div className="row pt-3 mx-0">
                <div className="col-4 px-0 rounded">
                  <div className="bg-success text-center p-2 rounded-5 me-1">
                    <h1 className="text-white" data-toggle="counter-up">
                      100+
                    </h1>
                    <h6 className="text-uppercase text-white">Students</h6>
                  </div>
                </div>
                <div className="col-4 px-0">
                  <div className="bg-warning text-center p-2 rounded-5 me-1 ">
                    <h1 className="text-white" data-toggle="counter-up">
                      1234
                    </h1>
                    <h6 className="text-uppercase text-white">Centers</h6>
                  </div>
                </div>
                <div className="col-4 px-0">
                  <div className="bg-info text-center p-2 rounded-5 me-1">
                    <h1 className="text-white" data-toggle="counter-up">
                      123
                    </h1>
                    <h6 className="text-uppercase text-white">Experience</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="position-relative h-100">
                <img
                  src={logo}
                  alt="website template image"
                  className="position-absolute w-100 h-100 rounded-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
