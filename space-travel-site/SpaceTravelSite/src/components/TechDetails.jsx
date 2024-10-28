import { useEffect, useState } from "react";
import "../styles/tech.css";
import { technology } from "../data.json";

export const TechDetails = () => {
  const [currTech, setCurrTech] = useState(0);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth < 1280);

  const changeTech = (tech) => {
    setCurrTech(tech);
  };

  useEffect(() => {
    const handleResize = () => setIsLandscape(window.innerWidth < 1280);
    console.log(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="tech-details-container">
      <h1 className="page-heading uppercase ff-sans-cond letter-spacing-2 text-white fs-500 ">
        <span className="number-span letter-spacing-2">03</span>
        Space Launch 101
      </h1>

      <div
        className="tech-img "
        // style={{
        //   backgroundImage: `url(${
        //     isLandscape
        //       ? technology[currTech].images.landscape
        //       : technology[currTech].images.portrait
        //   })`,
        // }}
      >
        <img
          className=""
          src={
            isLandscape
              ? technology[currTech].images.landscape
              : technology[currTech].images.portrait
          }
          alt=""
        />
      </div>

      <div className=" tech-content-wrapper ">
        {/* Image */}

        <div>
          {/* Buttons */}
          <div className="tech-btns">
            <button
              className={currTech == 0 ? "active-tech" : ""}
              onClick={() => changeTech(0)}
            >
              1
            </button>
            <button
              className={currTech == 1 ? "active-tech" : ""}
              onClick={() => changeTech(1)}
            >
              2
            </button>
            <button
              className={currTech == 2 ? "active-tech" : ""}
              onClick={() => changeTech(2)}
            >
              3
            </button>
          </div>

          <div className="tech-description">
            <h2 className="fs-700 text-white ff-serif uppercase">
              <span className="d-block fs-400 text-accent ff-serif uppercase">
                The Terminology...
              </span>
              {technology[currTech].name}
            </h2>
            <p className="text-accent ff-sans-cond fs-400">
              {technology[currTech].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
