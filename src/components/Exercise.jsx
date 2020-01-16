import React from 'react';
import axios from 'axios';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // exerciseImages: []
    };
  }



  render() {
    // const { imageByExerciseID, exercise } = this.props

    // const imageData = imageByExerciseID[exercise.id]

    // const img = imageData == null ? 'some_default_url' : imageData.image

    console.log(this.props.exercise)

    return (
      <div className="exercise-box">
        {this.props.exercise.name}
        {/* {this.props.exerciseImage.image} */}
        <div className="photo-box">
          {/* <img className="exercise-photo" src={img} alt="pic" /> */}
        </div>
      </div>
    );
  }
}

export default Exercise;