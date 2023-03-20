import React from "react";
import {Link} from 'react-router-dom';
import LogoImg from"../../images/photo_5794399095987747486_xm.png";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <div className="main-nav overflow-hidden ">
        <nav className="navbar navbar-expand-lg border rounded-3 navbar-light   position-fixed w-75 ">
          <div className="container">
            <Link className="navbar-brand" to="">
             <div>
              <img src={LogoImg} className="img w-25 ms-3" alt="" />
             </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="navlink">
                    <Link className="nav-link active text-capitalize  me-1" aria-current="page" to="">Home</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div className="navlink">
                    <Link  class="nav-link active text-capitalize  me-1"aria-current="page" to="/Docs" > docs </Link>
                  </div>{" "}
                </li>
                <li className="nav-item">
                  <div className="navlink">
                    <Link
                      className="nav-link active text-capitalize  me-1"
                      aria-current="page"
                      to="/Contact"
                    >
                      Contact us
                    </Link>
                  </div>{" "}
                </li>
                <li className="nav-item">
                  <div className="navlink">
                    <Link
                      className="nav-link active text-capitalize  me-1"
                      aria-current="page"
                      to="/HowItWork" >
                      how it work
                    </Link>
                  </div>{" "}
                </li>
                <li className="nav-item ms-2 ">
                  <Link
                    className="nav-link active text-capitalize wallet-btn "
                    aria-current="page"
                    to="https://metamask.io/"
                     traget='_blank'>
                    connect wallet
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
