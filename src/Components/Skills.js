import React from "react";
import "./Skills.css";
import Fade from "react-reveal/Fade";
import uuid from "react-uuid";

const skills = [
  {
    name: "HTML5",
    percentage: "seventy",
    className: "skills__detail",
    imgURL: "./skillsLogos/html.png",
  },
  {
    name: "CSS",
    percentage: "seventy",
    className: "skills__detail",
    imgURL: "./skillsLogos/css.png",
  },
  {
    name: "JavaScript",
    percentage: "eighty",
    className: "skills__detail",
    imgURL: "./skillsLogos/js.png",
  },
  {
    name: "NodeJs",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "./skillsLogos/nodejs.png",
  },
  {
    name: "ReactJs",
    percentage: "seventy",
    className: "skills__detail",
    imgURL: "./skillsLogos/react.png",
  },
  {
    name: "MongoDb",
    percentage: "fifty",
    className: "skills__detail",
    imgURL: "./skillsLogos/mongodb.png",
  },
  {
    name: "MS SQL",
    percentage: "seventy",
    className: "skills__detail",
    imgURL: "./skillsLogos/mssql.png",
  },
  {
    name: "C#",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "./skillsLogos/csharp.png",
  },
  {
    name: "Photoshop",
    percentage: "eighty",
    className: "skills__detail",
    imgURL: "./skillsLogos/photoshop.png",
  },
  {
    name: "Illustrator",
    percentage: "seventy",
    className: "skills__detail",
    imgURL: "./skillsLogos/illustrator.png",
  },
  {
    name: "Figma",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "./skillsLogos/figma.png",
  },
];

export const Skills = () => {
  return (
    <Fade>
      <div className="skills__main">
        <div className="header">
          <h1>SKILLS</h1>
        </div>
        <div className="skills">
          {skills.map((skill) => (
            <Fade top cascade key={uuid()}>
              <div className="skills__Container">
                <img
                  src={skill.imgURL}
                  className="skills__image"
                  alt={skill.name}
                />
                <div className="skills__bar">
                  <div className={`${skill.className} ${skill.percentage}`}>
                    <p className="skills__name">{skill.name}</p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Fade>
  );
};
