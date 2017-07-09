import React from 'react';

import ResultItem from './ResultItem';

const Results = (props) => {

	// console.log(props.searchTerm);
	// console.log(props.results);

	const resultItems = props.results.map(result => {
		return (
			<ResultItem
				key = {result.title}
				result = {result}
			/>
		);
	});

	// console.log(resultItems);

	return (
		<div>
			<h2>Results for {props.searchTerm}</h2>
			<ul>
				{resultItems}
			</ul>
		</div>
	);
};

export default Results;
