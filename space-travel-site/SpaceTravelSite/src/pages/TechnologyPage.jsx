import { Navbar } from "../components/Navbar";
import { TechDetails } from "../components/TechDetails";

export const TechnologyPage = () => {
  return (
    <div className="tech-page">
      <header>
        <Navbar currActive={"technology"} />
      </header>

      <TechDetails />
    </div>
  );
};
