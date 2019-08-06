import React, { useState, useEffect } from 'react';
import { List, PetDetails } from './index';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';
import { getPets } from '../services/PetService';
import classnames from 'classnames';

const petTypes = [ 'All', 'Cat', 'Dog', 'Other' ];

const getPetTypeFromRoute = (routePetType) => {
	if (routePetType) {
		const defaultIndex = petTypes.findIndex((petType) => routePetType.toLowerCase() === petType.toLowerCase());
		const hasRouteTabMatch = defaultIndex !== -1;

		return {
			index: hasRouteTabMatch ? defaultIndex : 0,
			petType: hasRouteTabMatch ? petTypes[defaultIndex].toLowerCase() : 'all'
		};
	}
};

const PetTabs = (props) => {
	const { petType: routePetType } = props.match.params || {};
	const { index: selectedTabIndex, petType: selectedPetType } = getPetTypeFromRoute(routePetType) || {};
	const [ isLoading, setIsLoading ] = useState(false);
	const [ petTabs, setPetTabs ] = useState({});
	const [ selectedTab, setSelectedTab ] = useState(selectedPetType);

	// REMINDER: This useEffect fetches data and should be updated to React Suspense
	useEffect(
		() => {
			setIsLoading(true);
			let didCancel = false;

			getPets(selectedTab)
				.then((pets) => {
					const petTabsData = { ...petTabs };
					petTabsData[selectedTab] = pets;

					if (!didCancel) {
						setPetTabs(petTabsData);
					}
					setIsLoading(false);
				})
				.catch(console.error);

			return () => {
				didCancel = true;
			};
		},
		[ selectedTab ]
	);

	const handleTabChange = (selectedTabIndex) => {
		const petType = petTypes[selectedTabIndex].toLowerCase();
		props.history.push(`/${petType}`);
		setSelectedTab(petType);
	};

	return (
		<Tabs index={selectedTabIndex} onChange={handleTabChange} className={classnames('tabs', props.className)}>
			<TabList className="tab-buttons">
				{petTypes.map((petType) => (
					<Tab key={petType} className="tab-button">
						{petType}
					</Tab>
				))}
			</TabList>
			<TabPanels>
				{isLoading ? (
					<TabPanel>
						<p>Loading Pets...</p>
					</TabPanel>
				) : (
					petTypes.map((petType) => (
						<TabPanel key={`tab-panel-${petType}`} className="tab-panel">
							<List
								dataSource={petTabs[selectedTab]}
								renderItem={(pet) => <PetDetails key={pet.AnimalId} pet={pet} />}
								itemKey="AnimalId"
							/>
						</TabPanel>
					))
				)}
			</TabPanels>
		</Tabs>
	);
};

export default PetTabs;
