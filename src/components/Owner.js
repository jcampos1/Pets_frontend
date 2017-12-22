import React, { Component } from 'react';
import axios from 'axios';
import OwnerList from '../components/OwnerList'
import OwnerForm from '../components/OwnerForm'
import { Route, Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

const api_owner = "http://127.0.0.1:8000/api/owners/";

class Owner extends Component {
	
  constructor() {
    super();
    this.state = {
      owners: [
      ]
    };
  }
  
  componentDidMount() {
	  axios.get(api_owner)
	  .then(res => {
		this.setState({
		  owners: res.data
		});
	  }).catch(error => {
		console.log(error);
	  });
  }
  
  handleOnAddOwner (event) {
    event.preventDefault();
	axios.post(api_owner, {
		name: event.target.name.value,
		passport: event.target.passport.value
	})
    .then(res => {
		this.setState({
		  owners: this.state.owners.concat([res.data])
		});
    }).catch(error => {
		console.log(error);
	});
  }
  
  render() {
    return (
		<div>
		  <OwnerList owners={this.state.owners} />
	      <OwnerForm onAddOwner={this.handleOnAddOwner.bind(this)} />
		</div>
    );
  }
}

export default Owner;