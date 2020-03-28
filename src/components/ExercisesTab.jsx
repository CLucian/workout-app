import React from 'react';

import data from "../data/category_to_exercise";
import ExerciseList from './ExerciseList';

function ExercisesTab(props) {
	
	const { activeCategory, dataCategory, exerciseOverlay } = props;




	return (
		<div className="main-container">
			{ data[dataCategory].exercise.map(exercise => {

				const exerciseImage1 = `exercise-images/images-web/${(exercise.img[0]).split('').slice(12).join('')}`;
				const exerciseImage2 = `exercise-images/images-web/${(exercise.img[1]).split('').slice(12).join('')}`;


			return (
        <ExerciseList
          exerciseTitle={exercise.title}
          exerciseImage1={exerciseImage1}
          exerciseImage2={exerciseImage2}
          exercisePrimer={exercise.primer}
          exerciseType={exercise.type}
          exerciseEquipment={exercise.equipment}
          exerciseOverlay={exerciseOverlay}
        />
      ); 

			}) }
      	</div>
	);
	
}

export default ExercisesTab;