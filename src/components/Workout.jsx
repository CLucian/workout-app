import React from 'react';
import FormContext from './FormContext';
import Modal from './Modal';
import WorkoutModalLog from './WorkoutModalLog';
import { ReactComponent as DeleteIcon } from './Icons/cross.svg';
import { ReactComponent as FileTextIcon } from './Icons/file-text.svg';



class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseDisplay: false,
      selectedExercise: null,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      exerciseDisplay: !prevState.exerciseDisplay,
    }));
  };

  sendExerciseToModal = (exercise) => {
    // const loggedExercise = exercise

    this.props.addExerciseToModal(exercise);
  };

  openModal = () => {
    this.setState({
      selectedExercise: true,
    });
  };

  closeModal = () => {
    this.setState({
      selectedExercise: false,
    });
  };

  handleDelete = () => {
    const filteredWorkout = this.props.workoutList.filter(workout => {
      return workout.workoutName !== this.props.name
    })

    this.props.updatedWorkoutList(filteredWorkout);

  }

  render() {
    console.log("===EXERCISE DISPLAY===", this.state.exerciseDisplay);
    console.log(
      "Is props.workout being passed properly?",
      this.props.workoutList
    );
    this.props.workout &&
      console.log(
        "00000000000000000",
        this.props.workoutList.map((workout) => {
          return workout.workoutExercises.exerciseName;
        })
      );

    return (
      <>
        <div className="outer-container">
          <div className="inner-container">
            <div className="create-workout-info">
              <div className="delete-btn-container">
                <button
                  type="button"
                  className="workout-delete-button"
                  onClick={this.handleDelete}
                >
                  <DeleteIcon className="delete-component" />
                </button>
              </div>
              <div className="workoutTitle">
                <h1 className="create-workout-title">{this.props.name}</h1>
              </div>
              <div className="workoutDescription">{this.props.desc}</div>
              <button
                type="button"
                className="workout-display-button"
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
                            <button
                              type="button"
                              className="dumbbell-button"
                              onClick={() => {
                                this.sendExerciseToModal(exercise);
                                this.openModal();
                              }}
                            >
                              <FileTextIcon className="add-to-logs-image" />
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
        <Modal
          isVisible={this.state.selectedExercise}
          closeModal={this.closeModal}
        >
          <FormContext.Consumer>
            {(context) => (
              <WorkoutModalLog
                exercise={context.currentModalExercise}
                addExerciseToLogsArray={context.addExerciseToLogsArray}
                closeModal={this.closeModal}
              />
            )}
          </FormContext.Consumer>
        </Modal>
      </>
    );
  }
}


export default Workout;