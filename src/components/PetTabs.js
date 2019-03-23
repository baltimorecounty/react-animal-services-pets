import React, { useState } from "react";
import { List, ProfileCard } from "./index";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import dataSource from "../data/pets.json";
import { petFilter } from "../services/PetService";

const PetTabs = props => {
  const petTypes = ["All", "Cat", "Dog", "Other"];
  const initalPetTabs = {};
  petTypes.forEach((type, index) => {
    initalPetTabs[index] = type === "All" ? dataSource.AllPets : [];
  });

  const [pets] = useState(dataSource.AllPets);
  const [petTabs, setPetTabs] = useState(initalPetTabs);
  const [selectedPetTypeIndex, setSelectedPetTypeIndex] = useState(0);

  const getFilteredPets = petTypeFilter =>
    petTypeFilter && petTypeFilter === "All"
      ? pets
      : pets.filter(pet => petFilter(pet.Species, petTypeFilter));

  const handleTabChange = selectedTabIndex => {
    const petType = petTypes[selectedTabIndex];
    const filteredPets = getFilteredPets(petType);
    const updatedPetTabs = Object.assign({}, petTabs);
    updatedPetTabs[selectedTabIndex] = filteredPets;

    setSelectedPetTypeIndex(selectedTabIndex);
    setPetTabs(updatedPetTabs);
  };
  return (
    <Tabs onChange={handleTabChange}>
      <TabList>
        {petTypes.map(petType => (
          <Tab key={petType}>{petType}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {petTypes.map(petType => (
          <TabPanel key={`tab-panel-${petType}`}>
            <div className="profile-card-list">
              <List
                dataSource={petTabs[selectedPetTypeIndex]}
                renderItem={pet => <ProfileCard key={pet.AnimalId} {...pet} />}
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default PetTabs;
