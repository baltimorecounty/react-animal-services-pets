import React from "react";
import PropTypes from "prop-types";

const ProfileCard = props => {
  const { AnimalId, Name, Species, AboutMe, ImageUrl, ...rest } = props;
  return (
    <div className="card card-profile">
      <div className="card-profile-info">
        <h2>{Name}</h2>
        <p>Species: {Species}</p>
        {Object.keys(rest).map(restKey => {
          const restVal = rest[restKey];
          return (
            <p className="pet-info" key={`${AnimalId}-${restKey}`}>
              <strong className="pet-info-label">{restKey}</strong> {restVal}
            </p>
          );
        })}
        <p className="pet-bio">
          <strong className="pet-bio-label">About Me</strong> {AboutMe}
        </p>
      </div>
      <img
        className="card-profile-image"
        alt={`This is ${Name}, this male is adoptable`}
        src={ImageUrl || "//www.rspcavic.org/media/animal/img/84259"}
      />
    </div>
  );
};

ProfileCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  aboutMe: PropTypes.string,
  stats: PropTypes.array
};

ProfileCard.defaultProps = {
  imageUrl: "",
  stats: []
};

export default ProfileCard;
