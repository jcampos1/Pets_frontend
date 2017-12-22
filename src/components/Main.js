import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Main extends Component {
	constructor() {
		super();
		this.state = {
		  items: [
			{id: 1, name: "Home", url: "/"},
			{id: 2, name: "Foods", url: "/food"},
			{id: 3, name: "Owners", url: "/owner"},
			{id: 4, name: "Pets", url: "/pet"}
		  ]
		};
	}
	render () {
		return (
			<nav>
				<ul>
					{this.state.items.map(item => {
						return (
							<li><Link to={item.url}> {item.name} </Link></li>
						);
				  })}
				</ul>
			</nav>
		);
	}
}

export default Main;