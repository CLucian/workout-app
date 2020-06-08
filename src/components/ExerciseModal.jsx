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
		console.log('/////////////////////////////////////////////////This is searchedWorkout', searchedWorkout)
		console.log('/////////////////////////////////////////////////This is searchedWorkout', searchedWorkout[0])
		console.log('//////////////////////////////////////This is searchedExercise', typeof(searchedExercise));
		if(searchedExerciseId !== this.props.exercise.id) {
			console.log(searchedWorkout);
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

		// console.log(this.state.workoutIds.find(e => e === workout.workoutId))
		
		console.log("blah blah blah", this.props.exercise.title);
		console.log('blah blah blah', this.state.workoutIds)
		console.log('Current exercise', this.currentExercise)
		console.log('exercise workout Array', this.props.exerciseWorkoutArray)
		// console.log('(((((((((((((((((((((((((((((((', this.props.workoutList.id)
		console.log("+++++++++++++++++++++++++++++", this.props.workoutList);
		console.log('Exercise Modal this.props.workList', this.props.workList)
		console.log('-=-=-=-=-=-=-=-=-this.state.addedExercises=-=-=-=-=-=', this.state.workoutIds)
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
                <form className="exercise-form-modal">
                  <button
                    className="exercise-add-button"
                    id={index}
                    type="button"
                    value={workout.workoutId}
                    onClick={(e) => this.toggleOn(e, workout, index)}
                    // onClick={() => this.handleClick(workout, index)}
                  >
                    <span className="exercise-add-symbol">+</span>
                  </button>
                  <div className="exercise-modal-workout-title">
                    {workout.workoutName}
                  </div>
                  <div className="volume-container">
                    <div className="volume-input-group">
                      <input className="volume-input" placeholder="Sets" />
                    </div>
                    <div className="volume-input-group">
                      <input className="volume-input" placeholder="Reps" />
                    </div>
                  </div>
                </form>

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