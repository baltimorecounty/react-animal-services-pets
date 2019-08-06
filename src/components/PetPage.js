import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PetDetails } from './index';
import { getPet } from '../services/PetService';

const PetPage = (props) => {
	const { id, status } = props.match.params || {};
	const [ isLoading, setIsLoading ] = useState(false);
	const [ pet, setPet ] = useState({});

	useEffect(
		() => {
			setIsLoading(true);
			if (id) {
				getPet(id, status)
					.then(setPet)
					.then(() => {
						setIsLoading(false);
					})
					.catch((error) => {
						setPet(null);
					});
			}
		},
		[ props.match.params ]
	);

	return (
		<div className="pets-page">
			{isLoading ? (
				<p>Loading Pet ...</p>
			) : (
				<div>
					<Link to="/">View all {status.toLowerCase()} pets</Link>
					<PetDetails pet={pet} />
				</div>
			)}
		</div>
	);
};

export default PetPage;
