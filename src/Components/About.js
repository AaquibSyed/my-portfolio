import "./About.css";
import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

const institute = [
  {
    name: "Dr . Ambedkar Institute of Technology",
    location: "Bengaluru",
    designation: "B.E in Computer Science and Engineering",
    year: 2016,
  },
  {
    name: "St. Aloysius Pre-University College",
    location: "Mangalore",
    designation: "Physics, Chemistry, Maths, Biology, Computers",
    year: 2012,
  },
  {
    name: "A.L.G Crescent School",
    location: "Madikeri",
    year: 2010,
  },
];

function About() {
  return (
    <div className="about__main">
      <div className="about__intro">
        <div className="intro__text">
          <Fade left>
            <h1 className="text__main">Hi, I Am Aaquib</h1>
            <h6 className="tex__sub">A Passionate software developer</h6>
          </Fade>
        </div>
        <div className="intro__pic">
          <Fade right>
            {" "}
            <img src="./greyDp.jpg" alt="greyDp" />
          </Fade>
        </div>
      </div>
      <div className="about__institutes">
        <div className="about__experience">
          <h1>
            <WorkIcon /> Experience
          </h1>
          <div className="experience__details">
            <h2>
              Tata Consultancy Services,
              <small>
                <i> Hyderabad</i>
              </small>
            </h2>
            <h3>System Engineer</h3>
            <i>Oct 2016 - till date</i>
          </div>
        </div>
        <div className="about__education">
          <h1>
            <SchoolIcon /> Education
          </h1>

          {institute.map((institute) => (
            <div key={institute.year} className="education__details">
              <h2>
                {institute.name},
                <small>
                  <i> {institute.location}</i>
                </small>
              </h2>
              <h3>{institute.designation}</h3>
              <i> {institute.year}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
