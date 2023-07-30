import React from "react";
import user from "../images/article-img.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container-fluid px-0" id="home">
        <div className="container-md pt-md-auto pt-5 p-4">
          <div className="row">
            <div className="col-md-12 mx-auto p-0">
              <div className="row p-0 m-0">
                <div className="p-0 m-0 col-md-12 mx-auto text-uppercase text-center">
                  <h1 className="greet">Hii, i am</h1>
                  <h1 className="header">bharat agrawal</h1>
                  <h3 className="role py-1 px-3">front-end Developer</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row about mt-5 p-4">
            <div className="col-md-4 p-0 d-flex align-items-center">
              <div className="imgUser">
                <img src={user} alt="admin's image" className="w-100" />
              </div>
            </div>
            <div className="col-md-8 details mt-md-0 mt-4 text-white">
              <h1
                className="text-center text-uppercase  fw-bolder pb-2 aboutHeader"
                style={{ color: "#f4b183" }}
              >
                about me
              </h1>
              <p className="px-md-4">
                Seeking a beginner role to enhance and explore my technical
                knowledge gained in college in the last 4 years. I hold a B.Tech
                degree from Parul University college.
              </p>
            </div>
          </div>
        </div>

        {/* ---------------------skill button */}

        <div className="container-md pt-4 pb-5">
          <div className="cta d-flex align-items-center justify-content-md-start justify-content-between gap-3 text-center ">
            <div className="ctaBtn text-uppercase fw-bold">
              <Link
                to="/skills"
                className="text-decoration-none text-white bTn "
              >
                Skills
              </Link>
            </div>
            <div className="ctaBtn text-uppercase fw-bold">
              <Link
                to="/contact"
                className="text-decoration-none text-white bTn "
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
