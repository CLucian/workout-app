import React from 'react';


import Modal from './Modal';
import ExerciseModalContent from './ExerciseModalContent';
import Workout from './Workout';

import FormContext from './FormContext';

class WorkoutTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			workoutItems: [],
			selectedWorkout: null,
			modalData: null
		}

	}


	closeModal = () => {
		this.setState({
			selectedWorkout: false
		})
	}

	openModal = () => {
		this.setState({
			selectedWorkout: true
		}) 
	}

	// const { title, info, muscleFunction, src } = props;

	render() {

		return (
      <div className="main-container">
        <div className="category-title">Workouts</div>
        <div className="outer-container">
          <div className="inner-container">
            <div className="workout-info">
              <div className="workoutTitle">
                <h1 className="workout-title"> + Add Workout</h1>
                <button type="button" onClick={this.openModal}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
			{this.props.workout.map(workout => {
				return(
					<Workout name={workout.workoutName} desc={workout.workoutDesc} />
				)
			})}
			
        </div>
        <Modal
          isVisible={this.state.selectedWorkout}
          closeModal={this.closeModal}
        >
          <ExerciseModalContent
            data={this.state.modalData}
            closeModal={this.closeModal}
          />
        </Modal>
      </div>
    );
	}
}

export default WorkoutTab;