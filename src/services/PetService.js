import axios from 'axios';

const apiBaseUrl = '//localhost:54727/api/pets';

const getPets = (petType = 'All', status) =>
	axios
		.get(`${apiBaseUrl}`, {
			params: {
				petType,
				status
			}
		})
		.then((response) => response.data.Data)
		.catch(console.error);

const getPet = (id, status) =>
	axios
		.get(`${apiBaseUrl}/${id}`, {
			params: {
				status
			}
		})
		.then((response) => response.data.Data)
		.catch(console.error);

export { getPet, getPets };
