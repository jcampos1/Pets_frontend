import axios from 'axios';

const food = "http://127.0.0.1:8000/api/foods/";
const owner = "http://127.0.0.1:8000/api/owners/";
const pet = "http://127.0.0.1:8000/api/pets/";

let api = new Object();

api.foodAll = function() {
	return axios.get(food);
}

api.foodAdd = function(obj) {
	return axios.post(food, obj);
}

api.ownerAll = function() {
	return axios.get(owner);
}

api.ownerAdd = function(obj) {
	return axios.post(owner, obj);
}

api.petAll = function() {
	return axios.get(pet);
}

api.petAdd = function(obj) {
	return axios.post(pet, obj);
}

export default api;