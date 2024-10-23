import { useState } from "react";
import "../styles/crew.css";
import { crew } from "../data.json";

export const CrewDetails = () => {
  const [currMember, setCurrMember] = useState(0);

  const changeCrewMember = (member) => {
    setCurrMember(member);
  };

  return (
    <div className="crew-details-container   ">
      <header>
        <h1 className="uppercase ff-sans-cond letter-spacing-2 text-white fs-400 ">
          <span className="number-span letter-spacing-2">02</span> Meet your
          crew
        </h1>
      </header>

      <div className=" crew-content-wrapper ">
        <div className="left-half-desktop">
          <h2 className="uppercase text-white crew-role fs-600 ">
            <span className="d-block fs-400 ">{crew[currMember].role}</span>
            {crew[0].name}
          </h2>

          <div className="crew-member-description ff-sans-normal fs-400 text-accent  ">
            <p>{crew[currMember].bio}</p>
          </div>

          <div className="carousel-btns  ">
            <button
              onClick={() => changeCrewMember(0)}
              className={currMember == 0 ? "active-btn" : ""}
            ></button>
            <button
              onClick={() => changeCrewMember(1)}
              className={currMember == 1 ? "active-btn" : ""}
            ></button>
            <button
              onClick={() => changeCrewMember(2)}
              className={currMember == 2 ? "active-btn" : ""}
            ></button>
            <button
              onClick={() => changeCrewMember(3)}
              className={currMember == 3 ? "active-btn" : ""}
            ></button>
          </div>
        </div>

        <div
          className="carousel-img"
          style={{
            backgroundImage: `url(${crew[currMember].images.png})`,
          }}
        >
          <source srcSet={crew[currMember].images.webp} type="image/webp" />
          {/* <img
            src={crew[currMember].images.png}
            alt={`Crew member: ${crew[0].name}`}
          /> */}
        </div>
      </div>
    </div>
  );
};
