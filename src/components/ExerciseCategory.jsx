import React from 'react';
import axios from 'axios';
import ExerciseList from './ExerciseList';




class ExerciseCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
  }



  handleClick = (muscleGroup) => {
    // console.log(this.props.data[muscleGroup].exercise)

    if (muscleGroup === this.state.category) {
      this.setState({
        category: null
      })
    }
    else {
      this.setState({
        category: muscleGroup
      })
    }
  }


  render() {
    return (
      <div className="container-home">
        <div className="container-background-home">
          <ul className="list">
            {Object.keys(this.props.data).sort().map(category => (
              <button className="muscle-group"
              onClick={() => this.handleClick(category)}>
                {category}
              </button>
            ))}
          </ul>
          { this.state.category &&
            <ExerciseList category={this.props.data[this.state.category]} />
          }
        </div>
      </div>
    );
  }
}

export default ExerciseCategory;




