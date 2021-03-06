import React from 'react';
import { FacebookShareButton } from './';

const PetShareButton = (props) => {
	const { Species, AnimalId, Name, ImageUrl, AboutMe } = props;
	return (
		<FacebookShareButton url={`/${Species}/${AnimalId}`} title={Name} thumbnail={ImageUrl} description={AboutMe} />
	);
};

export default PetShareButton;
