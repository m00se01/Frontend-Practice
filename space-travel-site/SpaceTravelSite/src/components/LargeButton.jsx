import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/buttons.css";

export const LargeButton = () => {
  return (
    <div>
      <Link
        className="largeButton text-dark fs-600 ff-serif uppercase bg-white"
        to="/destination"
      >
        Explore
      </Link>
    </div>
  );
};
