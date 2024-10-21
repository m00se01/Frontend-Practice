import DestinationDetails from "../components/DestinationDetails";
import { Navbar } from "../components/Navbar";
import "../styles/destination.css";

export const DestinationPage = () => {
  return (
    <div className="destinations-page page-container ">
      <header>
        <Navbar currActive={"destination"} />
      </header>

      <div className="border content-wrapper ">
        <h1 className="uppercase ff-sans-cond letter-spacing-2 text-white ">
          <span className="number-span letter-spacing-2">01</span> Pick your
          destination
        </h1>

        <div className="destination-content-container">
          <DestinationDetails />
        </div>
      </div>
    </div>
  );
};
