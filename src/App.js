import React, { useState, useEffect } from "react";
import "./App.css";
import { List, ProfileCard } from "./components";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import dataSource from "./data/pets.json";
import { petFilter } from "./services/PetService";

const App = () => {
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

  useEffect(() => {
    const petType = petTypes[selectedPetTypeIndex];
    const filteredPets = getFilteredPets(petType);
    const updatedPetTabs = Object.assign({}, petTabs);
    updatedPetTabs[selectedPetTypeIndex] = filteredPets;

    setPetTabs(updatedPetTabs);
  }, [selectedPetTypeIndex]);

  return (
    <div className="pets-app">
      <Tabs onChange={setSelectedPetTypeIndex}>
        <TabList>
          {petTypes.map(petType => (
            <Tab key={petType}>{petType}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {petTypes.map(petType => (
            <TabPanel key={petType}>
              <div className="profile-card-list">
                <List
                  dataSource={petTabs[selectedPetTypeIndex]}
                  renderItem={pet => <ProfileCard key={pet.id} {...pet} />}
                />
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default App;
