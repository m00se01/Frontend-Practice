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

  console.log("destination page: ", destinations[0]);

  return (
    <div>
      <div className="destinations">
        {/* <source
          srcSet={destinations[currDestination].images.webp}
          type="image/webp"
        /> */}
        <img
          src={destinations[currDestination].images.png}
          alt={`picture of ${destinations[currDestination].images.png}`}
        />
      </div>

      <div>
        <ul className="destination-tabs uppercase fs-500 ff-sans-cond flex letter-spacing-1">
          <li className="">
            <button onClick={() => changeDestination("moon")}>Moon</button>
          </li>
          <li className="">
            <button onClick={() => changeDestination("mars")}>Mars</button>
          </li>
          <li className="">
            <button onClick={() => changeDestination("europa")}>Europa</button>
          </li>
          <li className="">
            <button onClick={() => changeDestination("titan")}>Titan</button>
          </li>
        </ul>
      </div>

      <div className="destination-info">
        <div>
          <h2 className="fs-800">{destinations[currDestination].name}</h2>
          <p>{destinations[currDestination].description}</p>
        </div>

        <div>
          <div>
            <h4>Avg. Distance</h4>
            <span>{destinations[currDestination].distance}</span>
          </div>
          <div>
            <h4>Est. Travel Time</h4>
            <span>{destinations[currDestination].travel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
