import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const HeaderMenu = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li
            className={`nav-item ${
              !location.pathname.includes('upload') ? 'active' : ''
            }`}
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname.includes('upload') ? 'active' : ''
            }`}
          >
            <Link className="nav-link" to="/upload">
              Upload
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderMenu;
