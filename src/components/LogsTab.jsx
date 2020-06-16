import React from 'react';
import LogItem from './LogItem';

import groupBy from 'lodash/groupBy'


const newIndexOf = (array, item) => {
    for (let i = 0; i < array.length; i++) {
      if (item[i] === item) {
        return i
      }
    }
    return -1
}



class LogsTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  
   somethingFunc = (arr, newArray) => {
    arr.forEach(item => {
      console.log('item', item);
      let i = newArray.findIndex(exercise => exercise.exerciseName === item.exerciseName);
      if (i <= -1) {
        newArray.push({exerciseName: item.exerciseName, sets: item.sets, reps: item.reps})
      }
      })
  }


	render() {
     const dateArray = groupBy(
       this.props.exerciseLog,
       (exercise) => (exercise.date)
     );
    console.log('this.props.exerciseLog', this.props.exerciseLog);
    console.log('dateArray', dateArray)
    console.log('dateArray Map',
      Object.keys(dateArray).map((key) => {
        const val = dateArray[key];
        return val
      })
    );

    

    
     
		return (
     
      <div>
        {Object.keys(dateArray).map(key => {
          let newArr = [];
          const val = dateArray[key]
          return (
            <div>
              <h1>{key}</h1>
              {this.somethingFunc(val, newArr)}
              <ul>
                {newArr.map((exercise) => {
                  console.log("----exercise---", exercise);
                  console.log(
                    "====exercise.exerciseName===",
                    exercise.exerciseName
                  );
                  console.log("====exercise.sets===", exercise.sets);
                  return (
                    <div>
                      <h1>{exercise.exerciseName}</h1>

                      <li>{exercise.exerciseName}</li>
                      <li>{exercise.sets}</li>
                      <li>{exercise.reps}</li>
                    </div>
                  );
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