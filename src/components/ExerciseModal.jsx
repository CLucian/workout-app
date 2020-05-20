import React from 'react';

class ExerciseModal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			buttonOn: false,
		}
	}



	// USE ID HERE TO MAKE SURE YOURE ONLY TARGETTING THE SPECIFC WORKOUT
	toggleMoreInfo = () => {
		this.setState(prevState => 	({
			buttonOn: !prevState.buttonOn 
		})
		)
	}


	render() {
		return (
      <div>
        <h1 className="modal-title">
          Add to Workout
        </h1>
			{this.props.workoutList.map(workout => {
				return (
          <div className="currentWorkouts">
            <div className="exercise-modal-workout-title">
            	{workout.workoutName}
            </div>
			<button type="button" onClick={()=>this.toggleMoreInfo()}>+</button>
			{this.state.buttonOn ? 
				<div>
					{workout.workoutDesc}
				</div>	
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
          {this.state.workoutName}
          {this.state.workoutDesc}
        </div>
      </div>
    );
	}


}

export default ExerciseModal