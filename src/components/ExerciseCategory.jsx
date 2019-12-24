import React from 'react';
import axios from 'axios';
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

  toggleComponent = (e, category) => {
    // Open exercises based off ID and if you click the same ID then closes it
    if (this.state.id === e.target.value) {
      this.setState(prevState => ({
        id: category.id,
        showComponent: !prevState.showComponent
      }));
    } else {
      this.setState({
        id: e.target.value,
        showComponent: true
      });
    }
  };

  

  render() {
    // console.log(this.state.id);
    // console.log(this.props.category.id)
    return (
      <div className="container-home">
        <div className="container-background-home">
          <ul className="list">
            {this.props.categories.map(category => (
              <button
                className="muscle-group"
                key={category.id}
                value={category.id}
                onClick={e => {
                  this.props.getExercisesByID(category.id);
                  this.toggleComponent(e, category);
                }}
              >
                {category.name}
              </button>
            ))}
          </ul>
          {this.state.showComponent ? (
            <ExerciseList
              getExercisesByID={this.props.getExercisesByID}
              exercises={this.props.exercises}
              imageByExerciseID={this.props.imageByExerciseID}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default ExerciseCategory;



