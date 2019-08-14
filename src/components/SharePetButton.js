import React from 'react';
import { FacebookShareButton } from './';

const PetShareButton = (props) => {
	const { status, animalId, name, imageUrl, aboutMe } = props;
	return (
		<FacebookShareButton
			url={`https://baltimorecountymd.gov/pets/${animalId}/${status}`}
			title={name}
			thumbnail={imageUrl}
			description={aboutMe}
		/>
	);
};

export default PetShareButton;
