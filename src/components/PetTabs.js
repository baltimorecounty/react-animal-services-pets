import React, { useState, useEffect } from "react";
import { List, ProfileCard } from "./index";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import { getPets } from "../services/PetService";

const petTypes = ["All", "Cat", "Dog", "Other"];

const PetTabs = props => {
  const [petTabs, setPetTabs] = useState({});
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    const routePetType = props.match.params.petType;
    if (routePetType) {
      const defaultIndex = routePetType
        ? petTypes.findIndex(
            petType => routePetType.toLowerCase() === petType.toLowerCase()
          )
        : 0;
      const initialSelectedTab = petTypes[defaultIndex].toLowerCase();

      setSelectedTabIndex(defaultIndex);
      setSelectedTab(initialSelectedTab);
    }
  });

  // REMINDER: This useEffect fetches data and should be updated to React Suspense
  useEffect(() => {
    let didCancel = false;

    getPets(selectedTab)
      .then(pets => {
        const petTabsData = { ...petTabs };
        petTabsData[selectedTab] = pets;

        if (!didCancel) {
          setPetTabs(petTabsData);
        }
      })
      .catch(console.error);

    return () => {
      didCancel = true;
    };
  }, [selectedTab]);

  const handleTabChange = selectedTabIndex => {
    const petType = petTypes[selectedTabIndex].toLowerCase();
    props.history.push(`/${petType}`);
    setSelectedTab(petType);
  };

  return (
    <Tabs defaultIndex={selectedTabIndex} onChange={handleTabChange}>
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
