import "../css/Footer.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

function Footer() {
  return (
    <div className="container-fluid position-relative overlay-top bg-dark text-white-50 py-5">
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 mb-5">
            <a
              href="https://www.free-css.com/free-css-templates"
              className="navbar-brand"
            >
              <h1 className="mt-n2 text-uppercase text-white">
                <i className="fa fa-book-reader mr-3"></i>Tuition
              </h1>
            </a>
            <p className="m-0">
              Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem
              at et diam est, tempor rebum ipsum sit ea tempor stet et
              consetetur dolores. Justo stet diam ipsum lorem vero clita diam
            </p>
          </div>
          <div className="col-md-6 mb-5">
            <h3 className="text-white mb-4">Contact Us</h3>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  //   style="padding:30px;"
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-5">
            <h3 className="text-white mb-4">Contact Information</h3>
            <p>
              <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York,
              USA
            </p>
            <p>
              <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope mr-2"></i>mail@domain.com
            </p>
            <div className="d-flex justify-content-start mt-4">
              <a
                className="text-white mr-4"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fab fa-2x fa-twitter"></i>
              </a>{" "}
              <a
                className="text-white mr-4"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fab fa-2x fa-facebook-f"></i>
              </a>{" "}
              <a
                className="text-white mr-4"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fab fa-2x fa-linkedin-in"></i>
              </a>{" "}
              <a
                className="text-white"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fab fa-2x fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h3 className="text-white mb-4">Courses</h3>
            <div className="d-flex flex-column justify-content-start">
              <a
                className="text-white-50 mb-2"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fa fa-angle-right mr-2"></i>8th and 9th State and
                CBSE
              </a>{" "}
              <a
                className="text-white-50 mb-2"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fa fa-angle-right mr-2"></i>10th State and CBSE
              </a>{" "}
              <a
                className="text-white-50 mb-2"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fa fa-angle-right mr-2"></i>JEE
              </a>{" "}
              <a
                className="text-white-50 mb-2"
                href="https://www.free-css.com/free-css-templates"
              >
                <i className="fa fa-angle-right mr-2"></i>NEET
              </a>{" "}
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="d-flex flex-row justify-content-between ">
              <YouTubeIcon className="footer__Icon" />
              <InstagramIcon className="footer__Icon" />
              <FacebookIcon className="footer__Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
