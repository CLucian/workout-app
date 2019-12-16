import React from 'react';

const Exercise = (props) => {
	return (

        <div className="exercise-box">
          {props.exercise.name}
        </div>
  );
}

export default Exercise;