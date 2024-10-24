import { useState } from "react";
import "../styles/tech.css";
import { technology } from "../data.json";

export const TechDetails = () => {
  const [currTech, setCurrTech] = useState(0);

  const changeTech = (tech) => {
    setCurrTech(tech);
  };

  console.log(window.screen.width);

  return (
    <div className="tech-details-container">
      <header>
        <h1 className="uppercase ff-sans-cond letter-spacing-2 text-white fs-400 ">
          <span className="number-span letter-spacing-2">03</span>
          Space Launch 101
        </h1>
      </header>

      <div className=" tech-content-wrapper ">
        <div
          className="tech-img landscape"
          style={{
            backgroundImage: `url${technology[currTech].images.landscape}`,
          }}
        >
          <img
            className="landscape"
            src={technology[currTech].images.landscape}
            alt=""
          />
        </div>

        <div className="tech-img portrait">
          <img
            className="landscape"
            src={technology[currTech].images.portrait}
            alt=""
          />
        </div>

        <div>
          <div className="tech-btns">
            <button onClick={() => changeTech(0)}>1</button>
            <button onClick={() => changeTech(1)}>2</button>
            <button onClick={() => changeTech(2)}>3</button>
          </div>

          <div className="tech-description">
            <h2 className="fs-400 text-white ff-sans-normal">
              <span className="d-block fs-500 text-accent ff-serif uppercase">
                The Terminology...
              </span>
              {technology[currTech].description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
