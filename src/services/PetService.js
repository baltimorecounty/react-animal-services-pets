import axios from 'axios';
const { REACT_APP_API_HOST: apiBaseUrl, REACT_APP_APP_ANIMAL_STATUS: appPetStatus } = process.env;

console.log(process.env);

const getPets = (petType = 'All', status) =>
	axios
		.get(`${apiBaseUrl}`, {
			params: {
				petType,
				status: status || appPetStatus
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
