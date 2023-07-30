import React from "react";
import { FaHashtag } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { CgInfinity } from "react-icons/cg";
import { BsCloudHaze2Fill, BsFileImage } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { AiOutlineQrcode } from "react-icons/ai";

export default function Projects() {
  return (
    <>
      <div className="container-fluid" id="projects">
        <div className="container-md p-0 mt-4 pb-5">
          <div className="row gy-4">
            <div className="ProjectHeader">
              <h1
                className="title text-uppercase p-0 m-0 text-center"
                style={{ fontWeight: "700", fontSize: "52px" }}
              >
                Projects
              </h1>
            </div>
            <div className="col-lg-4 col-sm-6 col-11 text-center mx-auto">
              <a
                href="https://bharat-ag.github.io/to-list/"
                target="_blank"
                className=" text-decoration-none pj py-5 px-lg-3"
                id="note"
              >
                <div className="ProjectCard text-white">
                  <GiNotebook style={{ fontSize: "70px" }} />
                  <h1
                    className="text-uppercase"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    Note App
                  </h1>
                  <p className="text-uppercase">create, delete, store</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-11 text-center mx-auto">
              <a
                href="https://bharat-ag.github.io/infinity_scroll/"
                target="_blank"
                className=" text-decoration-none pj py-5 px-lg-3"
                id="iscrol"
              >
                <div className="ProjectCard text-white">
                  <CgInfinity style={{ fontSize: "70px" }} />
                  <h1
                    className="text-uppercase"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    Infi Scroll
                  </h1>
                  <p className="text-uppercase">instagram like scroll</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-11 text-center mx-auto">
              <a
                href="https://bharat-ag.github.io/weather-app/"
                target="_blank"
                className=" text-decoration-none pj py-5 px-lg-3"
                id="wth"
              >
                <div className="ProjectCard text-white">
                  <BsCloudHaze2Fill style={{ fontSize: "70px" }} />
                  <h1
                    className="text-uppercase"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    weather app
                  </h1>
                  <p className="text-uppercase">realtime weather forecast</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-11 text-center mx-auto">
              <a
                href="https://bharat-ag.github.io/image-gallery/"
                target="_blank"
                className=" text-decoration-none pj py-5 px-lg-3"
                id="imgG"
              >
                <div className="ProjectCard text-white">
                  <BsFileImage style={{ fontSize: "70px" }} />
                  <h1
                    className="text-uppercase"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    image gallery
                  </h1>
                  <p className="text-uppercase">search images and download</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-11 text-center mx-auto">
              <a
                href="https://bharat-ag.github.io/Login-Form/"
                target="_blank"
                className=" text-decoration-none pj py-5 px-lg-3"
              >
                <div className="ProjectCard text-white">
                  <MdComputer style={{ fontSize: "70px" }} />
                  <h1
                    className="text-uppercase"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    Login From
                  </h1>
                  <p className="text-uppercase">modern ui for form</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-11 text-center mx-auto">
              <a
                href="https://bharat-ag.github.io/word-counter/"
                target="_blank"
                className=" text-decoration-none pj py-5 px-lg-3"
              >
                <div className="ProjectCard text-white">
                  <FaHashtag style={{ fontSize: "70px" }} />
                  <h1
                    className="text-uppercase"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    Word Counter
                  </h1>
                  <p className="text-uppercase">basic word counter</p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-11 text-center mx-sm-0 mx-auto">
              <a
                href="https://bharat-ag.github.io/word-counter/"
                target="_blank"
                className=" text-decoration-none pj py-5 px-lg-3"
              >
                <div className="ProjectCard text-white">
                  <AiOutlineQrcode style={{ fontSize: "70px" }} />
                  <h1
                    className="text-uppercase"
                    style={{ fontSize: "30px", fontWeight: "900" }}
                  >
                    text to qr
                  </h1>
                  <p className="text-uppercase">convert any text to qr code</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
