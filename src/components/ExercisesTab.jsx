import React from 'react';

import data from "../data/category_to_exercise";
import ExerciseList from './ExerciseList';
import Modal from './Modal';

import ExerciseModalContent from './ExerciseModalContent';


// const {
//   activeCategory,
//   dataCategory,
//   showModal,
//   isModalActive,
//   formData
// } = this.props;

// const finalArray = [...data[this.props.dataCategory].exercise, ...this.props.formData];
// const finalArray = [...data[dataCategory].exercise, ...formData];


class ExercisesTab extends React.Component {
	constructor(props) {
		super(props);

		let finalArray = [...data[this.props.dataCategory].exercise, ...this.props.formData];

		this.state = {
			modalData: null,
			selectedExercise: false,
			exerciseArray: finalArray
		}
		this.handleDeleteExercise = this.handleDeleteExercise.bind(this);
	}

	// componentDidMount() {
	// 	this.setState({ exerciseArray: this.finalArray })
	// }
	
	selectExercise = (data) => {
		this.setState({
			modalData: data,
			selectedExercise: true
		})
	}

	finalArray = [...data[this.props.dataCategory].exercise, ...this.props.formData];


	closeModal = () => {
		this.setState({
			selectedExercise: false
		})
	}




	handleDeleteExercise(id) {
		this.props.handleDeleteEx(id);
		
		const isNotId = exercise => exercise.id !== id;
		const updatedList = this.state.exerciseArray.filter(isNotId);
		this.setState({ exerciseArray: updatedList })
		// this.finalArray = updatedList;
		// this.setState({ exerciseArray: [...data[this.props.dataCategory].exercise]})
		// const splicedArray = this.state.exerciseArray.splice(index, 1)
		// this.setState({ exerciseArray: splicedArray })
	}




	render() {

		// const { activeCategory, dataCategory, showModal, isModalActive, formData } = this.props;
		// const state = this.state;
		// const newArray = data[dataCategory].exercise.push(formSubData);
		
		// console.log('----------------------------------------', this.props.handleDeleteEx)
		// console.log(this.finalArray)

		return (
			<div className="main-container">
				
				{/* {(data[dataCategory].exercise.map(exercise => { */}
				{this.state.exerciseArray.map((exercise, index) => {
					// console.log(index);
					// console.log(exercise.steps);
					// console.log('this is the final array', this.state.exerciseArray)
					// console.log('this is the state from CREATETAB', this.finalArray)
					const exerciseImage1 = `exercise-images/images-web/${(exercise.img[0]).split('').slice(12).join('')}`
					const exerciseImage2 = `exercise-images/images-web/${(exercise.img[1]).split('').slice(12).join('')}`

				return (
          <div>
            {this.props.dataCategory === exercise.primary ? (
              <ExerciseList
                selectExercise={this.selectExercise}
                exerciseTitle={exercise.title}
                exerciseImage1={exerciseImage1}
                exerciseImage2={exerciseImage2}
                exercisePrimer={exercise.primer}
                exerciseType={exercise.type}
                exerciseEquipment={exercise.equipment}
				steps={exercise.steps}
				exercise={exercise}
				index={index}
				userCreated={exercise.userCreated}
				handleDeleteExercise={this.handleDeleteExercise}
				handleDeleteEx={this.props.handleDeleteEx}
                // showModal={showModal}
                // isModalActive={isModalActive}
              />
            ) : null}
          </div>
        );
					})}
			<Modal
				isVisible={this.state.selectedExercise}
				closeModal={this.closeModal}
			>
				<ExerciseModalContent data={this.state.modalData} closeModal={this.closeModal} />
			</Modal>
			</div>
		);
	}
}

export default ExercisesTab;