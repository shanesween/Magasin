import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import CheckOut from "./CheckOutButton";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-brand-dark">
      <Link
        className="navbar-brand"
        style={{ color: "#eeeeee", textDecoration: "inherit" }}
        to="/home"
      >
        covfefe
      </Link>
      <button
        style={{ outline: "none" }}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        {isLoggedIn ? (
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={handleClick}>
                logout
              </Link>
            </li>
            {isAdmin ? (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  admin
                </Link>
              </li>
            ) : null}
          </ul>
        ) : (
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                cart
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    isAdmin: !!state.user.isAdmin
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired
};
