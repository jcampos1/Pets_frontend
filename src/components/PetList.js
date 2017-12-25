import React, { Component } from 'react';

class PetList extends Component {
  render () {
    return (
        <ul>
          {this.props.pets.map(item => {
            return (
				<li>Name: <i>{item.name}</i></li>
            );
          })}
        </ul>
    );
  }
}

export default PetList;