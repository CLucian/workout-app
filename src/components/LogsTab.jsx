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
        {this.props.exercise.map((exercise) => {
          return (
                <LogItem
                  exercise={this.props.exercise}
                />
          );
        })}
      </div>
    );
	}
}

export default LogsTab;