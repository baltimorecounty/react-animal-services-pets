import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setConfig } from '@baltimorecounty/javascript-utilities/config';
import { PetPage, PetTabs } from './components';
import './App.css';

setConfig({
	local: {
		apiRoot: '//localhost:54727/api/pets'
	},
	development: {
		apiRoot: '//testservices.baltimorecountymd.gov/api/pets'
	},
	staging: {
		apiRoot: '//testservices.baltimorecountymd.gov/api/pets'
	},
	production: {
		apiRoot: '//services.baltimorecountymd.gov/api/pets'
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
