import React from 'react';

import data from "../data/category_to_exercise";
import ExerciseList from './ExerciseList';
import Modal from './Modal';

import ExerciseModalContent from './ExerciseModalContent';


class ExercisesTab extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalData: null,
			selectedExercise: false
		}
	}
	
	selectExercise = (data) => {
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

		const { activeCategory, dataCategory, showModal, isModalActive, formData } = this.props;
		const state = this.state;
		// const newArray = data[dataCategory].exercise.push(formSubData);
		const finalArray = [...(data[dataCategory].exercise), ...formData];
		
		

		return (
			<div className="main-container">
				
				{/* {(data[dataCategory].exercise.map(exercise => { */}
				{finalArray.map(exercise => {
					console.log(exercise.steps);
					const exerciseImage1 = `exercise-images/images-web/${(exercise.img[0]).split('').slice(12).join('')}`
					const exerciseImage2 = `exercise-images/images-web/${(exercise.img[1]).split('').slice(12).join('')}`

				return (
          <div>
            {dataCategory === exercise.primary ? (
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
            ) : null}
          </div>
        );
					})}
			<Modal
				isVisible={state.selectedExercise}
				closeModal={this.closeModal}
			>
				<ExerciseModalContent data={state.modalData} closeModal={this.closeModal} />
			</Modal>
			</div>
		);
	}
}

export default ExercisesTab;