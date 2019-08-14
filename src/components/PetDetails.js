import React from 'react';
import { Link } from 'react-router-dom';
import { getValue } from '@baltimorecounty/javascript-utilities/config';
import { PetInfoSection as InfoSection, SharePetButton } from './index';

const PetDetails = (props) => {
	const {
		AnimalId,
		ImageUrl,
		DateAdoptedRedeemed: ShelterArrival,
		Status = '',
		AnimalName,
		AboutMe,
		Attributes = []
	} =
		props.pet || {};
	const animalSex = Attributes.find((x) => x.Label.toLowerCase() === 'sex');
	const imageUrl = `//${getValue('apiHost')}${ImageUrl}`;

	return (
		<div id={AnimalId} className="row">
			{AnimalId ? (
				<div className="pet">
					<div className="col-md-7 col-sm-8">
						<h2>
							<Link to={`/pets/${AnimalId}/${Status}`}>{AnimalName}</Link>
						</h2>
						{Attributes.map(
							(attribute) =>
								attribute && attribute.Value ? (
									<InfoSection
										key={attribute.Label}
										label={attribute.Label}
										value={attribute.Value}
									/>
								) : null
						)}
						<InfoSection label="Shelter Arrival" value={ShelterArrival} />
						<p className="pet-bio">
							<strong className="pet-bio-label">AboutMe</strong> {AboutMe}
						</p>
						<SharePetButton
							animalId={AnimalId}
							name={AnimalName}
							imageUrl={imageUrl}
							aboutMe={AboutMe}
							status={Status}
						/>
					</div>
					<div className="col-md-5 col-sm-4">
						<img
							src={imageUrl}
							alt={`This is ${AnimalName}, this ${animalSex
								? animalSex.Value.toLowerCase()
								: ''} is ${Status.toLowerCase()}`}
						/>
					</div>
				</div>
			) : (
				<p>No pet information was found.</p>
			)}
		</div>
	);
};

export default PetDetails;
