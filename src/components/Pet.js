import React, { Component } from 'react';
import axios from 'axios';
import PetList from '../components/PetList'
import PetForm from '../components/PetForm'
import api from '../components/api'
import { Route, Link } from 'react-router-dom';

class Pet extends Component {
	
  constructor() {
    super();
    this.state = {
      pets: [],
	  owners: [],
	  foods: [],
	  types: [
	  { opt: "op01", label: "Gato" },
	  { opt: "op02", label: "Perro" },
	  { opt: "op03", label: "Loro" },
	  { opt: "op04", label: "Que se yo" },
	  ]
    };
  }
  
  componentDidMount() {
	  api.petAll()
	  .then(res => {
		this.setState({pets: res.data});
	  }).catch(error => {
		console.log(error);
	  });
	  
	  api.ownerAll()
	  .then(res => {
		this.setState({owners: res.data});
	  }).catch(error => {
		console.log(error);
	  });
	  
	  api.foodAll()
	  .then(res => {
		this.setState({ foods: res.data });
	  }).catch(error => {
		console.log(error);
	  });
  }
  
  handleOnAddPet (event) {
    event.preventDefault();
	api.petAdd({
		name: event.target.name.value,
		owner: event.target.owner.value,
		food: event.target.food.value,
		type: event.target.type.value
	})
    .then(res => {
		this.setState({pets: this.state.pets.concat([res.data])});
    }).catch(error => {
		console.log(error);
	});
  }
  
  render() {
    return (
		<div>
		  <h2>Pets</h2>
		  <PetList pets={this.state.pets} />
	      <PetForm 
		  owners={this.state.owners} 
		  foods={this.state.foods}
		  types={this.state.types}
		  onAddPet={this.handleOnAddPet.bind(this)} />
		</div>
    );
  }
}

export default Pet;