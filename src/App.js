import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setConfig } from '@baltimorecounty/javascript-utilities/config';
import { PetPage, PetTabs } from './components';
import './App.css';
const animalStatus =
	window.PetsAnimalStatus ||
	console.error(
		'Please specify window.PetsAnimalStatus above the script inclusion. Available Statues are Adoptable, Lost, ReportedLost'
	);
const apiBaseRoute = 'api/pets';
setConfig({
	local: {
		apiHost: 'localhost:54727',
		apiRoot: `//localhost:54727/${apiBaseRoute}`,
		animalStatus
	},
	development: {
		apiHost: 'testservices.baltimorecountymd.gov',
		apiRoot: `//testservices.baltimorecountymd.gov/${apiBaseRoute}`,
		animalStatus
	},
	staging: {
		apiHost: 'testservices.baltimorecountymd.gov',
		apiRoot: `//testservices.baltimorecountymd.gov/${apiBaseRoute}`,
		animalStatus
	},
	production: {
		apiHost: 'services.baltimorecountymd.gov',
		apiRoot: `//services.baltimorecountymd.gov/${apiBaseRoute}`,
		animalStatus
	}
});

const App = () => {
	return (
		<Router>
			<div className="pets-app">
				<Route path="/:petType?" exact component={PetTabs} />
				<Route path="/pets/:id/:status" exact component={PetPage} />
			</div>
		</Router>
	);
};

export default App;
