import React from 'react';

class ExerciseModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			buttonOn: false,
			buttonId: null,
			buttonIndex: null,
			addedExercises: []
		}
	}


	toggleOn = (workout, index) => {
		if ( index !== this.state.buttonIndex ) {
			this.setState({
				buttonIndex: index,
				addedExercises: [...this.state.addedExercises, this.props.exerciseTitle],
				buttonOn: true
			}, () => this.sendExercise()
			)
		}
		else {
			this.setState((prevState) => ({
				buttonIndex: index,
				addedExercises: [...this.state.addedExercises, this.props.exerciseTitle],
				buttonOn: !prevState.buttonOn,
		  }), () => this.sendExercise())
		}
		alert('Added to ' + workout)
	} 

	sendExercise = () => {
		const addedExercise = {
			exerciseName: this.state.addedExercises
		}
		this.props.addExerciseToWorkout(addedExercise);
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
			{this.props.workoutList.map((workout, index) => {
				return (
          <div className="currentWorkouts">
            <div className="exercise-modal-workout-title">
              {workout.workoutName}
            </div>
            <button
              key={workout.id}
              type="button"
              onClick={() => this.toggleOn(workout.workoutName, index)}
            >
              +
            </button>
			{
			 this.state.buttonOn && (index === this.state.buttonIndex) ?
				<div>{workout.workoutDesc}</div>
				 : null
			}
          </div>
        );
			})}
        <div className="modal-button-div">
          <button
            className="modal-button"
            type="button"
            onClick={this.props.closeModal}
          >
            CLOSE
          </button>
          {/* {this.state.workoutName}
          {this.state.workoutDesc} */}
		  {this.state.addedExercises}
        </div>
      </div>
    );
	}


}

export default ExerciseModal