import React, { Component } from 'react';

class Pets extends Component {
  render() {
    return (
		<li>
			{this.props.name}
		</li>
    );
  }
}

export default Pets;
