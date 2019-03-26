import React, { useEffect, useState } from 'react';
import { PetDetails } from './index';
import { getPet } from '../services/PetService';

const PetPage = props => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        const petId = props.match.params.id || 0;

        if (petId) {
            getPet(petId).then(setPet);
        }
    });

    return (
        <div className="pets-page">
            <PetDetails pet={pet} />
        </div>
    );
};

export default PetPage;
