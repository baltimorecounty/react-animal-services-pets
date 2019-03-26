import React, { useState, useEffect } from "react";
import { List, ProfileCard } from "./index";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { getPets } from "../services/PetService";

const petTypes = ["All", "Cat", "Dog", "Other"];

const PetTabs = props => {
  const routePetType = props.match.params.petType;
  const defaultIndex = routePetType
    ? petTypes.findIndex(
        petType => routePetType.toLowerCase() === petType.toLowerCase()
      )
    : 0;
  const initialSelectedTab = routePetType ? routePetType.toLowerCase() : "all";
  const [petTabs, setPetTabs] = useState({});
  const [selectedTab, setselectedTab] = useState(initialSelectedTab);

  // REMINDER: This useEffect fetches data and should be updated to React Suspense
  useEffect(() => {
    getPets(selectedTab).then(pets => {
      const petTabsData = petTypes.reduce((dataObj, currentPetTab) => {
        const petTab = currentPetTab.toLowerCase();
        const hasRouteMatch =
          routePetType &&
          routePetType.toLowerCase() === currentPetTab.toLowerCase();
        const isAllTab = currentPetTab.toLowerCase() === "all";

        dataObj[petTab] =
          hasRouteMatch || (isAllTab && !routePetType) ? pets : [];

        return dataObj;
      }, {});

      setPetTabs(petTabsData);
    });
  }, []);

  const handleTabChange = selectedTabIndex => {
    const petType = petTypes[selectedTabIndex].toLowerCase();
    getPets(petType)
      .then(pets => {
        const updatedPetTabs = { ...petTabs };
        updatedPetTabs[petType] = pets;

        setselectedTab(petType);
        setPetTabs(updatedPetTabs);
      })
      .catch(console.error);
  };

  return (
    <Tabs defaultIndex={defaultIndex} onChange={handleTabChange}>
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
                dataSource={petTabs[selectedTab]}
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
