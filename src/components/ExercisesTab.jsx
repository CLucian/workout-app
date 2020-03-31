import React from 'react';

import data from "../data/category_to_exercise";
import ExerciseList from './ExerciseList';
import Modal from "./Modal";

class ExercisesTab extends React.Component {
	constructor(props){
		super(props)
		
		this.state = {
			modalData: null,
			selectedExercise: false
		}
	}

	selectExercise = (data) => {
		// debugger
		this.setState({
			modalData: data,
			selectedExercise: true
		})
	}

	closeModal = () => {
		this.setState({
			selectedExercise: false
		})
	}

	render() {
		const { activeCategory, dataCategory, showModal, isModalActive } = this.props;
		const state = this.state

		return (
			<div className="main-container">
				{data[dataCategory].exercise.map(exercise => {
					const exerciseImage1 = `exercise-images/images-web/${(exercise.img[0]).split('').slice(12).join('')}`;
					const exerciseImage2 = `exercise-images/images-web/${(exercise.img[1]).split('').slice(12).join('')}`;
					return (
						<ExerciseList
							selectExercise={this.selectExercise}
							exerciseTitle={exercise.title}
							exerciseImage1={exerciseImage1}
							exerciseImage2={exerciseImage2}
							exercisePrimer={exercise.primer}
							exerciseType={exercise.type}
							exerciseEquipment={exercise.equipment}
							steps={exercise.steps}
							showModal={showModal}
							isModalActive={isModalActive}
						/>
					);

				})}

				{state.selectedExercise &&
					<Modal
						exerciseTitle={state.modalData.exerciseTitle}
						steps={state.modalData.steps}
						// showModal={showModal}
						// isModalActive={isModalActive}
					/>
				}
			</div>
		);
	}
}


export default ExercisesTab;