import React from 'react';
import axios from 'axios';
import Exercise from './Exercise'

class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   exerciseImages: []
    };
  }


  render() {
    return (
      <div className="container">
        <div className="exercise-container">
          {this.props.exercises.map(exercise => (
            <Exercise
              exercise={exercise}
              imageByExerciseID={this.props.imageByExerciseID}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ExerciseList;