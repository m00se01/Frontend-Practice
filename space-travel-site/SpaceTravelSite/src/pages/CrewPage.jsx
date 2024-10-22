import { CrewDetails } from "../components/CrewDetails";
import { Navbar } from "../components/Navbar";
import "../styles/crew.css";

export const CrewPage = () => {
  return (
    <div className="crew-page">
      <header>
        <Navbar currActive={"crew"} />
      </header>

      <CrewDetails />
    </div>
  );
};
