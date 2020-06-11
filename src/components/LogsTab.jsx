import React from 'react';
import LogItem from './LogItem';

import groupBy from 'lodash/groupBy'

class LogsTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  

	render() {
     const dateArray = groupBy(
       this.props.exerciseLog,
       (exercise) => (exercise.date)
     );
     console.log(dateArray);
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