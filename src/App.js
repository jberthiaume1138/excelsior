import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			results: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(searchTerm) {
		console.log(searchTerm);
		this.setState ({
			searchTerm: searchTerm,
			results: 'There is a result'
		})
		// var newState = {};
		// this.setState((searchTerm) => {
		// 	newState.searchTerm = searchTerm;
		// 	console.log(newState.searchTerm);
		// });
		// return newState;
	}
	searchBooks(searchTerm) {
		console.log(searchTerm);
	}
  render() {
		var searchTerm = this.state.searchTerm;
		var results = this.state.results;
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
					<h1>Unlimited</h1>
          {/* <h2>Welcome to React</h2> */}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

				{!searchTerm &&
					<section id='search'>
						<Search
							searchTerm={searchTerm}
							onSearchTermChange={searchBooks}

						/>
					</section>}
				{results &&
					<section id='results'>
						<Results
							searchTerm={searchTerm}
						/>
					</section>}
      </div>
    );
  }
}

export default App;
