import React from 'react'; 
import axios from 'axios';

import ExerciseImage from '../components/ExerciseImage';

export default class Exercises extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			exercises: [],
			exerciseInfo: [],
			muscleGroups: [],
			exerciseImage: []
		}
	}

	

// getExercises() {
// 	return axios.get('https://wger.de/api/v2/exercise?status=2&language=2')
// }

// getExerciseInfo() {
// 	return axios.get('https://wger.de/api/v2/exerciseinfo?status=2&category=13&language=2')
// }

// getMuscleGroups() {
// 	return axios.get('https://wger.de/api/v2/exercisecategory/')
// }

// getExerciseImage() {
// 	return axios.get("https://wger.de/api/v2/exercisecategory/");
// }

//////////////////////////////////////////////////////////////////////

// componentDidMount() {
// 	axios.get('https://wger.de/api/v2/exercisecategory/')
// 		.then(res => {
// 			console.log(res)
// 			this.setState({ muscleGroups: res.data.results })
// 	})
// }

// Create a function that takes in muscleGroup.id and renders all the exercises for that respective id

getExercisesByID = (id) => {
	axios.get(`https://wger.de/api/v2/exercise?status=2&category=${id}&language=2&limit=50`)
		.then(res => {
			console.log(res)
			this.setState({ exercises: res.data.results})
		})
}

getExerciseImageByID = (id) => {
	axios.get(`https://wger.de/api/v2/exerciseimage?status=2&exercise=${id}&language=2&limit=50`)
	.then(res => {
		console.log(res)
		this.setState({ exerciseImage: res.data.results })
	})
}	

dummyFn(id) {
	console.log(id);
}


	render() {
		return (
      <div className="container">
        <div className="container-background-home">
          <ul className="muscle-groups">
            {this.state.muscleGroups.map(muscleGroup => (
              <li
                className="muscle-group"
                onClick={() => this.getExercisesByID(muscleGroup.id)}
                key={muscleGroup.id}
              >
                {muscleGroup.name}
              </li>
            ))}
          </ul>
          <h1 className="category-header">Exercises</h1>
          <ul>
            {this.state.exercises.map(exercise => (
              <li className="exercises">{exercise.name}</li>
            ))}
			{this.state.exercises.map(exerciseImage => (
				<li className="exercises">{exerciseImage.image}</li>
			))}
          </ul>
        </div>
      </div>
    );
	}
}


// I want to clear the state and clear the output each time I click on a new body category






// Abs Image
// https://wger.de/api/v2/exerciseimage?status=2&exercise=91&language=2&limit=1


// Chest Image
// https://wger.de/api/v2/exerciseimage?status=2&exercise=192&language=2&limit=1

