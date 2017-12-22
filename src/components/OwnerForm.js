import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class OwnerForm extends Component {
  render(){
    return ( 
      <form onSubmit={this.props.onAddOwner}>
          <input type="text" placeholder="Nombre" name="name" max-length="150" required/>
		  <input type="text" placeholder="Passport" name="passport" max-length="13"/>
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}