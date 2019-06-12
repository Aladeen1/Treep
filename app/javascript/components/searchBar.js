import { getInput } from '../views/searchView';

class UserInputs {
  constructor(ville_aller, ville_retour, date_aller, date_retour, flight_type, passengers) {
  	this.ville_aller = ville_aller;
  	this.ville_retour = ville_retour;
  	this.date_aller = date_aller;
  	this.date_retour = date_retour;
  	this.flight_type = flight_type;
  	this.passengers = passengers;
  }
}


function cacheInputs() {
	
    localStorage.removeItem('userFlight');
    
	const ville_aller = getInput('searchDepartInput');
	const ville_retour = getInput('searchReturnInput');
	const date_aller = getInput('searchDepartDateFrom');
	const date_retour = getInput('searchReturnDateFrom');
	const flight_type = getInput('searchFlightType');
	const passengers = getInput('searchPassengers');

	let inputs = new UserInputs(ville_aller, ville_retour, date_aller, date_retour, flight_type, passengers);
	inputs = JSON.stringify(inputs);

	localStorage.setItem('UserInputs', inputs);	
}


function sendData() {
	const target = document.getElementById('home');
	if (target) {	    
		document.querySelector('.checkout__button').addEventListener('click', (envoi) => {
			envoi.preventDefault();
			cacheInputs();
			window.location.href = "http://localhost:3000/search";
			// "http://localhost:3000/search"
			// "http://www.skytreep.fr/search"

		})
	}
}

sendData();