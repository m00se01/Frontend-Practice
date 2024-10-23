import { useState } from "react";

import { destinations } from "../data.json";

function DestinationDetails() {
  const [currDestination, setDestination] = useState(0);
  //   const [currImage, setCurrImage] = useState(moon);

  const changeDestination = (destination) => {
    if (destination === "moon") {
      setDestination(0);
    } else if (destination === "mars") {
      setDestination(1);
    } else if (destination === "europa") {
      setDestination(2);
    } else if (destination === "titan") {
      setDestination(3);
    }
  };

  // console.log("destination page: ", destinations[0]);

  return (
    <div className="destinations-wrapper ">
      <h1 className="uppercase ff-sans-cond letter-spacing-2 text-white fs-500 ">
        <span className="number-span letter-spacing-2">01</span> Pick your
        destination
      </h1>

      <div className="destination-content ">
        <div className="destination-img  ">
          <source
            srcSet={destinations[currDestination].images.webp}
            type="image/webp"
          />
          <img
            src={destinations[currDestination].images.png}
            alt={`picture of ${destinations[currDestination].images.png}`}
          />
        </div>

        <div className=" destination-info">
          <ul className="destination-tabs uppercase fs-500 ff-sans-cond letter-spacing-1">
            <li className={currDestination === 0 ? "active-tab" : ""}>
              <button onClick={() => changeDestination("moon")}>Moon</button>
            </li>
            <li className={currDestination === 1 ? "active-tab" : ""}>
              <button onClick={() => changeDestination("mars")}>Mars</button>
            </li>
            <li className={currDestination === 2 ? "active-tab" : ""}>
              <button onClick={() => changeDestination("europa")}>
                Europa
              </button>
            </li>
            <li className={currDestination === 3 ? "active-tab" : ""}>
              <button onClick={() => changeDestination("titan")}>Titan</button>
            </li>
          </ul>

          <div className="destination-details">
            <div className="planet-description">
              <h2 className="fs-700 ff-serif uppercase">
                {destinations[currDestination].name}
              </h2>
              <p className="fs-400 ff-sans-normal text-accent ">
                {destinations[currDestination].description}
              </p>
            </div>

            <div className="divider-line"></div>

            <div className="planet-data">
              <div>
                <h4 className="ff-sans-cond letter-spacing-1 fs-300 uppercase text-accent">
                  Avg. Distance
                </h4>
                <p className="fs-500 ff-serif">
                  {destinations[currDestination].distance}
                </p>
              </div>
              <div>
                <h4 className="ff-sans-cond letter-spacing-1 fs-300 uppercase text-accent">
                  Est. Travel Time
                </h4>
                <p className="fs-500 ff-serif uppercase ">
                  {destinations[currDestination].travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
