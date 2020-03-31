import React from 'react';

export default function ExerciseModalContent(props){
	const { data } = props

	if (!data){
		return null;
	}

	return <div>
		<h1>{data.exerciseTitle}</h1>
		<p>{data.steps}</p>

		<button onClick={props.closeModal}>Close</button>
	</div>
}