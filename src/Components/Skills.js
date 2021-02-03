import React from "react";
import "./Skills.css";
const skills = [
  {
    name: "HTML5",
    percentage: "seventy",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/wLPnQ6H/html5-logo.png",
  },
  {
    name: "CSS",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/s5nNxk7/css.png",
  },
  {
    name: "JavaScript",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/rx6G9cv/js.png",
  },
  {
    name: "NodeJs",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/Vv4cvNc/nodejs.png",
  },
  {
    name: "ReactJs",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/zsLTTH2/react.png",
  },
  {
    name: "MongoDb",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/4PffNHy/mongodb.png",
  },
  {
    name: "MS SQL",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/n1QxrS4/mssql.png",
  },
  {
    name: "C#",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/wLPnQ6H/html5-logo.png",
  },
  {
    name: "Photoshop",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/fQcKWC9/photoshop.png",
  },
  {
    name: "Illustrator",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/W2g1Nbx/illustrator.png",
  },
  {
    name: "Figma",
    percentage: "sixty",
    className: "skills__detail",
    imgURL: "https://i.ibb.co/PMZ2DQ6/figma.png",
  },
];

export const Skills = () => {
  return (
    <div className="skills">
      {skills.map((skill) => (
        <div className="skills__Container">
          <img src={skill.imgURL} className="skills__image" alt={skill.name} />
          <div className="skills__bar">
            <div className={`${skill.className} ${skill.percentage}`}>
              <p className="skills__name">{skill.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
