import "../styles/navbar.css";
import "../styles/index.css";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";
export const Navbar = ({ currActive }) => {
  return (
    <div className="container flex">
      <div>
        <img src={logo} alt="star-logo" />
      </div>

      <ul className="primary-navigation flex underline-indicators">
        <Link to="/">
          <li className={currActive === "technology" ? "active" : ""}>
            <a className="uppercase text-white ff-sans-cond letter-spacing-1 ">
              01 Home
            </a>
          </li>
        </Link>
        <Link to="/destination">
          <li className={currActive === "destination" ? "active" : ""}>
            <a className="uppercase text-white ff-sans-cond letter-spacing-1 ">
              02 destination
            </a>
          </li>
        </Link>
        <Link to="/crew">
          <li className={currActive === "crew" ? "active" : ""}>
            <a className="uppercase text-white ff-sans-cond letter-spacing-1 ">
              03 crew
            </a>
          </li>
        </Link>

        <Link to="/destination">
          <li className={currActive === "technology" ? "active" : ""}>
            <a className="uppercase text-white ff-sans-cond letter-spacing-1 ">
              04 Technology
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};
