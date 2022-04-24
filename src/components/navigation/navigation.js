import React from "react";
import { NavLink } from "react-router-dom";
import './navigation.scss';

function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="nav__logo">

        </div>
        <div className="nav__links">
          <ul>
              <li>
                  <NavLink to="/">
                    Home
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/">
                    Features
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/">
                    About
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/">
                    Comparison
                  </NavLink>
              </li>
              <li>
                  <NavLink to="/">
                    Support
                  </NavLink>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;