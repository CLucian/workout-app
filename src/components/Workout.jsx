import React from 'react';
import FormContext from './FormContext';
import WorkoutExercises from './WorkoutExercises';


class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseDisplay: 'false'
    }
  }
  
  render() {
    console.log(
      "AAAAAAAAAJHDFJHDJFHDJHFDJHFJSHDFKHSDFSDF",
      this.props.workoutName
    );

    return (
      <>
        <div className="outer-container">
          <div className="inner-container">
            <div className="create-workout-info">
              <div className="workoutTitle">
                <h1 className="create-workout-title">
                  {this.props.name}
                </h1>
              </div>
              <div className="workoutDescription">{this.props.desc}</div>
              <button type="button">Display Exercises</button>
              {
                this.state.exerciseDisplay ? 
                <WorkoutExercises /> :
                null
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Workout;