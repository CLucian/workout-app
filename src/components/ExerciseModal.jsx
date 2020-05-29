import React from 'react';

class ExerciseModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			exerciseId: null,
			buttonIndex: null,
			addedExercises: [],
			exerciseIds: [],
			showAdded: false
		}
	}


	toggleOn = (workout, index) => {
		if ( index !== this.state.buttonIndex &&
			this.state.exerciseIds.map(exerciseId => (exerciseId)) !== workout.workoutId) {
			this.setState({
				buttonIndex: index,
				addedExercises: [...this.state.addedExercises, this.props.exerciseTitle],
				exerciseIds: [...this.state.exerciseIds, this.props.exercise.id],
				buttonOn: true,
				exerciseId: workout.workoutId
			}, () => {this.sendExercise(); this.showAddedExercise() })
		}
		else {
			alert("You've already added this exercise to this workout!")
		}
	} 

	sendExercise = () => {
		const addedExercise = {
			exerciseName: this.state.addedExercises,
			exerciseId: this.state.exerciseId
		}
		this.props.addExerciseToWorkout(addedExercise);
	}

	showAddedExercise = () => {
		this.setState({ showAdded: true });
		setTimeout(() => {
			this.setState({ showAdded: false})
		}, 3000)
	}

	render() {
		console.log('(((((((((((((((((((((((((((((((', this.props.workoutList.id)
		console.log("(((((((((((((((((((((((((((((((", this.props.workoutList);
		console.log(')))))))))))))))))))', this.props.workoutList.map((workout, index) => workout[index]))
		console.log('Button State', this.state.buttonOn)
		
		return (
      <div>
        <h1 className="modal-title">
          Add to Workout
        </h1>
			{(this.props.workoutList.length === 0) ? 

				<div>
					<h1 className="exerciseModal-default">There are currently no created workouts</h1>
				</div>
				:
				<div className="workout-items-container">
					{
					this.props.workoutList.map((workout, index) => {
						return (
              <div className="currentWorkouts">
                <button
                  className="exercise-add-button"
                  key={workout.id}
                  type="button"
                  onClick={() => this.toggleOn(workout, index)}
                >
                  <span className="exercise-add-symbol">+</span>
                </button>

                <div className="exercise-modal-workout-title">
                  {workout.workoutName}
                </div>

                {index === this.state.buttonIndex && this.state.showAdded ? (
                  <div className="added-exercise-text">
                    Added {this.props.exerciseTitle}!
                  </div>
                ) : null}
              </div>
            );
					})
					}
				</div>
			}
        <div className="modal-button-div">
          <button
            className="generic-button"
            type="button"
            onClick={this.props.closeModal}
          >
            Close
          </button>
        </div>
      </div>
    );
	}


}

export default ExerciseModal