import React from "react";
import PropTypes from "prop-types";

const ProfileCard = props => {
  const { id, name, species, imageUrl, stats, aboutMe } = props;
  return (
    <div className="card card-profile">
      <div className="card-profile-info">
        <h2>{name}</h2>
        <p>Species: {species}</p>
        {stats.map(stat => {
          const statKey = Object.keys(stat)[0];
          const statVal = stat[statKey];
          return (
            <p className="pet-info" key={`${id}-${statKey}`}>
              <strong className="pet-info-label">{statKey}</strong> {statVal}
            </p>
          );
        })}
        <p className="pet-bio">
          <strong className="pet-bio-label">About Me</strong> {aboutMe}
        </p>
      </div>
      <img
        className="card-profile-image"
        alt={`This is ${name}, this male is adoptable`}
        src={imageUrl || "//www.rspcavic.org/media/animal/img/84259"}
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
