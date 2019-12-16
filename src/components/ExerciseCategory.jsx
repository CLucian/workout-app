import React from 'react';
import ExerciseList from './ExerciseList';

class ExerciseCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: false,
			id: null,
		};

		// this.toggleComponent = this.toggleComponent.bind(this);
		// this.toggler = this.toggler.bind(this);
	}

//  		if(e.target.value !== category.id) {
// 			this.setState({
//         	showComponent: false
//       	});
// 	}

	// handleToggle = (e, category) => {
	// 	if (this.state.id === e.target.value) {

	// 	}
	// }

	toggleComponent = (e, category) => {
			// Open exercises based off ID and if you click the same ID then closes it
			if (this.state.id === e.target.value) {
				this.setState(prevState => ({
					id: category.id,
					showComponent: !prevState.showComponent
				}))
			}
			else {
				this.setState({
					id: e.target.value,
					showComponent: true
				})
			}
			// this.setState(prevState => ({
			// showComponent: !prevState.showComponent
		// })) 

	}

	// toggler = (e, category) => {
	// 	console.log(category.id)
	// 	console.log(e.target.value)
	// }

	render() {
		console.log(this.state.id);
		// console.log(this.props.categories.id)
             return (
               <div className="container-home">
                 <div className="container-background-home">
                   <ul className="list">
                     {this.props.categories.map(category => (
                       <button
                         className="muscle-group"
						 key={category.id}
						 value={category.id}
                         onClick={(e) => { this.props.getExercisesByID(category.id);  this.toggleComponent(e, category); /* this.toggler(e, category) */; }}
                       >
                         {category.name}
                       </button>
                     ))}
                   </ul>
					{ this.state.showComponent ? 
						<ExerciseList 
							getExercisesByID={this.props.getExercisesByID}
							exercises={this.props.exercises}
						/>
							: null
					 }
                 </div>
               </div>
             );
           }
}

export default ExerciseCategory;



// this.toggleComponent; 

// {this.state.toggleComponent ? <Exercisess /> :
						//  null}