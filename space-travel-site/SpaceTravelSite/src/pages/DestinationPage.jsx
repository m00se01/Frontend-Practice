import DestinationDetails from "../components/DestinationDetails";
import { Navbar } from "../components/Navbar";
import "../styles/destination.css";

export const DestinationPage = () => {
  return (
    <div className="destinations-page page-container ">
      <header>
        <Navbar currActive={"destination"} />
      </header>

      <DestinationDetails />
    </div>
  );
};
