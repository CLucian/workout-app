import React from 'react';
import FormContext from './FormContext';
import WorkoutExercises from './WorkoutExercises';
import Modal from './Modal';
import WorkoutModalLog from './WorkoutModalLog';


class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseDisplay: false
    }
  }


  handleClick = () => {
    this.setState(prevState => ({
      exerciseDisplay: !prevState.exerciseDisplay
    }))
  }

  sendExerciseToLogs = (exercise) => {
    // const loggedExercise = exercise

    this.props.addExerciseToLogs(exercise);
  }

  
  render() {
    console.log('===EXERCISE DISPLAY===', this.state.exerciseDisplay)
    console.log('Is props.workout being passed properly?', this.props.workoutList)
    this.props.workout && console.log('00000000000000000', this.props.workoutList.map(workout => {
      return workout.workoutExercises.exerciseName
    }))

    return (
      <>
        <div className="outer-container">
          <div className="inner-container">
            <div className="create-workout-info">
              <div className="workoutTitle">
                <h1 className="create-workout-title">{this.props.name}</h1>
              </div>
              <div className="workoutDescription">{this.props.desc}</div>
              <button
                type="button"
                className="generic-button"
                onClick={() => this.handleClick()}
              >
                Display Exercises
              </button>
              <div className="workout-exercise-list">
                <ul>
                  {this.state.exerciseDisplay
                    ? this.props.exerciseNames &&
                      this.props.exerciseNames.map((exercise) => (
                        <div className="workout-exercise-item">
                          <li className="workout-exercise-list-item">
                            {exercise}
                          </li>
                          <div className="add-to-logs">
                            <button type="button" className="dumbbell-button" onClick={() => this.sendExerciseToLogs(exercise)}>
                              <img
                                src="exercise-images/misc-images/dumbbell.png"
                                className="add-to-logs-image"
                                alt="dumbbells"
                              />
                            </button>
                          </div>
                        </div>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <Modal
          isVisible={this.state.selectedExercise}
          closeModal={this.closeModal}
        >
          <FormContext.Consumer>
            {(context) => (
              <WorkoutModalLog
                workoutList={context.workout}
                exerciseWorkoutArray={context.exerciseWorkoutArray}
                addCurrentWorkoutId={context.addCurrentWorkoutId}
                addExerciseToWorkout={context.addExerciseToWorkout}
                addExerciseWorkoutArray={context.addExerciseWorkoutArray}
                updateWorkoutExercises={context.updateWorkoutExercises}
                closeModal={this.closeModal}
              />
            )}
          </FormContext.Consumer>
        </Modal> */}
      </>
    );
  }
}


export default Workout;