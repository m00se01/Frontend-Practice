import "../styles/navbar.css";
import "../styles/global.css";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
export const Navbar = ({ currActive }) => {
  return (
    <div className="navbar-wrapper">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="star-logo" />
        </Link>
      </div>

      <div className="line-decoration"></div>
      <button className="mobile-nav-button">Menu</button>

      <nav>
        <ul className="primary-navigation underline-indicators">
          <li className={currActive === "home" ? "active" : ""}>
            <Link
              to="/"
              className="uppercase text-white ff-sans-cond letter-spacing-1"
              aria-selected={currActive === "home" ? "true" : "false"}
            >
              <span>00</span> Home
            </Link>
          </li>
          <li className={currActive === "destination" ? "active" : ""}>
            <Link
              to="/destination"
              className="uppercase text-white ff-sans-cond letter-spacing-1"
              aria-selected={currActive === "destination" ? "true" : "false"}
            >
              <span>01</span> Destination
            </Link>
          </li>
          <li className={currActive === "crew" ? "active" : ""}>
            <Link
              to="/crew"
              className="uppercase text-white ff-sans-cond letter-spacing-1"
              aria-selected={currActive === "crew" ? "true" : "false"}
            >
              <span>02</span> Crew
            </Link>
          </li>
          <li className={currActive === "technology" ? "active" : ""}>
            <Link
              to="/technology"
              className="uppercase text-white ff-sans-cond letter-spacing-1"
              aria-selected={currActive === "technology" ? "true" : "false"}
            >
              <span>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
