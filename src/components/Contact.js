import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

function Contact() {
  return (
    <section className=" container mb-4" id="contact">
      <h2 className="h1-responsive font-weight-bold text-center my-4">
        Contact
      </h2>

      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly.
      </p>

      <div className="row">
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <LocationOnIcon />
              <p>San Francisco, CA 94126, USA</p>
            </li>

            <li>
              <PhoneIcon />
              <p>+ 01 234 567 89</p>
            </li>

            <li>
              <MailIcon />
              <p>contact@mdbootstrap.com</p>
            </li>
          </ul>
        </div>
        <div className="col-md-9 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            action="mail.php"
            method="POST"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                  />
                  <label for="name" className="">
                    Your name
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-control"
                  />
                  <label for="email" className="">
                    Your Mobile Number
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                  <label for="subject" className="">
                    Class Enquiry Ex. 8th, 9th, 10th etc
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label for="message">Your message</label>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
            <a
              className="btn btn-primary"
              onclick="document.getElementById('contact-form').submit();"
            >
              Send
            </a>
          </div>
          <div className="status"></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
