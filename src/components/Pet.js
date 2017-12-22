import React, { Component } from 'react';
import axios from 'axios';
import PetList from '../components/PetList'
import PetForm from '../components/PetForm'
import { Route, Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

const api_pet = "http://127.0.0.1:8000/api/pets/";

class Pet extends Component {
	
  constructor() {
    super();
    this.state = {
      pets: [
      ]
    };
  }
  
  componentDidMount() {
	  axios.get(api_pet)
	  .then(res => {
		this.setState({
		  pets: res.data
		});
	  }).catch(error => {
		console.log(error);
	  });
  }
  
  handleOnAddPet (event) {
    event.preventDefault();
	axios.post(api_pet, {
		name: event.target.name.value
	})
    .then(res => {
		this.setState({
		  pets: this.state.pets.concat([res.data])
		});
    }).catch(error => {
		console.log(error);
	});
  }
  
  render() {
    return (
		<div>
		  <PetList pets={this.state.pets} />
	      <PetForm onAddPet={this.handleOnAddPet.bind(this)} />
		</div>
    );
  }
}

export default Pet;