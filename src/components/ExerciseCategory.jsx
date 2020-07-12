import React from 'react';
import Exercise from './Exercise';




class ExerciseCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null
    };
  }



  handleClick = (muscleGroup) => {
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
      <div className="container">
        <div className="container-background-home">
          <ul className="list">
            {Object.keys(this.props.data)
              .sort()
              .map(category => (
                <button
                  className="muscle-group"
                  onClick={() => this.handleClick(category)}
                >
                  {category}
                </button>
              ))}
          </ul>
          {this.state.category && (
            <Exercise category={this.props.data[this.state.category]} />
          )}
        </div>
      </div>
    );
  }
}

export default ExerciseCategory;




