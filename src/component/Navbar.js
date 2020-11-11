import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarID"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarID">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <Link to='/' className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to='/register' className="nav-link">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
