import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="shadow-5">
        <p className="footer">
          <small className="mh2">&copy; Copyright 2020, Suhail Murtaza</small>
        </p>
        <div className="navLinks">
          <p
            onClick={() => onRouteChange("signout")}
            className="f3 link underline ma2 ph3 pointer"
          >
            Sign Out
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="shadow-5">
        <p className="footer">
          <small className="mh2">&copy; Copyright 2020, Suhail Murtaza</small>
        </p>
        <div className="navLinks">
          <p
            onClick={() => onRouteChange("login")}
            className="f3 link underline ma2 ph3 pointer"
          >
            Log In
          </p>
          <p
            onClick={() => onRouteChange("signup")}
            className="f3 link underline ma2 ph3 pointer"
          >
            Sign Up
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
