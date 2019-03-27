import React from "react";
import { Link } from "react-router-dom";
import { PetInfoSection as InfoSection } from "./index";

const PetDetails = props => {
  const {
    AnimalId = "",
    Name = "",
    Species = "",
    Breed = "",
    Color = "",
    Sex = "",
    ShelterArrival = "",
    AboutMe = "",
    ImageUrl = ""
  } = props.pet;

  return (
    <div id={AnimalId} className="row pet">
      <div className="col-md-7 col-sm-8">
        <h2>
          <Link to={`/${Species}/${AnimalId}`}>{Name}</Link>
        </h2>
        <InfoSection label="Animal ID" value={AnimalId} />
        <InfoSection label="Species" value={Species} />
        <InfoSection label="Breed" value={Breed} />
        <InfoSection label="Color" value={Color} />
        <InfoSection label="Sex" value={Sex} />
        <InfoSection label="Spayed/Neutered" value={"TODO"} />
        <InfoSection label="Shelter Arrival" value={ShelterArrival} />
        <InfoSection label="Shelter Arrival" value={ShelterArrival} />
        <p className="pet-bio">
          <strong className="pet-bio-label">About Me</strong> {AboutMe}
        </p>
      </div>
      <div className="col-md-5 col-sm-4">
        <img src={ImageUrl} alt={`This is ${Name}, this ${Sex} is adoptable`} />
      </div>
    </div>
  );
};

export default PetDetails;
