import React, { Component } from 'react';
import FoodList from '../components/FoodList'
import FoodForm from '../components/FoodForm'
import api from '../components/api'
import { Route, Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

class Food extends Component {
	
  constructor() {
    super();
    this.state = {
      foods: [
      ]
    };
  }
  
  componentDidMount() {
	  api.foodAll()
	  .then(res => {
		this.setState({
		  foods: res.data
		});
	  }).catch(error => {
		console.log(error);
	  });
  }
  
  handleOnAddFood (event) {
    event.preventDefault();
	api.foodAdd({name: event.target.name.value})
    .then(res => {
		this.setState({
		  foods: this.state.foods.concat([res.data])
		});
    }).catch(error => {
		console.log(error);
	});
  }
  
  render() {
    return (
		<div>
		  <h2>Foods</h2>
		  <FoodList foods={this.state.foods} />
	      <FoodForm onAddFood={this.handleOnAddFood.bind(this)} />
		</div>
    );
  }
}

export default Food;