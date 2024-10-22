import { useState } from "react";
import "../styles/crew.css";
import { crew } from "../data.json";

export const CrewDetails = () => {
  const [currMember, setCurrMember] = useState(0);

  const changeCrewMember = (member) => {
    setCurrMember(member);
  };

  return (
    <div className="crew-details-container border">
      <header>
        <h1 className="uppercase ff-sans-cond letter-spacing-2 text-white fs-500 ">
          <span className="number-span letter-spacing-2">02</span> Meet your
          crew
        </h1>
      </header>

      <div className="border crew-content-wrapper">
        <h2 className="uppercase text-white crew-role">
          <span className="d-block fs-300 ">{crew[currMember].role}</span>
          {crew[0].name}
        </h2>

        <div className="crew-member-description ff-sans-normal fs-400 text-accent border">
          <p>{crew[currMember].bio}</p>
        </div>

        <div className="carousel-btns border">
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

        <div className="carousel-img border">
          <img
            src={crew[currMember].images.png}
            alt={`Crew member: ${crew[0].name}`}
          />
        </div>
      </div>
    </div>
  );
};
