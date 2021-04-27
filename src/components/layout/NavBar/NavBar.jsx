import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import logo4 from "../../../assets/images/logo4.svg";
import img_profile from "../../../assets/images/img_profile.svg";
import img_option from "../../../assets/images/img_option.svg";

const NavBar = () => {
  return (
    <div>
      <div className="header">
        <div className="left_header">
          <ul className="ul_left">
            <li>
              <img className="logo_header" src={logo4} alt="logo" />
            </li>

            <li>RUBINAI</li>
          </ul>
        </div>

        <div className="right_header">
          <ul className="ul_right">
            <li>
              <NavLink
                className="link"
                exact={true}
                to="/"
                activeClassName="active"
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                exact={true}
                to="/temp"
                activeClassName="active"
              >
                Reports
              </NavLink>
            </li>
            <li>Billing</li>
            <li>Support</li>

            <li>
              <img
                className="img_profile"
                src={img_profile}
                alt="img_profile"
              />
            </li>
            <li>
              <img className="img_option" src={img_option} alt="img_option" />
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="sidebar_left"></div> */}
    </div>
  );
};

export default NavBar;
