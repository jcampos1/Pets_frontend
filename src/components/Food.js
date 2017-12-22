import React, { Component } from 'react';
import axios from 'axios';
import FoodList from '../components/FoodList'
import FoodForm from '../components/FoodForm'
import { Route, Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

const api_food = "http://127.0.0.1:8000/api/foods/";

class Food extends Component {
	
  constructor() {
    super();
    this.state = {
      foods: [
      ]
    };
  }
  
  componentDidMount() {
	  axios.get(api_food)
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
	axios.post(api_food, {
		name: event.target.name.value
	})
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
		  <FoodList foods={this.state.foods} />
	      <FoodForm onAddFood={this.handleOnAddFood.bind(this)} />
		</div>
    );
  }
}

export default Food;