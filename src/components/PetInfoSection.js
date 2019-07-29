import React from 'react';
import PropTypes from 'prop-types';

const PetInfoSection = (props) => {
	const { label, value } = props;
	return (
		<p className="pet-info">
			<strong className="pet-info-label">{label}</strong> {value}
		</p>
	);
};

PetInfoSection.propTypes = {
	/** Description of the value you wish to display. */
	label: PropTypes.string.isRequired,
	/** Value that describes a pet. */
	value: PropTypes.any.isRequired
};

export default PetInfoSection;
