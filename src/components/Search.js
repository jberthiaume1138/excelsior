import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		};

		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInputChange(searchTerm) {
		this.setState({
			searchTerm: searchTerm
		});
		this.props.onSearchTermChange(searchTerm);
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.props);
		// this.props.onSubmit(this.state.searchTerm);
	}
	handleClick(){
		console.log('clicked');
		this.props.onSearchTermChange(this.state.searchTerm);
	}
	render() {
		return (
			<div>
				<form className="search-group" >
					<label className="small-text" htmlFor="search-box">
						Enter the comic series you wish to check by title.
					</label>
					<div>
						<input
							id="search-box"
							type="text"
							placeholder="Ex. Spiderman"
							autoComplete="off"
							value={this.state.searchTerm}
							onChange={event => this.handleInputChange(event.target.value)}
						/>
					</div>
					</form>
					<button
						className="submit"
						// type="submit"
						disabled={!this.state.searchTerm}
						onClick={() => this.handleClick()}
					>
						Search
				</button>
			</div>
		);
	}
}

Search.propTypes = {
	searchTerm: PropTypes.string.isRequired
};
