import React from 'react';



class ExerciseModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			exerciseId: null,
			buttonIndex: null,
			workoutId: null,
			showAdded: false,
			clicked: false
		}


	}


	handleClick = () => {
		this.setState({
			clicked: true
		})
	}


	
	toggleOn = (e, workout, index) => {
		const searchedWorkout = (this.props.workoutList.filter(item => item.workoutName === workout.workoutName))
		const searchedExercise = (searchedWorkout[0].workoutExercises.filter(exercise => exercise === this.props.exercise.id)).toString();
		const searchedExerciseId = Number(searchedExercise);

		if(searchedExerciseId !== this.props.exercise.id) {
			this.setState({
				workoutId: workout.workoutId,
				buttonIndex: index
			}, () => {this.sendExercise(); this.showAddedExercise()})
		}


		else {
			alert("You've already clicked this value")
		}
	}
		
	

	sendExercise = () => {
		const addedExercise = {
			currentWorkoutId: this.state.workoutId,
			exerciseId: this.props.exercise.id
		}
		const exerciseInfo = {
			exerciseName: this.props.exercise.title
		}		
		
		this.props.addExerciseToWorkout(addedExercise, exerciseInfo);	
		
	}

	showAddedExercise = () => {
		this.setState({ showAdded: true });
		setTimeout(() => {
			this.setState({ showAdded: false})
		}, 3000)
	}

	render() {
		
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
                    id={index}
                    type="button"
                    value={workout.workoutId}
                    onClick={(e) => this.toggleOn(e, workout, index)}
                  >
                    <span className="exercise-add-symbol">+</span>
                  </button>
                  <div className="exercise-modal-workout-title">
                    {workout.workoutName}
                  </div>
                {this.state.buttonIndex === index && this.state.showAdded ? (
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