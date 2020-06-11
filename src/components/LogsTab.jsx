import React from 'react';
import LogItem from './LogItem';

class LogsTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
	render() {
		return (
      <div>
        {this.props.exerciseLog.map((exercise) => {
          return (
          <div>{exercise.exerciseName}</div>
          );
        })}
      </div>
    );
	}
}

export default LogsTab;