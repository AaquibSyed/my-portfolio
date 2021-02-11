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
    name: "COVID-19 Tracker",
    imgURL1: "./projectScreens/Covid19Tracker_1.JPG",
    imgURL2: "./projectScreens/Covid19Tracker_2.JPG",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "React-ToDO ",
    imgURL1: "./projectScreens/todo1.JPG",
    imgURL2: "./projectScreens/todo2.JPG",
    hostURL: "https://aaquib-todoapp.web.app",
    gitHubURL: "https://github.com/AaquibSyed/react_todo_app",
  },
  {
    name: "Click-n-share - A Snapchat clone",
    imgURL1: "./projectScreens/snapchat1.JPG",
    imgURL2: "./projectScreens/snapchat2.JPG",
    hostURL: "https://snapchat-react-redux.web.app",
    gitHubURL: "https://github.com/AaquibSyed/snapchat-react-redux",
  },
  {
    name: "Amazon clone",
    imgURL1: "./projectScreens/amazon1.JPG",
    imgURL2: "./projectScreens/amazon2.JPG",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "Quiz Cards",
    imgURL1: "./projectScreens/quizcards1.JPG",
    imgURL2: "./projectScreens/quizcards2.JPG",
    hostURL: "https://aaquib-quizcards.web.app",
    gitHubURL: "https://github.com/AaquibSyed/QuizCards",
  },
  {
    name: "Hangman",
    imgURL1: "./projectScreens/hangman1.JPG",
    imgURL2: "./projectScreens/hangman2.JPG",
    hostURL: "https://hangman-react-redux.web.app",
    gitHubURL: "https://github.com/AaquibSyed/hangman-with-react",
  },
  {
    name: "Spotify clone",
    imgURL1: "./projectScreens/spotify1.JPG",
    imgURL2: "./projectScreens/spotify2.JPG",
    hostURL: "https://spotify-clone-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/spotify-clone",
  },
  {
    name: "Currency converter",
    imgURL1: "./projectScreens/Covid19Tracker_1.JPG",
    imgURL2: "./projectScreens/Covid19Tracker_2.JPG",
    hostURL: "https://aaquib-currency-converter.web.app",
    gitHubURL: "https://github.com/AaquibSyed/currency-converter",
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
