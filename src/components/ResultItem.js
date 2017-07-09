import React from 'react';

const ResultItem = (props) => {
	console.log(props);
	return(
		<li>
			{props.result.title}
		</li>
	);
};

export default ResultItem;
