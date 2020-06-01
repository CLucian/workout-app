import React from 'react';
import FormContext from './FormContext';
import WorkoutExercises from './WorkoutExercises';


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
              {this.state.exerciseDisplay ? this.props.exerciseArray && this.props.exerciseArray.map(exercise => 
                <div>
                  {exercise.exerciseName}
                </div>  
              ) : null}

            </div>
          </div>
        </div>
      </>
    );
  }
}


export default Workout;