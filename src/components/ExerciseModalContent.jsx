import React from "react";
import FormContext from './FormContext';

  // const { data } = props

             // if (!data) {
             //   return null;
             // }


class ExerciseModalContent extends React.Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);
    this.state = {
      workoutName: "",
      workoutDesc: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  sendWorkoutObj = () => {
    const workoutObj = {
      workoutName: this.state.workoutName,
      workoutDesc: this.state.workoutDesc
    };
    this.context.addNewWorkout(workoutObj)
  }


  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      this.sendWorkoutObj();
    });
  }


  handleInput(e) {
    e.preventDefault();
    this.setState(
      {
        [e.target.name]: e.target.value,
      }
    );
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1 className="modal-title">
          {/*{data.exerciseTitle}*/}Create New Workout
        </h1>
        <form onSubmit={this.handleSubmit}>
          <div className="modal-form-container">
            <div className="modal-form-group">
              <input
                className="modal-input"
                placeholder="Workout Name"
                name="workoutName"
                onChange={this.handleInput}
                value={this.state.workoutName}
              />
            </div>
            <div className="modal-form-group">
              <input
                className="modal-input"
                placeholder="Description"
                name="workoutDesc"
                onChange={this.handleInput}
                value={this.state.workoutDesc}
              />
            </div>
          </div>
          <input type="submit" />
        </form>
        <div className="modal-button-div">
          <button className="modal-button" type="button" onClick={this.props.closeModal}>
            CLOSE
          </button>
          {this.state.workoutName}
          {this.state.workoutDesc}
        </div>
      </div>
    );
  }
}

export default ExerciseModalContent;
