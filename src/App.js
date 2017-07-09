import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			results: null
		};

		this.searchBooks = this.searchBooks.bind(this);
	}
	searchBooks(searchTerm) {
		console.log(`***Searching for comics named: ${searchTerm}***`);

		// AJAX to the Marvel API with the searchTerm.
		// Then update the state with the results array

		// here is some dummy data
		this.setState ({
			searchTerm: searchTerm,
			results: [
				{
					title: 'Spiderman vol 1'
				},
				{
					title: 'Amazing Spiderman'
				},
				{
					title: 'Spectactular Spiderman'
				}
			]
		})
	}
  render() {
		var searchTerm = this.state.searchTerm;
		var results = this.state.results;

    return (
      <div className='App'>
        <div className='App-header'>
					<h1>Unlimited</h1>
        </div>
				<section id='search'>
					<Search
						onSubmit={this.searchBooks}
					/>
				</section>
				{results &&
				<section id='results'>
					<Results
						searchTerm={searchTerm}
						results={results}
					/>
				</section>}
      </div>
    );
  }
}

export default App;
