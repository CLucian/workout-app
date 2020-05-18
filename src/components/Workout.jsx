import React from 'react';
import FormContext from './FormContext';




function Workout(props) {
	

	console.log('AAAAAAAAAJHDFJHDJFHDJHFDJHFJSHDFKHSDFSDF', props.workoutName)


	return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div className="workout-info">
            <div className="workoutTitle">
              <h1 className="workout-title"> WORKOUT TITLE</h1>
              {props.workout.map(workout => {
				return  (
				  <div>
					<h1>{workout.workoutName}</h1>
					<h1>{workout.workoutDesc}</h1>
				</div>)
			  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Workout;