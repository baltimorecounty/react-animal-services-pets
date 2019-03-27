import React from "react";
import PropTypes from "prop-types";

const PetInfoSection = props => {
  const { label, value } = props;
  return (
    <p className="pet-info">
      <strong className="pet-info-label">{label}</strong> {value}
    </p>
  );
};

PetInfoSection.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

export default PetInfoSection;
