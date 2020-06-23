import React from 'react';

import DatePicker from 'react-date-picker';



class WorkoutModalLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      sets: null,
      reps: null,
      id: null
    };
  }

  checkMaxLength = (input) => {
    if (input.target.value.length > input.target.maxLength) {
      input.target.value = input.target.value.slice(0, input.target.maxLength);
    }
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }) 
  }

  onChange = (date) => {
    this.setState({
      date
    })
  }

  sendExerciseLogToProvider = () => {
    let splicedDate = this.state.date.toString().slice(0, 15);
    const exerciseLog = {
      exerciseName: this.props.exercise,
      sets: this.state.sets,
      reps: this.state.reps,
      date: splicedDate,
      id: this.state.date.toString()
    }
    
    this.props.addExerciseToLogsArray(exerciseLog);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.sendExerciseLogToProvider();
  }

  render() {
    console.log('{{{{{{{{{{{{{{{{{{{{{ ModalLogState ]]]]]]]]]]]]]]]]]]]]]]]', this.state)
    console.log("====CurrentModalExercise====", this.props.exercise);
    return (
      <div>
        <h1 className="modal-title">{this.props.exercise}</h1>
        <form className="workout-form" onSubmit={this.handleSubmit}>
          <div className="modal-workout-form-container">
            <div className="modal-workout-log-group">
              <input
                className="volume-input"
                type="number"
                min="0"
                placeholder="Sets"
                name="sets"
                onChange={this.onInputChange}
                value={this.state.sets}
                onInput={this.checkMaxLength}
                maxLength="3"
              />
            </div>
            <div className="modal-workout-log-group">
              <input
                className="volume-input"
                type="number"
                min="0"
                placeholder="Reps"
                name="reps"
                onChange={this.onInputChange}
                value={this.state.reps}
                onInput={this.checkMaxLength}
                maxLength="3"
              />
            </div>
          </div>
          <div className="calendar-div">
            <DatePicker
              className="calendar"
              value={this.state.date}
              onChange={this.onChange}
            />
          </div>
          <div className="submit-button-div">
            <input
              type="submit"
              value="Add to Logs"
              className="generic-button submit-button"
            />
          </div>
          <div className="popup-text">
            {this.state.showMessage ? <p>Added to workout!</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

export default WorkoutModalLog;