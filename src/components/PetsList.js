import React, { Component } from 'react';
import Pets from '../components/Pets'

class PetsList extends Component {
  render () {
    return (
        <ul>
          {this.props.pets.map(p => {
            return (
              <Pets
                key={p.id}
                name={p.name}
              />
            );
          })}
        </ul>
    );
  }
}

export default PetsList;