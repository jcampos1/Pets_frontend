import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FoodForm extends Component {
  render(){
    return ( 
      <form onSubmit={this.props.onAddFood}>
          <input type="text" placeholder="Nombre" name="name" max-length="150" required/>
          <input type="submit" value="Guardar" />
      </form>
    );
  }
}
