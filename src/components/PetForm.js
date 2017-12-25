import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PetForm extends Component {
  render(){
    return ( 
      <form onSubmit={this.props.onAddPet}>
		  <label>Name</label><br/>
          <input type="text" placeholder="Nombre" name="name" max-length="100" required/><br/>
		  
		  <label>Owner</label><br/>
		  <select name="owner" required>
			{this.props.owners.map(item => {
				return (
					<option value={item.id}>{item.name}</option>
				);
			})}
		  </select><br/>
		  
		  <label>Favorite food</label><br/>
		  <select name="food" required>
			{this.props.foods.map(item => {
				return (
					<option value={item.id}>{item.name}</option>
				);
			})}
		  </select><br/>
		  
		  <label>Type</label><br/>
		  <select name="type" required>
			{this.props.types.map(item => {
				return (
					<option value={item.opt}>{item.label}</option>
				);
			})}
		  </select><br/>
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}