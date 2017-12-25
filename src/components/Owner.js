import React, { Component } from 'react';
import axios from 'axios';
import OwnerList from '../components/OwnerList'
import OwnerForm from '../components/OwnerForm'
import api from '../components/api'

class Owner extends Component {
	
  constructor() {
    super();
    this.state = {
      owners: [
      ]
    };
  }
  
  componentDidMount() {
	  api.ownerAll()
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
	api.ownerAdd({name: event.target.name.value, passport: event.target.passport.value})
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
		  <h2>Owners</h2>
		  <OwnerList owners={this.state.owners} />
	      <OwnerForm onAddOwner={this.handleOnAddOwner.bind(this)} />
		</div>
    );
  }
}

export default Owner;