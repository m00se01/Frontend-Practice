import "../styles/index.css";
import { Navbar } from "../components/Navbar";

export const HomePage = () => {
  return (
    <div className="bg-dark">
      <header>
        <Navbar currActive={"home"} />
      </header>

      <div className="grid-container">
        <h1 className="uppercase text-accent fs-500 ff-sans-cond letter-spacing-1">
          So, you want to travel to Space
          <span className="text-white fs-900 ff-serif">space</span>
        </h1>
        <p>
          Let’s face it; if you want to go toyou might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back,
          and relax because we’ll give you a truly out of this world experience!
          Explore
        </p>
      </div>
    </div>
  );
};
