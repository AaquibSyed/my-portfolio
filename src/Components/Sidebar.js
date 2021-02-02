import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineSharpIcon from "@material-ui/icons/MailOutlineSharp";
import RoomSharpIcon from "@material-ui/icons/RoomSharp";
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
          <MailOutlineSharpIcon />
        </IconButton>
        <IconButton>
          <Tooltip title="+918971670433">
            <CallIcon aria-label="delete" />
          </Tooltip>
        </IconButton>
        <IconButton>
          <img
            src="https://i.ibb.co/f11Mk2W/linkedin.png"
            alt="linkedin"
            border="0"
            className="MuiSvgIcon-root"
          />
        </IconButton>
        <IconButton>
          <img
            src="https://i.ibb.co/prRjZTn/Git-Hub-Mark-64px.png"
            alt="Git-Hub-Mark-64px"
            border="0"
            className="MuiSvgIcon-root "
          />
        </IconButton>
      </div>
      <div className="sidebar__links">
        <Link to="/skills">
          <li>Skills</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
      </div>
    </div>
  );
};
