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
    imgURL1:
      "https://previews.dropbox.com/p/thumb/ABFjpcgfZcWOAI1df6y8fPexDKuqRlFwztf9zqghkyCV5uE0GAaJoEjszYOXpJn3Ny3J_oCO-hqNQAIF37xImwyy9b_SJA2WyElkFMadwHgTqpt5IT0Ckp5b_QryqdwgaaqifXLO5DLzfpi4Yi6EinOOMOiU73sQLYQWk72J5dG-3UXk3TjCTF-Dc9TpfE07WtQmJLPpFtptOA9n9ZwQBhFuVvdJRWi4gBRRSte3pnoePGv9UvQq2yXazIdmI2K5QhMJT_Xi5ZZUphmkn224kf2iqcQiE6mz6eYkyCsNYL0YzSKzQHIGyKCYdCB3hFhwGuasQMiaiyjq34dXNUgTLZiJBYVyempbd6VnT_aqZf5ibA/p.jpeg?fv_content=true&size_mode=5",
    imgURL2:
      "https://previews.dropbox.com/p/thumb/ABGxXbsw4KnmiWeRSy6mYlMluDOrhf65nKXAvG-GGVle5Pi2SOFoxYcvkQs-uvIW3IJQETyqyfq-Wf4xB7PcqDngob-Dyi49DkbQnACEJFWs0pbPwLXl_-mNmijco-nw5tCfmCJ5IPdPCvmH_zC7fRC9V-5XqoXFiKPQcGoaZkiUS86bD9S7kmlbbmlOI3HIBPZH3m-B3jTCoMwkx-Ud9zRibIiPD87Opz8t5OOQu8-uFpU98dPa9FzdWt0RN_5jrWaFW1RsqHt75ZKWIstldqDLvQmleNZvGmq8DhvuokLXoWsuiJfNWhM8Ir5aL8_tuZi6pKINQ2cjyQt-1O6XW_NAIcYVLcOoGXIbka7rcE5Jjg/p.jpeg?fv_content=true&size_mode=5",
    hostURL: "https://covid19-tracker-aaq.web.app",
    gitHubURL: "https://github.com/AaquibSyed/Covid19tracker",
  },
  {
    name: "React-ToDO ",
    imgURL1: "https://i.ibb.co/xYXgfQ3/todo1.jpg",
    imgURL2: "https://i.ibb.co/T1dmYkP/todo2.jpg",
    hostURL: "https://aaquib-todoapp.web.app",
    gitHubURL: "https://github.com/AaquibSyed/react_todo_app",
  },
  {
    name: "Click-n-share - A Snapchat clone",
    imgURL1: "https://i.ibb.co/R69BmN5/snapchat1.jpg",
    imgURL2: "https://i.ibb.co/C1dDvdx/snapchat2.jpg",
    hostURL: "https://snapchat-react-redux.web.app",
    gitHubURL: "https://github.com/AaquibSyed/snapchat-react-redux",
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
    hostURL: "https://aaquib-quizcards.web.app",
    gitHubURL: "https://github.com/AaquibSyed/QuizCards",
  },
  {
    name: "Hangman",
    imgURL1: "https://i.ibb.co/qMWvCJd/hangman1.jpg",
    imgURL2: "https://i.ibb.co/JR9PzdN/hangman2.jpg",
    hostURL: "https://hangman-react-redux.web.app",
    gitHubURL: "https://github.com/AaquibSyed/hangman-with-react",
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
