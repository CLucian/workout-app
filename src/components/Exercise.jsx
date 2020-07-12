import React from 'react';

import ExerciseImage from "./ExerciseImage";
import Modal from "./Modal";
import ExerciseModal from './ExerciseModal';
import FormContext from './FormContext';



class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExercise: null,
      isActive: false,
    };
  }

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

  handleClick = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }



  render() {
    const {
      exerciseTitle,
      exerciseImage1,
      exerciseImage2,
      exercisePrimer,
      exerciseType,
      exerciseEquipment,
      steps,
      userCreated,
      exercise,
      handleDeleteExercise,
    } = this.props;

    return (
      <>
        <div className="flip" key={this.props.index}>
          <div
            className={this.state.isActive === true ? "clicked-front" : "front"}
          >
            <div className="exerciseList">
              <button
                className={ this.state.isActive === true ? "exercise-button2" : "exercise-button1" }
                onClick={this.handleClick}
                type="button"
              >
                More
              </button>
              <div className="exerciseTitle">
                <h1 className="exercise-title">{exerciseTitle}</h1>
              </div>
              <div className="exerciseImageAndInfo">
                <ExerciseImage
                  exerciseImage1={exerciseImage1}
                  exerciseImage2={exerciseImage2}
                />
                <div className="exercise-info">
                  <h1 className="general-info">{exercisePrimer}</h1>
                  <div className="mini-info-container">
                    <h2 className="mini-info-title">
                      Movement type:{" "}
                      <h2 className="mini-info">
                        {exerciseType
                          ? exerciseType.charAt(0).toUpperCase() +
                            exerciseType.substring(1)
                          : null}
                      </h2>
                    </h2>
                    <br />
                    <h2 className="mini-info-title">
                      Equipment:{" "}
                      <h2 className="mini-info">
                        {exerciseEquipment
                          ? exerciseEquipment
                              .join(", ")
                              .charAt(0)
                              .toUpperCase() +
                            exerciseEquipment.join(", ").substring(1)
                          : null}
                      </h2>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={this.state.isActive === true ? "clicked-back" : "back"}
          >
            <div className="exerciseList">
              <button
                className={ this.state.isActive === true ? "exercise-button1" : "exercise-button2" }
                onClick={this.handleClick}
                type="button"
              >
                Close
              </button>
              <div className="exerciseTitle">
                <h1 className="exercise-title">{exerciseTitle}</h1>
              </div>
              <div className="exerciseImageAndInfo">
                <ExerciseImage
                  exerciseImage1={exerciseImage1}
                  exerciseImage2={exerciseImage2}
                />
                <div className="exercise-info">
                  <h1 className="steps-list-title">Steps</h1>
                  <ol className="steps-list">
                    {steps.map((step) => {
                      return <li className="step-list-item">{step}</li>;
                    })}
                  </ol>
                  <button
                    type="button"
                    className="generic-button"
                    onClick={this.openModal}
                  >
                    Add to Workout
                  </button>
                  {userCreated && (
                    <button
                      className="generic-button"
                      onClick={() => handleDeleteExercise(exercise.id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
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
              <ExerciseModal
                workoutList={context.workout}
                exerciseWorkoutArray={context.exerciseWorkoutArray}
                addCurrentWorkoutId={context.addCurrentWorkoutId}
                addExerciseToWorkout={context.addExerciseToWorkout}
                addExerciseWorkoutArray={context.addExerciseWorkoutArray}
                updateWorkoutExercises={context.updateWorkoutExercises}
                closeModal={this.closeModal}
                exercise={exercise}
                exerciseTitle={exerciseTitle}
              />
            )}
          </FormContext.Consumer>
        </Modal>
      </>
    );
  }
}



export default Exercise;