import React, { Component } from 'react';
import PetsList from '../components/PetsList'
import PetForm from '../components/PetForm'

import logo from './logo.svg';
import './App.css';

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
  
  handleOnAddPet (event) {
    event.preventDefault();
    let pet = {
      name: event.target.name.value
    };
    this.setState({
      pets: this.state.pets.concat([pet])
    });
  }
  
  render() {
    return (
		<div>
		  <main>
			  <Route 
				path='/' 
				exact 
				render={() => (
						<h1>It's mainpage</h1>
						)
				}
				
			  />
			  <Route
				path='/test/'
				render={() => (
						<h1>It's test page</h1>
						)
				}
			  />
		  </main>
		</div>
    );
  }
}

export default App;
