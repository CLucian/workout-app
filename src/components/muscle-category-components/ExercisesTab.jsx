import React from 'react';

import data from "../../data/category_to_exercise";
import ExerciseImage from '../ExerciseImage';

function ExercisesTab(props) {
	
	const { activeCategory, dataCategory } = props;

	// console.log('AJKDHFBAKJSDGFKAJHSDGF', data[activeCategory])
	// console.log('IS HOVER VALUE', this.state.isHover)
	// console.log('IS HOVER VALUE', this.state.isHover)
	return (
		<div className="main-container">
			{ data[dataCategory].exercise.map(exercise => {

				const exerciseImage1 = `exercise-images/images-web/${(exercise.img[0]).split('').slice(12).join('')}`;
				const exerciseImage2 = `exercise-images/images-web/${(exercise.img[1]).split('').slice(12).join('')}`;


			return(
				<div className="exerciseList">
					<div className="exerciseTitle">
						<h1 className="exercise-title">{exercise.title}</h1>
					</div>
					<div className="exerciseImageAndInfo">
						<ExerciseImage exerciseImage1={exerciseImage1} exerciseImage2={exerciseImage2}  />
						{/* <div className="image-container" onMouseOver={this.changeImage} onMouseOut={this.changeImage}>
							<img className="exercise-image" src={this.state.isHover ? exerciseImage2 : exerciseImage1} alt='exercise-pic' />					
						</div> */}
						<div className="exercise-info">			
							<h1 className="general-info">{exercise.primer}</h1>
							<div className="mini-info-container">
								<h2 className="mini-info">Movement type: {exercise.type.charAt(0).toUpperCase() + exercise.type.substring(1)}</h2>
								<br />
								<h2 className="mini-info">
									Equipment: { exercise.equipment[0] ? exercise.equipment[0].charAt(0).toUpperCase() + exercise.equipment[0].substring(1) :  null}
									{ exercise.equipment[1] ? `, ${exercise.equipment[1]}` : null }
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