import React from 'react';

import ResultItem from './ResultItem';

const Results = (props) => {
	var result = props.searchTerm;
	console.log(props.searchTerm);
	console.log(props.results);

	return(
		<div>
			<h2>Results for {result}</h2>
			<ul>
				<ResultItem
					key='cheese'
				/>
				<li>{props.results}</li>
			</ul>
		</div>
	);
};

export default Results;
