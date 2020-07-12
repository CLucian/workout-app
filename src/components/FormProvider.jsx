import React from 'react';

import FormContext from './FormContext';

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
    currentModalExercise: null,
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
	
	updatedWorkoutList: (workoutList) => {
		this.setState({
			workout: workoutList
		});
	},

    addCurrentWorkoutId: (newId) => {
      this.setState({
        currentWorkoutId: newId.currentWorkoutId,
      });
    },
    addExerciseWorkoutArray: (newArray) => {
      this.setState({
        exerciseWorkoutArray: [...this.state.exerciseWorkoutArray, ...newArray],
      });
    },

    addExerciseToWorkout: (newWorkoutExercise, exerciseInfo) => {
      this.setState(
        {
          currentWorkoutId: newWorkoutExercise.currentWorkoutId,
          workoutExercises: [
            ...this.state.workoutExercises,
            newWorkoutExercise.exerciseId,
          ],
          exerciseNames: [
            ...this.state.exerciseNames,
            exerciseInfo.exerciseName,
          ],
        },
        () => this.updateWorkoutExercises(newWorkoutExercise, exerciseInfo)
      );
    },

    addExerciseToModal: (exercise) => {
      this.setState({
        currentModalExercise: exercise,
      });
    },

    addExerciseToLogsArray: (exercise) => {

      this.setState({
        exerciseLog: [exercise, ...this.state.exerciseLog],
	  });
    },

	updateExerciseToLogsArray: (exerciseArray) => {
		this.setState({
			exerciseLog: [...exerciseArray]
		});
	},
	

  };  
		this.handleDeleteEx = this.handleDeleteEx.bind(this);
	}

	

	updateWorkoutExercises = (newWorkoutExercise, exerciseInfo) => {
		const newWorkout = this.state.workout.map(workout => {
			if(workout.workoutId === this.state.currentWorkoutId)  {
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

		return (
			<FormContext.Provider value={value}>
				{this.props.children}
			</FormContext.Provider>
   		);
	}
}


export default FormProvider;