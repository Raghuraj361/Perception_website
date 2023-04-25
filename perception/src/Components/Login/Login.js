import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login_container">
      <div className="login_left">
        <h2 className="login_heading">Welcome Back 👋🏻</h2>
        <div className="login_form">
          <input type="text" placeholder="Company Email Address" />
          <input type="password" placeholder="Password" />
          <div className="login_forgot">Forgot Password?</div>
          <button className="login_btn">Login</button>
          <button className="google_btn">
            <img
              className="google_img"
              src="https://cdn.imgbin.com/17/10/21/google-suite-icon-google-icon-LmAAJV07.jpg"
              alt="#"
            />{" "}
            Login with Google
          </button>
          <div className="login_or">OR</div>
          <div className="login_or">
            Register to become a <span>Beta User</span> 🚀
          </div>
        </div>
      </div>
      <div className="login_right">
        <div>
          <img
            className="right_img"
            src="https://perceptionai.app/static/media/cardImage.4d63480c5b53ea7a3349.png"
            alt="#"
          />
        </div>
        <div>
          <img
            className="left_img"
            src="https://perceptionai.app/static/media/cardImage.4d63480c5b53ea7a3349.png"
            alt="#"
          />
        </div>
        <div>
          <img
            className="right_img"
            src="https://perceptionai.app/static/media/cardImage.4d63480c5b53ea7a3349.png"
            alt="#"
          />
        </div>
        <div>
          <img
            className="left_img"
            src="https://perceptionai.app/static/media/cardImage.4d63480c5b53ea7a3349.png"
            alt="#"
          />
        </div>
        <div>
          <img
            className="right_img"
            src="https://perceptionai.app/static/media/cardImage.4d63480c5b53ea7a3349.png"
            alt="#"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
