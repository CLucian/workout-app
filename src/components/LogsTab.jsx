import React from 'react';
import LogItem from './LogItem';

import groupBy from 'lodash/groupBy'
import data from './MuscleData';




class LogsTab extends React.Component {

  formattedData = () => {
    const dateArray = groupBy(
      this.props.exerciseLog,
      (exercise) => exercise.date
    );
    return Object.keys(dateArray).map((key) => {
      let newArr = [];
      const val = dateArray[key];
      this.uniqueArray(val, newArr)

      return {
        items: newArr.map((exercise) => {
          return exercise;
        }),
        header: key
      };
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      stateArr: [],
    };
  }

  uniqueArray = (arr, newArray) => {
    arr.forEach((item) => {
      let i = newArray.findIndex(
        (exercise) => exercise.exerciseName === item.exerciseName
      );
      if (i <= -1) {
        newArray.push({
          exerciseName: item.exerciseName,
          sets: item.sets,
          reps: item.reps,
        });
      }
    });
  };

  render() {
    console.log('formatted Data', this.formattedData())

  

    return (
      <div>
        {this.formattedData().map(exercise => {
          console.log('newArray ------', this.newArray)
          console.log('exercise------' ,exercise)
          return (
            <div className="log-outer-container">
              <div className="log-inner-container">
                <div className="log-info">
                  <div className="workoutTitle">
                    <h1 className="log-title">{exercise.header}</h1>
                    {exercise.items.map((item) => {
                      return(
                      <ul className="logs-list">
                        <div className="logs-info-container">
                          <li className="logs-list-name">
                            {item.exerciseName}
                          </li>
                          <li className="logs-list-info">
                            Sets: {item.sets}
                          </li>
                          <li className="logs-list-info">
                            Reps: {item.reps}
                          </li>
                          <li className="logs-list-edit">Edit</li>
                        </div>
                      </ul>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          );})
        }
      </div>
    );
  }
}

export default LogsTab;




//         <div className="log-outer-container">
//           <div className="log-inner-container">
//             <div className="log-info">
//               <div className="workoutTitle">
//                 <h1 className="log-title">{key}</h1>
//                 <ul className="logs-list">
//                     <div className="logs-info-container">
//                       <li className="logs-list-name">
//                         {exercise.exerciseName}
//                       </li>
//                       <li className="logs-list-info">
//                         Sets: {exercise.sets}
//                       </li>
//                       <li className="logs-list-info">
//                         Reps: {exercise.reps}
//                       </li>
//                       <li className="logs-list-edit">Edit</li>
//                     </div>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>


//  <div className="log-outer-container">
//           <div className="log-inner-container">
//             <div className="log-info">
//               <div className="workoutTitle">
//                 <h1 className="log-title">{key}</h1>
//                 {/* {this.uniqueArray(val, newArr)} */}
//                 <ul className="logs-list">
//                   {newArr.map((exercise) => {
//                     return (
//                       <div className="logs-info-container">
//                         <li className="logs-list-name">
//                           {exercise.exerciseName}
//                         </li>
//                         <li className="logs-list-info">
//                           Sets: {exercise.sets}
//                         </li>
//                         <li className="logs-list-info">
//                           Reps: {exercise.reps}
//                         </li>
//                         <li className="logs-list-edit">Edit</li>
//                       </div>
//                     );
//                   })}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>