import React from "react";
import googleIcon from "../src/assets/google.svg";
import appleIcon from "../src/assets/apple.svg";
import "./index.css";

const login = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src={googleIcon} alt="Google" className="scial-icon" />
          Google
        </button>
        <button className="social-button">
          <img src={appleIcon} alt="Google" className="scial-icon" />
          Apple
        </button>
      </div>
      <p className="separator">
        <span>or</span>
      </p>
      <form action="#" className="login-form">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email address"
            className="input-feild"
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="Password"
            placeholder="Password"
            className="input-feild"
            required
          />
          <i className="material-symbols-rounded">lock</i>
        </div>
        <a href="#" className="forgot-pass-link">
          Forgot password
        </a>
        <button className="login-button">Log In</button>
      </form>
      <p className="signup-text">
        Don't have an account?
        <a href="#">signup now </a>
      </p>
    </div>
  );
};

export default login;
