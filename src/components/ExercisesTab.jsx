import React from 'react';

import data from "../data/category_to_exercise";
import ExerciseImage from './ExerciseImage';
import ExerciseList from './ExerciseList';

function ExercisesTab(props) {
	
	const { activeCategory, dataCategory } = props;

	return (
		<div className="main-container">
			{ data[dataCategory].exercise.map(exercise => {

				const exerciseImage1 = `exercise-images/images-web/${(exercise.img[0]).split('').slice(12).join('')}`;
				const exerciseImage2 = `exercise-images/images-web/${(exercise.img[1]).split('').slice(12).join('')}`;


			return(
				// <ExerciseList />

				<div className="exerciseList">
					<div className="exerciseTitle">
						<h1 className="exercise-title">{exercise.title}</h1>
					</div>
					<div className="exerciseImageAndInfo">
						<ExerciseImage exerciseImage1={exerciseImage1} exerciseImage2={exerciseImage2}  />
						<div className="exercise-info">			
							<h1 className="general-info">{exercise.primer}</h1>
							<div className="mini-info-container">
								<h2 className="mini-info">Movement type: {exercise.type ? exercise.type.charAt(0).toUpperCase() + exercise.type.substring(1) : null}</h2>
								<br />
								<h2 className="mini-info">
									Equipment: {exercise.equipment ? (((exercise.equipment).join(', ')).charAt(0).toUpperCase() + exercise.equipment.join(', ').substring(1)) : null}
								</h2>
								
							</div>
						</div>
					</div>
				</div>
			) 
			
			
			
			}) }
      	</div>
	);
	
}

export default ExercisesTab;