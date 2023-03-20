import React from "react";
import { Link } from "react-router-dom";
import HomeImg from "../../images/photo_5794399095987747490_x-removebg-preview.png";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="vh-100 d-flex align-items-center ms-5 mt-4">
                <div className="home-content mt-5 ">
                  <h1 className="main-color"> Your data with real-time analytics </h1>
                  <p className="main-color">
                    {" "}
                    Harness the potential of Big Data Analytics & Cloud Services{" "}
                    <br /> and become a data-driven organization with Needle
                    tail{" "}
                  </p>
                  <div className="btn ">
                    <button className="btn me-3 text-capitalize main-btn main-bg text-white">Get started</button>
                    <button className="btn mx-2 text-capitalize main-btn white-btn main-color ">
                      <Link to="Docs">Learn More</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="home-img  vh-100 d-flex justify-content-center align-items-center ">
                <img src={HomeImg} alt="" className="w-75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
