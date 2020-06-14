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

    console.log('dateArray Map',
      Object.keys(dateArray).map((key) => {
        const val = dateArray[key];
        return val
        // return val.map(exercise => {
        //   return (
        //     exercise.exerciseName
        //   )
        // })
      })
    );
     console.log(dateArray);
     console.log(this.props.exerciseLog);
		return (
     
      <div>
        {Object.keys(dateArray).map(key => {
          const val = dateArray[key]
          return (
            <div>
              <h1>{key}</h1>
              <ul>
                {val.map(dateInfo => {
                  return(
                  <li>{dateInfo.exerciseName}</li>
                  )
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
	}
}

export default LogsTab;