import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_contain">
      <div className="footer_top">
        <div className="firstDiv">
          <h2 className="footer_heading">Perception AI</h2>
          <span>Get in touch</span>
          <span>contact@perceptionai.app</span>
        </div>
        <div className="secondDiv"></div>
        <div className="thirdDiv"></div>
        <div className="fortDiv"></div>
      </div>
      <hr />
      <div className="footer_bottum">
        <p>Copyright By PerceptionAi 2023. All right reserved</p>
        <div className="footer_connect">
          <span>Connect Us</span>
          <a
            target="white"
            href="https://in.linkedin.com/company/perceptionaiapp"
          >
            <img
              className="social_icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_Mv5vDjvb-zTpraPCpByxtGNg8mgfoErEQ&usqp=CAU"
              alt="linkedin-logo"
            />
          </a>
          <a
            target="white"
            href="https://twitter.com/insightgpt?t=_LHns14JHU2TSQeAKMm6mw&s=09"
          >
            <img
              className="social_icon"
              src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png"
              alt="twitter-logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
