import React from 'react';
import ExerciseList from './ExerciseList';

class ExerciseCategory extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: false
		};

		// this.toggleComponent = this.toggleComponent.bind(this);
	}

	toggleComponent = () => {
		this.setState(prevState => ({
			showComponent: !prevState.showComponent
		}));
	}

	render() {
             return (
               <div className="container-home">
                 <div className="container-background-home">
                   <ul className="list">
                     {this.props.categories.map(category => (
                       <button
                         className="muscle-group"
                         key={category.id}
                         onClick={() => { this.props.getExercisesByID(category.id); this.toggleComponent(); }}
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