import "../styles/navbar.css";
import "../styles/global.css";
import logo from "../assets/shared/logo.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import hamburgerClose from "../assets/shared/icon-close.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
export const Navbar = ({ currActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("isMenuOpen: ", isMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} className="logo" alt="star-logo" />
      </Link>

      <div className="line-decoration"></div>

      <button onClick={toggleMenu} className="mobile-nav-button">
        <img
          src={isMenuOpen ? hamburgerClose : hamburgerIcon}
          alt="hamburger menu button"
        />
      </button>

      <ul
        className={`nav-links ${
          isMenuOpen ? "nav-links open" : ""
        } underline-indicators`}
      >
        <li className="nav-item">
          <NavLink
            to="/"
            className="uppercase text-white ff-sans-cond letter-spacing-1"
            // onClick={closeMenu}
          >
            <span>00</span> Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            onClick={closeMenu}
            to="/destination"
            className="uppercase text-white ff-sans-cond letter-spacing-1"
          >
            <span>01</span> Destination
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            onClick={closeMenu}
            to="/crew"
            className="uppercase text-white ff-sans-cond letter-spacing-1"
          >
            <span>02</span> Crew
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            onClick={closeMenu}
            to="/technology"
            className="uppercase text-white ff-sans-cond letter-spacing-1"
          >
            <span>03</span> Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
