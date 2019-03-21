import React from "react";

const ProfileCard = props => {
  const { id, name, imageUrl, stats, aboutMe } = props;
  return (
    <div className="card card-profile">
      <div className="card-profile-info">
        <h2>{name}</h2>
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
        src={imageUrl}
      />
    </div>
  );
};

export default ProfileCard;
