import React, { useEffect, useState } from 'react';
import { PetDetails } from './index';
import { getPet } from '../services/PetService';

const PetPage = (props) => {
	const { id, status } = props.match.params || {};
	const [ pet, setPet ] = useState({});

	useEffect(
		() => {
			if (id) {
				getPet(id, status).then(setPet);
			}
		},
		[ props.match.params ]
	);

	return (
		<div className="pets-page">
			<PetDetails pet={pet} />
		</div>
	);
};

export default PetPage;
