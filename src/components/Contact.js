import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  return (
    <>
      <div className="container-fluid pt-4" id="contact">
        <div className="container-md">
          <div className="row">
            <div>
              <h1
                className="text-uppercase p-0 m-0 text-center"
                style={{
                  fontWeight: "700",
                  fontSize: "52px",
                  color: "#4070f4",
                }}
              >
                contact me
              </h1>
            </div>
            <form>
              <div className="col-md-10 col-12 mx-auto pt-5">
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control text-white"
                    placeholder="Enter your name"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="email"
                    class="form-control text-white"
                    id="exampleFormControlInput1"
                    placeholder="Enter your email"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    class="form-control text-white"
                    id="exampleFormControlTextarea1"
                    placeholder="Your message"
                    onChange={handleInput}
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row gx-0">
                <div className="col-md-10 col-12 mx-auto d-flex align-items-center justify-content-start gap-4 flex-sm-row flex-column">
                  <button type="submit" className="sBtn text-white ">
                    Submit
                  </button>
                  <button type="reset" className="sBtn text-white ">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
          <hr className="my-4" />
          <div className="ms-md-auto ms-1">
            <div className="row p-0 ">
              <div className="col-md-1 col-0 p-0"></div>
              <div className="col-11 p-0">
                <div>
                  <h1
                    className="text-uppercase ps-2"
                    style={{
                      fontWeight: "700",
                      fontSize: "22px",
                    }}
                  >
                    follow me
                  </h1>
                </div>
              </div>
            </div>
            <div className="row p-0 pt-2 pb-3">
              <div className="col-md-1 p-md-0 ps-1"></div>
              <div className="col-md-11 col-12 p-0 ps-2">
                <MdAlternateEmail />
                <span className="fw-bold  me-md-4 me-5">
                  bharatagrwal2k@gmail.com
                </span>
                <a href="#" className="text-dark" style={{ fontSize: "29px" }}>
                  <FaGithubSquare />
                </a>
                <a
                  href="#"
                  className="text-dark ms-3"
                  style={{ fontSize: "29px" }}
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
