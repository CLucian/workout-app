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

    console.log(this.props.category.exercise)
    // return (
    //   <div>
    //     {this.props.category.exercise.name}
    //   </div>
    // )

    return (
      <div className="container">
        <div className="exercise-container">
          {this.props.category.exercise.map(exercise => (
            <Exercise
              exercise={exercise}
            />
          ))}
         </div>
      </div>
    );
  }
}

export default ExerciseList;