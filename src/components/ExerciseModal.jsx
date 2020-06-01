import React from 'react';



class ExerciseModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			exerciseId: null,
			buttonIndex: null,
			addedExercises: [],
			workoutId: null,
			workoutIds: [],
			showAdded: false,
			workoutsAdded: [],
			click: false,
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
				workoutId: workout.workoutId
			}, ()=> this.sendExercise())
		}

		// const targetValue = Number(e.currentTarget.value);
		// if (targetValue === workout.workoutId) {
		//  alert('Workout ' + workout.workoutName + ' was clicked')
		//  console.log('======This is e.currentTarget.value ====', e.target.value)
		//  console.log('======This is workout.workoutId ====', workout.workoutId)
		// // alert(e.currentTarget.value)
		// this.setState({
		// 	workoutId: workout.workoutId
		// }, ()=> this.sendExercise())
		
		// }


		else {
			alert("You've already clicked this value")
		}
	}
		
		// else {
		// 	alert('Whats going on?!!>!>')
		// }
		// if(workout.index === index)
		// this.setState({
		// 	buttonIndex: workout.index
		// })
		// this.sendExercise();
	// }

	
	// toggleOn = (workout, index) => {
	// 	const currentExercise = this.props.exerciseWorkoutArray.find(exercise => exercise.exerciseName);
	// 	// const combinedIds = this.props.exerciseWorkoutArray.map((exercise) => exercise.workouts);
	// 	const combinedIds = this.props.exerciseWorkoutArray.map(e => e);

	// 	if (this.state.click === false) {
	// 		this.setState({
	// 			buttonIndex: index,
	// 			workoutIds: [...this.state.workoutIds, workout.workoutId],
	// 			currentId: this.props.exercise.id,
	// 			buttonOn: true,
	// 			exerciseId: workout.workoutId,
	// 			click: true
	// 		}, () => {this.sendExercise(); this.showAddedExercise() })
	// 	}

	// 	else if (combinedIds.find(e => (e === workout.workoutId) ? true : false)) {
	// 		alert("You've already added this exercise to this workout!");
	// 		this.setState({
	// 			buttonIndex: index
	// 		})
	// 	}

	// 	else {
    
    //        this.setState(
    //          {
    //            buttonIndex: index,
    //            workoutIds: [...this.state.workoutIds, workout.workoutId],
    //            currentId: this.props.exercise.id,
    //            buttonOn: true,
    //            exerciseId: workout.workoutId,
    //          },
    //          () => {
    //            this.sendExercise();
    //            this.showAddedExercise();
    //          }
    //        );
    //      }
			
			
	// 	}
	// } 

	sendExercise = () => {
		const addedExercise = {
			// exerciseName: this.props.exercise.title,
			// exerciseId: this.state.exerciseId,
			// workoutId: this.state.workoutId,
			currentWorkoutId: this.state.workoutId,
			exerciseId: this.props.exercise.id
			// workoutIds: this.state.workoutIds
		}
		// const currentWorkoutId = {
		// 	currentWorkoutId: this.state.workoutId
		// }
		// const exerciseWorkArray = this.state.workoutIds;
		// const exerciseWorkoutObj = {
		// 	exerciseId: this.props.exercise.id,
		// };
		// this.props.addExerciseWorkoutArray(exerciseWorkArray);
		// this.props.addExercise
		this.props.addExerciseToWorkout(addedExercise);
		// this.props.addCurrentWorkoutId(currentWorkoutId);
		
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