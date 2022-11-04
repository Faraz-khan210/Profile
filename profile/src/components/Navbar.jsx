import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid d-flex justify-content-end me-3">
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
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-4">
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Buy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Rent
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/">
                  Sell
                </a>
              </li>
            </ul>
            <div className="btn btn-sm ms-2 text-white px-2" style={{background:"#1d54ad"}}>Post Property</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
