import React from "react";
import { NavLink } from "react-router-dom";
import './footer.scss';

function Footer() {
  return (
    <footer>
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Features
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  About
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Comparison
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Support
                </NavLink>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;