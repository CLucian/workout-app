import React from 'react';

import data from "../data/category_to_exercise";
import Exercise from './Exercise';





class ExercisesTab extends React.Component {
	constructor(props) {
		super(props);

		let finalArray = [...data[this.props.dataCategory].exercise, ...this.props.formData];

		this.state = {
			modalData: null,
			selectedExercise: false,
			exerciseArray: finalArray
		}
		this.sendFinalArray = this.sendFinalArray.bind(this);
		this.handleDeleteExercise = this.handleDeleteExercise.bind(this);
	}

	
	selectExercise = (data) => {
		this.setState({
			modalData: data,
			selectedExercise: true
		})
	}

	sendFinalArray () {
		const completeArray = this.state.exerciseArray;
		this.props.addCompleteArray(completeArray);
	}

	handleDeleteExercise(id) {
		this.props.handleDeleteEx(id);
		
		const isNotId = exercise => exercise.id !== id;
		const updatedList = this.state.exerciseArray.filter(isNotId);
		this.setState({ exerciseArray: updatedList });
		this.sendFinalArray()
	}

	render() {

		return (
			<div className="main-container">
				{this.state.exerciseArray.map((exercise, index) => {
					const exerciseImage1 = `exercise-images/images-web/${(exercise.img[0]).split('').slice(12).join('')}`
					const exerciseImage2 = `exercise-images/images-web/${(exercise.img[1]).split('').slice(12).join('')}`

				return (
          <div>
            {this.props.dataCategory === exercise.primary ? (
              <Exercise
				exercise={exercise}
                selectExercise={this.selectExercise}
                exerciseTitle={exercise.title}
                exerciseImage1={exerciseImage1}
                exerciseImage2={exerciseImage2}
                exercisePrimer={exercise.primer}
                exerciseType={exercise.type}
                exerciseEquipment={exercise.equipment}
				steps={exercise.steps}
				index={index}
				userCreated={exercise.userCreated}
				handleDeleteExercise={this.handleDeleteExercise}
              />
            ) : null}
          </div>
        );
					})} 
			</div>
		);
	}
}

export default ExercisesTab;