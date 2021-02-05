import React from "react";
import "./Projects.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import GitHubIcon from "@material-ui/icons/GitHub";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const projects = [
  {
    name: "COVID 19 Tracker",
    imgURL1: "https://i.ibb.co/gJTTCZd/Covid19-Tracker-1.jpg",
    imgURL2: "https://i.ibb.co/7CDtFxD/Covid19-Tracker-2.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "React-ToDO ",
    imgURL1: "https://i.ibb.co/xYXgfQ3/todo1.jpg",
    imgURL2: "https://i.ibb.co/T1dmYkP/todo2.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "Click-n-share - A Snapchat clone",
    imgURL1: "https://i.ibb.co/R69BmN5/snapchat1.jpg",
    imgURL2: "https://i.ibb.co/C1dDvdx/snapchat2.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "Amazon clone",
    imgURL1: "https://i.ibb.co/2ZVb3mw/amazon1.jpg",
    imgURL2: "https://i.ibb.co/tC96jfQ/amazon2.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "Quiz Cards",
    imgURL1: "https://i.ibb.co/FK5vLNR/quizcards1.jpg",
    imgURL2: "https://i.ibb.co/R28xncp/quizcards2.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "Hangman",
    imgURL1: "https://i.ibb.co/qMWvCJd/hangman1.jpg",
    imgURL2: "https://i.ibb.co/JR9PzdN/hangman2.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "Spotify clone",
    imgURL1: "https://i.ibb.co/gJTTCZd/Covid19-Tracker-1.jpg",
    imgURL2: "https://i.ibb.co/gJTTCZd/Covid19-Tracker-1.jpg",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "Currency converter",
    imgURL1: "https://i.ibb.co/gJTTCZd/Covid19-Tracker-1.jpg",
    imgURL2: "https://i.ibb.co/gJTTCZd/Covid19-Tracker-1.jpg",
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
            <Zoom top cascade>
              <div className="project__detail">
                {/* pasted here */}
                <Carousel>
                  <img
                    className="project__image"
                    src={project.imgURL1}
                    alt={project.name}
                    border="0"
                  />
                  <img
                    className="project__image"
                    src={project.imgURL2}
                    alt={project.name}
                    border="0"
                  />
                </Carousel>
                {/* ended here */}
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
            </Zoom>
          ))}
        </div>
      </div>
    </Fade>
  );
};
