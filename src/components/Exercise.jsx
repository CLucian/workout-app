import React from 'react';

const Exercise = (props) => {
	return (
    <div className="container">
      <div className="exercise-container">
        <div className="exercise-box">
          {props.exercise.name}
        </div>
      </div>
    </div>
  );
}

export default Exercise;