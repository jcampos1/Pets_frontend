import React, { Component } from 'react';

class OwnerList extends Component {
  render () {
    return (
        <ul>
          {this.props.owners.map(item => {
            return (
				<li>Name: <i>{item.name}</i></li>
            );
          })}
        </ul>
    );
  }
}

export default OwnerList;