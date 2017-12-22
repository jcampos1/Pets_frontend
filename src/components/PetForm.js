import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PetForm extends Component {
  render(){
    return ( 
      <form onSubmit={this.props.onAddPet}>
          <input type="text" placeholder="Nombre" name="name" max-length="100" required/>
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}
