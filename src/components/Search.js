import React from 'react';

export default class Search extends React.Component {
	render() {
		return (
			<div>
				<div>
					<input type="text" value="Enter Search Terms" />
					<button>Search</button>
				</div>
				<div>
					<p className="small-text">
						Enter the comic series you wish to check by title.
					</p>
				</div>
			</div>
		);
	}
}
