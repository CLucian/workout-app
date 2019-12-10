import React from 'react';
import axios from 'axios';

class MuscleGroups extends React.Component {
	state = {
		muscleGroups: []
	}

	componentDidMount() {
		axios.get("https://wger.de/api/v2/exercisecategory/").then(res => {
			console.log(res)
			this.setState({ muscleGroups: res.data.results })
		})
	}

	render() {
		return (
      <div className='exercises'>
        <ul>
          {this.state.muscleGroups.map(muscle => (
            <li key={muscle.id}>{muscle.name}</li>
          ))}
        </ul>
      </div>
    );
	}
}

export default MuscleGroups;