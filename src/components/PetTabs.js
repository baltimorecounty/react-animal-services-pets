import React, { useState, useEffect } from "react";
import { List, ProfileCard } from "./index";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { getPets } from "../services/PetService";

const petTypes = ["All", "Cat", "Dog", "Other"];

const PetTabs = props => {
  //TODO: Ensure routes can are case agnostic
  const routePetType = props.match.params.petType || "All";
  const [petTabs, setPetTabs] = useState({});
  const [selectedTab, setselectedTab] = useState(routePetType);

  // REMINDER: This useEffect fetches data and should be updated to React Suspense
  useEffect(() => {
    const getPetsPromise = routePetType ? getPets(routePetType) : getPets();

    getPetsPromise.then(pets => {
      const petTabsData = petTypes.reduce((dataObj, currentPetTab) => {
        const hasRouteMatch =
          routePetType &&
          routePetType.toLowerCase() === currentPetTab.toLowerCase();
        const isAllTab = currentPetTab.toLowerCase() === "all";

        dataObj[currentPetTab] =
          hasRouteMatch || (isAllTab && !routePetType) ? pets : [];

        return dataObj;
      }, {});

      console.log(petTabsData);
      setPetTabs(petTabsData);
    });
  }, []);

  const handleTabChange = selectedTabIndex => {
    const petType = petTypes[selectedTabIndex];
    getPets(petType)
      .then(pets => {
        const updatedPetTabs = Object.assign({}, petTabs);
        updatedPetTabs[petType] = pets;

        setselectedTab(petType);
        setPetTabs(updatedPetTabs);
      })
      .catch(console.error);
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
