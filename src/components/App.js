import React, { Component } from 'react';
import Main from '../components/Main'
import Food from '../components/Food'
import Owner from '../components/Owner'
import Pet from '../components/Pet'
import { Route, Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pets: [
        {id: 1, name: "Joselito"},
        {id: 2, name: "Anubis"}
      ]
    };
  }
  
  render() {
    return (
		<div>
		  <div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Bienvenido a React</h2>
		  </div>
		  <main>
			<Route component={Main} path='/' exact />
			<Route component={Food} path='/food' />
			<Route component={Owner} path='/owner' />
			<Route component={Pet} path='/pet' />
		  </main>
		</div>
    );
  }
}

export default App;