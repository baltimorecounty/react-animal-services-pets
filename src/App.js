import React, { useState, useEffect } from "react";
import "./App.css";
import { List, ProfileCard } from "./components";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import dataSource from "./data/pets.json";

const App = () => {
  const petTypes = ["All", "Cat", "Dog", "Other"];
  const [pets] = useState(dataSource);
  const [filteredPets, setFilteredPets] = useState(dataSource);
  const [selectedPetTypeIndex, setSelectedPetTypeIndex] = useState(0);

  const petFilter = (pet, petType) =>
    petType === "Other"
      ? ["Cat", "Dog"].indexOf(pet.species) === -1
      : petType === pet.species;

  const getFilteredPets = petTypeFilter =>
    petTypeFilter && petTypeFilter === "All"
      ? pets
      : pets.filter(pet => petFilter(pet, petTypeFilter));

  useEffect(() => {
    const petType = petTypes[selectedPetTypeIndex];
    const filteredPets = getFilteredPets(petType);
    setFilteredPets(filteredPets);
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
                  dataSource={filteredPets}
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
