import React, { Component } from 'react';

class FoodList extends Component {
  render () {
    return (
        <ul>
          {this.props.foods.map(item => {
            return (
				<li>{item.name}</li>
            );
          })}
        </ul>
    );
  }
}

export default FoodList;