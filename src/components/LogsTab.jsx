import React from 'react';

import groupBy from 'lodash/groupBy'
import LogsTabEdit from './LogsTabEdit';
import LogsTabView from './LogsTabView';
import FormContext from './FormContext';
import { ReactComponent as Edit } from './Icons/pencil.svg';
import { ReactComponent as DeleteIcon } from "./Icons/cross.svg";



class LogsTab extends React.Component {


  formattedData = () => {
    let dateArray = groupBy(
      this.props.exerciseLog,
      (exercise) => exercise.date
    );

    return Object.keys(dateArray).map((key) => {
      let newArr = []
      const val = dateArray[key];
      this.uniqueArray(val, newArr);
      return {
        items: 
          newArr.sort((a, b) => {
            if (a.exerciseName < b.exerciseName) {return -1}
            if (a.exerciseName > b.exerciseName) {return 1}
            return 0;
          }).map((exercise) => {
            return exercise
          }),
        header: key,
      };
    });
  };

  sortedData = () => {
    const sortedArr = this.formattedData().sort((a, b) => {
      let dateA = new Date(a.header)
      let dateB = new Date(b.header)
      return dateA - dateB;
    })
    return sortedArr
  }

  constructor(props) {
    super(props);
    this.state = {
      stateArr: [],
      formatted: false,
      editingValue: 0,
      editingId: null,
      currentId: null,
      currentDate: null,
      editing: true,
      finalDataArray: [...this.sortedData()]
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
          id: item.id,
          date: item.date,
        });
      }
    });
  };

  handleClick = (currentId, currentDate) => {
    this.setState({
      currentId,
      currentDate,
      editing: true,
    });
    // }
  };

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  handleDelete = (exerciseIndex, indexValue, dateId) => {
    let splicedArray = [...this.sortedData()]

    if (exerciseIndex === indexValue) {
      splicedArray.forEach(date => {
        if (date.header === dateId)
        date.items.splice(indexValue, 1)
      })
    }

    let newSpliced = splicedArray.map(date => {
      return date.items.map(item => {
        return item
      })
    })

    let reformattedArray = newSpliced.reduce((a, b) => [...a, ...b], [])

    this.setState({
      finalDataArray: reformattedArray,
      formatted: true
    })
    this.props.updateExerciseToLogsArray(reformattedArray);
    
  }


  render() {
    return (
      
      <div>
        {this.sortedData().length < 1 ?
          <div className="log-outer-container">
            <div className="log-inner-container">
              <div className="log-info">
                <div className="workoutTitle-default">
                  <h1 className="log-title-default">No current logs to display</h1>
                </div>
              </div>
            </div>
          </div>
          : null}




        {this.sortedData().map((date, dateIndex) => {
          const currentDateIndex = this.sortedData().findIndex(
            (x) => x.header === date.header
          );
          
          return (
            <div className="log-outer-container" key={date.header}>
              <div className="log-inner-container">
                <div className="log-info">
                  <div className="workoutTitle">
                    <h1 className="log-title">{date.header}</h1>
                    <ul className="logs-list">
                      {date.items.map((item, exerciseIndex) => {
                        const currentId = item.id;
                        const currentDate = item.date;
                        let indexValue = date.items.findIndex(
                          (x) => x.id === item.id
                        );
                        return (
                          <div className="logs-info-container" key={item.id}>
                            <li className="logs-list-name">
                              {item.exerciseName}
                            </li>
                            {this.state.editing &&
                            currentDateIndex === dateIndex &&
                            this.state.currentId === item.id &&
                            this.state.currentDate === currentDate ? (
                              <FormContext.Consumer>
                                {(context) => (
                                  <LogsTabEdit
                                    currentId={this.state.currentId}
                                    exerciseName={item.exerciseName}
                                    date={item.date}
                                    sets={item.sets}
                                    reps={item.reps}
                                    toggleEdit={this.toggleEdit}
                                    handleSubmit={this.handleSubmit}
                                    addExerciseToLogsArray={
                                      context.addExerciseToLogsArray
                                    }
                                  />
                                )}
                              </FormContext.Consumer>
                            ) : (
                              <>
                                <LogsTabView
                                  currentId={this.state.currentId}
                                  sets={item.sets}
                                  reps={item.reps}
                                />
                              </>
                            )}
                            <li className="logs-list-edit">
                              <button
                                type="button"
                                className="logs-edit-button"
                                onClick={() =>
                                  this.handleClick(
                                    currentId,
                                    currentDate,
                                    indexValue,
                                    exerciseIndex,
                                    dateIndex,
                                    currentDateIndex
                                  )
                                }
                              >
                                <Edit className="logs-edit-image" />
                              </button>
                              <button
                                type="button"
                                className="delete-log-btn"
                                onClick={() =>
                                  this.handleDelete(
                                    exerciseIndex,
                                    indexValue,
                                    date.header
                                  )
                                }
                              >
                                <DeleteIcon className="delete-log-image" />
                              </button>
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LogsTab;



