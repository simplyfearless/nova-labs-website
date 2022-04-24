import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="home">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
            </li>
        </ul>
    </div>
  );
}

export default Navigation;