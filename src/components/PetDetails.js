import React from 'react';
import { Link } from 'react-router-dom';

const PetDetails = props => {
    const {
        AnimalId,
        Name,
        Species,
        Breed,
        Color,
        Sex,
        ShelterArrival,
        AboutMe,
        ImageUrl
    } = props.pet;

    return (
        <div id={AnimalId} className="row pet">
            <div className="col-md-7 col-sm-8">
                <h2>
                    <Link to={`/${Species}/${AnimalId}`}>{Name}</Link>
                </h2>
                <p className="pet-info">
                    <strong className="pet-info-label">Animal ID</strong>{' '}
                    {AnimalId}
                </p>
                <p className="pet-info">
                    <strong className="pet-info-label">Species</strong>{' '}
                    {Species}
                </p>
                <p className="pet-info">
                    <strong className="pet-info-label">Breed</strong> {Breed}
                </p>
                <p className="pet-info">
                    <strong className="pet-info-label">Color</strong> {Color}
                </p>
                <p className="pet-info">
                    <strong className="pet-info-label">Sex</strong> {Sex}
                </p>
                <p className="pet-info">
                    <strong className="pet-info-label">Spayed/Neutered</strong>{' '}
                    Yes
                </p>
                <p className="pet-info">
                    <strong className="pet-info-label">Shelter Arrival</strong>{' '}
                    {ShelterArrival}
                </p>
                <p className="pet-bio">
                    <strong className="pet-bio-label">About Me</strong>{' '}
                    {AboutMe}
                </p>
            </div>
            <div className="col-md-5 col-sm-4">
                <img
                    src={ImageUrl}
                    alt={`This is ${Name}, this ${Sex} is adoptable`}
                />
            </div>
        </div>
    );
};

export default PetDetails;
