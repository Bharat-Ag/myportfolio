import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaSass,
  FaReact,
} from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Skill() {
  return (
    <>
      <div className="container-fluid" id="skills">
        <div className="container-md p-0 mt-4 pb-5">
          <div className="row gy-4 ">
            <div className="skillHeader">
              <h1
                className="title text-uppercase p-0 m-0 text-center"
                style={{ fontWeight: "700", fontSize: "52px" }}
              >
                Skills
              </h1>
            </div>
            <div className="col-sm-6 col-11 text-center mx-auto">
              <div className="skilCard py-5" id="html">
                <FaHtml5 style={{ fontSize: "70px", color: "#FF5C29" }} />
                <FaCss3Alt style={{ fontSize: "70px", color: "#306AF1" }} />
                <h1
                  className="text-uppercase"
                  style={{ fontSize: "30px", fontWeight: "900" }}
                >
                  Html,Css
                </h1>
                <p className="text-uppercase">FlexBox, Responsive layout</p>
              </div>
            </div>
            <div className="col-sm-6 col-11 text-center mx-auto">
              <div className="skilCard py-5" id="js">
                <FaJsSquare style={{ fontSize: "70px", color: "#F7E025" }} />
                <h1
                  className="text-uppercase"
                  style={{ fontSize: "30px", fontWeight: "900" }}
                >
                  JavaScript
                </h1>
                <p className="text-uppercase">
                  DOM, API call, Array & String Manipulation
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-11 text-center mx-auto">
              <div className="skilCard py-5 px-lg-3" id="bt">
                <FaBootstrap style={{ fontSize: "70px", color: "#8A18FD" }} />
                <FaSass
                  className="ms-4"
                  style={{ fontSize: "70px", color: "#CF6C9C" }}
                />
                <h1
                  className="text-uppercase text-wrap"
                  style={{ fontSize: "35px", fontWeight: "900" }}
                >
                  Bootstrap/ SASS
                </h1>
                <p className="text-uppercase">
                  Variable, Operators, Mixin, Nested
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-11 text-center mx-sm-0 mx-auto">
              <div className="skilCard py-5" id="react">
                <FaReact style={{ fontSize: "70px", color: "#08DDFF" }} />
                <h1 style={{ fontSize: "35px", fontWeight: "900" }}>ReactJs</h1>
                <p className="text-uppercase">react hooks and libraries</p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <Link
                to="/projects"
                className="text-decoration-none text-white text-center pjtBtn d-block text-uppercase rounded-2"
              >
                My Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
