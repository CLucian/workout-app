import React from 'react';

class WorkoutModalLog extends React.Component {
	render() {
		return (
      <div>
        <h1 className="modal-title">
          {/*{data.exerciseTitle}*/}Create New Workout
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
          <div className="popup-text">
            {this.state.showMessage ? <p>Added to workout!</p> : null}
          </div>
        </form>
      </div>
    );
	}
}

export default WorkoutModalLog;