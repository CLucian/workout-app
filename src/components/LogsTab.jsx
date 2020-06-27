import React from 'react';
import LogItem from './LogItem';

import groupBy from 'lodash/groupBy'
import data from './MuscleData';
import LogsTabEdit from './LogsTabEdit';
import LogsTabView from './LogsTabView';
import FormContext from './FormContext';




class LogsTab extends React.Component {


  formattedData = () => {
    let dateArray = groupBy(
      this.props.exerciseLog,
      (exercise) => exercise.date
    );

    console.log('1. dateArray', dateArray)
    return Object.keys(dateArray).map((key) => {
      let newArr = []
      const val = dateArray[key];
      // console.log('2.5, newArr', newArr);
      this.uniqueArray(val, newArr);
      // console.log('3. newArr', newArr)
      return {
        items: 
          newArr.sort((a, b) => {
            if (a.exerciseName < b.exerciseName) {return -1}
            if (a.exerciseName > b.exerciseName) {return 1}
            return 0;
          }).map((exercise) => {
            return exercise
          }),
        
        // newArr.map((exercise) => {
        //   return exercise
        // }),
        header: key,
      };
    });
  };

  sortedData = () => {
    const sortedArr = this.formattedData().sort((a, b) => {
      // if (a.header > b.header) {return -1}
      // if (a.header < b.header) {return 1}
      // return 0;
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
      console.log('5. i', i)
      if (i <= -1) {
        newArray.push({
          exerciseName: item.exerciseName,
          sets: item.sets,
          reps: item.reps,
          id: item.id,
          date: item.date,
        });
      }
      // console.log('2. newArray', newArray)
    });
  };

  handleClick = (currentId, currentDate, indexValue, exerciseIndex, dateIndex, currentDateIndex) => {
      // console.log('dateIndex', dateIndex)
      // console.log('currentDateIndex', currentDateIndex)
      // console.log("-----exercise Index", exerciseIndex);
      // console.log("IndexValue", indexValue);
      // console.log('this.state.editing handleClick', this.state.editing);
      
    console.log("currentId============", currentId);
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
    console.log('this.state.editing -  toggleEdit', this.state.editing)
  }

  handleDelete = (exerciseIndex, indexValue, dateId) => {
    let splicedArray = [...this.sortedData()]

    if (exerciseIndex === indexValue) {
      console.log('splicedArray', splicedArray)
      splicedArray.forEach(date => {
        // console.log('dateId', dateId)
        // console.log("date.id", date.header);
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
    console.log('splicedArray', splicedArray)
    console.log('===============reformattedArray========================', reformattedArray)
    this.props.updateExerciseToLogsArray(reformattedArray);
    
  }


  render() {
    console.log("this.props.exerciseLog", this.props.exerciseLog);
    console.log("formatted Data", this.formattedData());
    console.log('sortedData()', this.sortedData());
    console.log('rendered state', this.state.finalDataArray)


    return (
      <div>
        {this.sortedData().map((date, dateIndex) => {
        {/* {this.state.finalDataArray.map((date, dateIndex) => { */}
          const currentDateIndex = this.sortedData().findIndex(
            (x) => x.header === date.header
          );
          
          
          return (
            <div className="log-outer-container" key={date.header}>
              <div className="log-inner-container">
                <div className="log-info">
                  <div className="workoutTitle">
                    <h1 className="log-title">{date.header === "undefined" ? "No current logs" : date.header}</h1>
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
                                {/* <li className="logs-list-edit">
                                <button type="button"
                                  onClick={() => this.handleClick(currentId, currentDate)}
                                >
                                  Edit
                                </button>
                              </li> */}
                              </>
                            )}
                            <li className="logs-list-edit">
                              <button
                                type="button"
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
                                Edit
                              </button>
                              <button
                                type="button"
                                onClick={() =>
                                  this.handleDelete(exerciseIndex, indexValue, date.header)
                                }
                              >
                                X
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



