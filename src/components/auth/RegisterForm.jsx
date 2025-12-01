// src/components/auth/LoginForm.jsx
import React from "react";
import "./LoginForm.css"; // CSS yang masih satu file dengan komponen

export default function LogupForm() {
  return (
    <div className="loginform-container">
      <h1 className="title">Sign Up</h1>
      <p className="subtitle">Create your account</p>

      {/* Input Email */}
      <div className="input-group">
        <span className="icon">📧</span>
        <input type="email" placeholder="Enter your Email" />
      </div>

      {/* Input Password */}
      <div className="input-group">
        <span className="icon">🔒</span>
        <input type="password" placeholder="Enter your Password" />
      </div>

      {/* Sign In Button */}
      <button className="btn-primary">Sign Up</button>

      <div className="divider">Or</div>

      {/* Google Button */}
      <button className="btn-google">
        <span className="google-icon"><img width="20" height="20" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/></span> Sign Up with Google
      </button>

      {/* Text bawah */}
      <p className="signup-text">
        Already have an acccount? <a href="#">Sign In</a>
      </p>

      {/* Footer logo */}
      <footer className="footer">
        <span className="logo">G</span> VoyageLib
      </footer>
    </div>
  );
}
