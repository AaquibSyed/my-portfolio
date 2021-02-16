import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import RoomSharpIcon from "@material-ui/icons/RoomSharp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Tooltip, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { switchDarkMode } from "./../App";
export const Sidebar = () => {
  const viewResume = () => {
    window.location.href = "/AaquibResume.pdf";
  };
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          src="./myProfile.png"
          alt="avatar1"
          border="0"
        />
        <div className="sidebar__detail">
          <h2>Syed Aaquib</h2>
          <span className="sidebar__location">
            <RoomSharpIcon />
            <h6>Hyderabad</h6>
          </span>
        </div>
      </div>
      <div className="sidebar__contact">
        <IconButton>
          <Tooltip title="m.nsyedaaquib@gmail.com">
            <EmailIcon />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="+918971670433">
            <CallIcon aria-label="delete" />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Go to Aaquib's Github">
            <a href="https://github.com/AaquibSyed">
              <GitHubIcon />
            </a>
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Go to Aaquib's LinkedIn Profile">
            <a href="https://www.linkedin.com/in/syed-aaquib-a8135479/">
              <LinkedInIcon fontSize="large" />
            </a>
          </Tooltip>
        </IconButton>
      </div>
      <div className="sidebar__links">
        <div className="link__div">
          <Link to="/">
            <h3 className="link__text">About</h3>
          </Link>{" "}
        </div>
        <div className="link__div">
          <Link to="/skills">
            <h3 className="link__text">Skills</h3>
          </Link>{" "}
        </div>
        <div className="link__div">
          <Link to="/projects">
            <h3 className="link__text">Projects</h3>
          </Link>{" "}
        </div>
        <div className="link__div download__resume" onClick={viewResume}>
          <VisibilityIcon className="download__icon" />
          <Link to="/#">
            <h3 className="link__text">Resume</h3>
          </Link>
        </div>
      </div>
      <div className="sidebar__darkSwitch" onClick={switchDarkMode}>
        <Brightness4Icon></Brightness4Icon>
      </div>
    </div>
  );
};
