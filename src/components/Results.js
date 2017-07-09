import React from 'react';

import ResultItem from './ResultItem';

const Results = (props) => {
	const resultItems = props.results.map(result => {
		return (
			<ResultItem
				key = {result.title}
				result = {result}
			/>
		);
	});
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
