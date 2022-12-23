import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { Avatar } from "@mui/material";
import "../css/FacultySection.css";

function FacultySection() {
  return (
    <div className="faculty">
      <h2>Faculties</h2>
      <Carousel indicators={false}>
        <Carousel.Item>
          <div className="faculty__Group">
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="faculty__Group">
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="faculty__Group">
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
            <div className="faculty__Info">
              <img src="https://mui.com/static/images/avatar/1.jpg" />
              <h3 className="faculty__name">Faculty Name</h3>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default FacultySection;
