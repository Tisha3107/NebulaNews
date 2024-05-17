import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top font-weight-bolder">
          <Link className="navbar-brand" to="/home">
            NebulaNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  HOME <span className="sr-only">(current)</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  BUSINESS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  ENTERTAINMENT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  GENERAL
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  HEALTH
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  SCIENCE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  TECHNOLOGY
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-outline-light text-light">
            SIGN IN
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
