import React from "react";
import FormContext from './FormContext';


class WorkoutModal extends React.Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);
    this.state = {
      workoutName: "",
      workoutDesc: "",
      exerciseInfo: [],
      workoutId: Math.random(),
      showMessage: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendWorkoutObj = () => {
    const workoutObj = {
      workoutName: this.state.workoutName,
      workoutDesc: this.state.workoutDesc,
      workoutExercises: [],
      exerciseNames: [],
      workoutId: this.state.workoutId,
    };
    this.context.addNewWorkout(workoutObj);
  };

  duplicate = () => {
    this.setState({ showMessage: true });
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 2000);
  };

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.context.workout.find(
        (workout) => workout.workoutName.toString() === this.state.workoutName
      )
    ) {
      alert("You've already submitted a workout with this Name!");
    } else {
      this.setState(
        {
          [e.target.name]: e.target.value,
          workoutId: Math.random(),
        },
        () => {
          this.sendWorkoutObj();
          this.duplicate();
        }
      );
    }
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {

    return (
      <div>
        <h1 className="modal-title">
          Create New Workout
        </h1>
        <form className="workout-form" onSubmit={this.handleSubmit}>
          <div className="modal-form-container">
            <div className="modal-form-group">
              <input
                className="modal-input"
                placeholder="Workout Name"
                name="workoutName"
                onChange={this.handleInput}
                value={this.state.workoutName}
                maxLength="15"
              />
            </div>
            <div className="modal-form-group">
              <input
                className="modal-input"
                placeholder="Description"
                name="workoutDesc"
                onChange={this.handleInput}
                value={this.state.workoutDesc}
                maxLength="200"
              />
            </div>
          </div>
          <div className="submit-button-div">
            <input type="submit" className="generic-button submit-button" />
          </div>
          <div className="popup-text">{this.state.showMessage ? <p>Added to workout!</p> : null}</div>
        </form>
      </div>
    );
  }
}

export default WorkoutModal;
