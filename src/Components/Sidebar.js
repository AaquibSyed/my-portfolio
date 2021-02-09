import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import RoomSharpIcon from "@material-ui/icons/RoomSharp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Tooltip, IconButton } from "@material-ui/core";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img
          className="sidebar__avatar"
          src="https://i.ibb.co/VMksd9c/avatar1.png"
          alt="avatar1"
          border="0"
        />
        <h2>Syed Aaquib</h2>
        <span className="sidebar__location">
          <RoomSharpIcon />
          <p>Hyderabad</p>
        </span>
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
          <Tooltip title="Go to Aaquib's LinkedIn Profile">
            <a href="https://www.linkedin.com/in/syed-aaquib-a8135479/">
              <img
                src="https://i.ibb.co/SysKMJq/linkedIN.png"
                alt="linkedin"
                border="0"
                className="MuiSvgIcon-root linkedin"
              />
            </a>
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Go to Aaquib's Github">
            <a href="https://github.com/AaquibSyed">
              <img
                src="https://i.ibb.co/0c32T4p/icons8-github-100.png"
                alt="Git-Hub-Mark-64px"
                border="0"
                className="MuiSvgIcon-root github"
              />
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
        <div className="link__div download__resume">
          <VisibilityIcon className="download__icon" />
          <Link to="/Syed_Aaquib_MN_webEngineer_Resume_latest.pdf">
            <h3 className="link__text">Resume</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
