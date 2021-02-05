import React from "react";
import "./Projects.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fade from "react-reveal/Fade";

const projects = [
  {
    name: "COVID 19 Tracker",
    imgURL: "https://i.ibb.co/f1WtTT1/Covid19-Tracker-1.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "COVID 19 Tracker",
    imgURL: "https://i.ibb.co/f1WtTT1/Covid19-Tracker-1.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "COVID 19 Tracker",
    imgURL: "https://i.ibb.co/f1WtTT1/Covid19-Tracker-1.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "COVID 19 Tracker",
    imgURL: "https://i.ibb.co/f1WtTT1/Covid19-Tracker-1.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "COVID 19 Tracker",
    imgURL: "https://i.ibb.co/f1WtTT1/Covid19-Tracker-1.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
];

export const Projects = () => {
  return (
    <Fade>
      <div className="projects__main">
        <div className="header">
          <h1>PROJECTS</h1>
        </div>
        <div className="project__container">
          {projects.map((project) => (
            <div className="project__detail">
              <img src={project.imgURL} alt={project.name} border="0" />
              <div className="project__options">
                <div className="project__play">
                  <a href={project.hostURL}>
                    <PlayArrowIcon fontSize="large" />
                  </a>
                </div>
                <div className="project__github">
                  <a href={project.gitHubURL}>
                    <GitHubIcon fontSize="large" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};
