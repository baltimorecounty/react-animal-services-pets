import axios from 'axios';
import { getValue } from '@baltimorecounty/javascript-utilities/config';

const getBaseUrl = () => getValue('apiRoot');

const getPets = (petType = 'All') =>
	axios
		.get(`${getBaseUrl()}`, {
			params: {
				petType,
				status: getValue('animalStatus')
			}
		})
		.then((response) => response.data.Data)
		.catch(console.error);

const getPet = (id, status) =>
	axios
		.get(`${getBaseUrl()}/${id}`, {
			params: {
				status
			}
		})
		.then((response) => response.data.Data)
		.catch(console.error);

export { getPet, getPets };
