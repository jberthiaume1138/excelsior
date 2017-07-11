import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: ''
		};

		// this.handleInputChange = this.handleInputChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInputChange(event) {
		var value = event.target.value;

		this.setState({
			searchTerm: value
		});
	}
	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit(this.state.searchTerm);
	}
	render() {
		return (
			<div>
				<form className='search-group' onSubmit={event => this.handleSubmit(event)}>
					<label className='small-text' htmlFor='search-box'>
						Enter the comic series you wish to check by title.
					</label>
					<div>
						<input
							id='search-box'
							type='text'
							placeholder='Ex. Spiderman'
							autoComplete='off'
							value={this.state.searchTerm}
							onChange={event => this.handleInputChange(event)}
						/>
						<button
							className='submit'
							type='submit'
							disabled={!this.state.searchTerm}>
							Search
						</button>
					</div>
				</form>
			</div>
		);
	}
}

Search.propTypes = {
	onSubmit: PropTypes.func.isRequired
};
