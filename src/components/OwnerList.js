import React, { Component } from 'react';

class OwnerList extends Component {
  render () {
    return (
        <ul>
          {this.props.owners.map(item => {
            return (
				<li>{item.name} | {item.passport}</li>
            );
          })}
        </ul>
    );
  }
}

export default OwnerList;