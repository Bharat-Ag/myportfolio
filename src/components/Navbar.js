import React from "react";
import { FaSquareFull } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import resume from "../../src/bharat_resume.pdf";

export default function Navbar() {
  return (
    <div
      id="navBar"
      className="container-fluid position-sticky top-0 z-2 bg-white p-md-auto px-0"
    >
      <div className="container-lg">
        <div className="row no-gutter">
          <div className="col py-2">
            <nav id="navbar" className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink
                  className="navbar-brand d-flex justify-content-center align-items-center"
                  to="/"
                >
                  <FaSquareFull className="icon2" />
                  <FaSquareFull className="icon1" />
                  <span className="brandName">portfolio</span>
                </NavLink>
                <button
                  className="navbar-toggler border-0 d-flex justify-content-center align-content-center p-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                >
                  <BiMenu className="burger d-lg-none" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/skills">
                        Skills
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="/projects">
                        projects
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        download="bharat_resume.pdf"
                        href={resume}
                      >
                        resume
                      </a>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
