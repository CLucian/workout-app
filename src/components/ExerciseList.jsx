import React from 'react';

import Exercise from './Exercise'

class ExerciseList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showExercises: false,
		}
	}

	toggleExercises = () => {
		this.setState(prevState => ({
			showExercises: !prevState.showExercises
		}));
	}

	render () {
		return (
      <div>
        {this.props.exercises.map(exercise => (
          <Exercise exercise={exercise} />
        ))}
      </div>
    );
	}
}

export default ExerciseList;