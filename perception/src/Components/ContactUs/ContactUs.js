import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contactUs_container">
      <div className="contectUs_formContainer">
        <h2>Contact Us Now!</h2>
        <form className="contectUs_form">
          <label>
            Your Name
            <input type="text" placeholder="Enter Your Name" />
          </label>
          <label>
            Mobile Number
            <input type="text" placeholder="Enter Your Name" />
          </label>
          <label>
            Email Address
            <input type="text" placeholder="Enter Your Email Address" />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
