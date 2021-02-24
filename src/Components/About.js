import "./About.css";
import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

function About() {
  return (
    <div className="about__main">
      <div className="about__intro">
        <div className="intro__text">
          <h1 className="text__main">Hi, I Am Aaquib</h1>
          <h6 className="tex__sub">A Passionate software developer</h6>
        </div>
        <div className="intro__pic">
          <img src="./greyDp.jpg" alt="greyDp" />
        </div>
      </div>
    </div>
  );
}

export default About;
