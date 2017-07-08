import React from 'react';

import ResultItem from './ResultItem';

const Results = (props) => {
	var result = props.searchTerm;

	return(
		<div>
			<h2>Results for {result}</h2>
			<ul>
				<ResultItem
					key='cheese'
				/>
			</ul>
		</div>
	);
};

export default Results;
