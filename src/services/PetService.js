import data from '../data/pets.json';

const getPets = filter =>
    new Promise((resolve, reject) => {
        const filteredPets =
            !filter || filter.toLowerCase() === 'all'
                ? data.AllPets
                : data.AllPets.filter(pet => petFilter(pet.Species, filter));
        resolve(filteredPets);
    });

const getPet = id =>
    new Promise((resolve, reject) => {
        resolve(data.AllPets.find(pet => pet.AnimalId === id));
    });

const petFilter = (petType, petTypeFilter) =>
    petTypeFilter === 'Other'
        ? ['Cat', 'Dog'].indexOf(petType) === -1
        : petType &&
          petTypeFilter &&
          petTypeFilter.toLowerCase() === petType.toLowerCase();

export { getPet, getPets, petFilter };
