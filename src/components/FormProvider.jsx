import React from 'react';

import FormContext from './FormContext';
import data from "../data/category_to_exercise";


class FormProvider extends React.Component {
	constructor() {
	super();


	this.state = {
		items: [],
		test: "Test state",
		completeArray: [],
		dataCategory: null,
		workout: [],
		workoutExercises: [],
		exerciseWorkoutArray: [],
		currentWorkoutId: null,
		exerciseNames: [],
		exerciseLog: [],

		addDataCategory: (dataCategory) => {
		this.setState({
			dataCategory,
		});
		},

		addArrayItem: (newItem) => {
		this.setState({
			items: [...this.state.items, newItem],
		});
		},
		addCompleteArray: (completeArray) => {
		this.setState({
			completeArray,
		});
		},
		addNewWorkout: (newWorkout) => {
		this.setState({
			workout: [...this.state.workout, newWorkout],
		});
		},
		addCurrentWorkoutId: (newId) => {
			this.setState({
				currentWorkoutId: newId.currentWorkoutId
			})
		},
		addExerciseWorkoutArray: (newArray) => {
			this.setState({
				exerciseWorkoutArray: [...this.state.exerciseWorkoutArray, ...newArray]
			})
		},

		addExerciseToWorkout: (newWorkoutExercise, exerciseInfo) => {
		this.setState({
			currentWorkoutId: newWorkoutExercise.currentWorkoutId,
			workoutExercises: [...this.state.workoutExercises, newWorkoutExercise.exerciseId],
			exerciseNames: [...this.state.exerciseNames, exerciseInfo.exerciseName]
		}, () => this.updateWorkoutExercises(newWorkoutExercise, exerciseInfo));
		},

		addExerciseToLogs: (exercise) => {
			this.setState({
				exerciseLog: [...this.state.exerciseLog, exercise]
			})
		}

	};  
		this.handleDeleteEx = this.handleDeleteEx.bind(this);
	}
	

	updateWorkoutExercises = (newWorkoutExercise, exerciseInfo) => {
		const newWorkout = this.state.workout.map(workout => {
			if(workout.workoutId === this.state.currentWorkoutId) {
				return { 	
						...workout,
						exerciseNames: [...workout.exerciseNames, exerciseInfo.exerciseName],
						workoutExercises: [...workout.workoutExercises, newWorkoutExercise.exerciseId]
					}
				}
				else {
					return workout
				}
			},
		)
		this.setState({
			workout: newWorkout
		})
	};


	handleExerciseReset() {
		this.setState({items: null})
	}
	
	handleDeleteEx(id) {
		const isNotId = exercise => exercise.id !== id;
		const updatedList = this.state.items.filter(isNotId);
		this.setState({ items: updatedList })
	}


	render() {

		const value = {
			...this.state,
			handleDeleteEx: this.handleDeleteEx,
			updateWorkoutExercises: this.updateWorkoutExercises,
		}

		console.log('++++++++++++++++++++++++++', this.state.workoutExercises)
		console.log('THIS IS THE NEW ARRAY ITEM', this.state.items)
		console.log('+++++++This is the new workout Array++++', this.state.workout)
		console.log("+++++++This is the exercise Log ++++", this.state.exerciseLog);
		// console.log('===========This is the absolute completeArray============', this.state.completeArray)
		// console.log('++++++++++++++++++++++++++++++++++++++++++', this.state.dataCategory)
		// console.log('******************************', this.state.workout.map(obj => obj))

		return (
			<FormContext.Provider value={value}>
				{this.props.children}
			</FormContext.Provider>
   		);
	}
}


export default FormProvider;