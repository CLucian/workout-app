import React from 'react';
import LogItem from './LogItem';

import groupBy from 'lodash/groupBy'
import data from './MuscleData';
import LogsTabEdit from './LogsTabEdit';
import LogsTabView from './LogsTabView';
import FormContext from './FormContext';




class LogsTab extends React.Component {
  formattedData = () => {
    const dateArray = groupBy(
      this.props.exerciseLog,
      (exercise) => exercise.date
    );
    return Object.keys(dateArray).map((key) => {
      let newArr = [];
      const val = dateArray[key];
      this.uniqueArray(val, newArr);

      return {
        items: newArr.map((exercise) => {
          return exercise;
        }),
        header: key,
      };
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      stateArr: [],
      editingValue: 0,
      editingId: null,
      currentId: null,
      currentDate: null,
      editing: false,
    };
  }

  // handleClickDec = (id, index) => {
  //   console.log("This has been clicked");
  //   console.log("id", id);
  //   console.log("index", index);
  //   if (id === index && this.state.editingValue > 0) {
  //     this.setState(
  //       {
  //         editingId: id,
  //         editingValue: this.state.editingValue - 1,
  //       },
  //       console.log("this.state.editingId", this.state.editingId)
  //     );
  //     console.log("this.state.editingId", this.state.editingId);
  //   }
  // };

  // handleClickInc = (id, index) => {
  //   console.log("This has been clicked");
  //   console.log("id", id);
  //   console.log("index", index);
  //   console.log('this.state.editingId', this.state.editingId)
  //   console.log("this.state.editingValue", this.state.editingValue);
  //   if (id === index) {
  //     this.setState(
  //       {
  //         editingId: id,
  //         editingValue: this.state.editingValue + 1,
  //       },
  //       console.log("this.state.editingId", this.state.editingId)
  //     );
  //     console.log("this.state.editingId", this.state.editingId);
  //   }
  // };

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

  handleClick = (currentId, currentDate, indexValue, exerciseIndex, dateIndex, currentDateIndex) => {
    // if(indexValue === index) {
      console.log('dateIndex', dateIndex)
      console.log('currentDateIndex', currentDateIndex)
      console.log("-----exercise Index", exerciseIndex);
      console.log("IndexValue", indexValue);
      
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
  }


  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const editedData = {
  //     sets: this.state.inputSets,
  //     reps: this.state.inputReps,
  //     date: this.props.date,
  //     exerciseName: this.props.exerciseName,
  //     id: this.props.currentId,
  //   };
  //   this.props.addExerciseToLogsArray(editedData);
  //   this.setState({ dataIsSent: false });
  // };

  render() {
    console.log("this.props.exerciseLog", this.props.exerciseLog);
    console.log("formatted Data", this.formattedData());

    return (
      <div>
        {this.formattedData().map((date, dateIndex) => {
          const currentDateIndex = this.formattedData().findIndex(
            (x) => x.header === date.header
          )
          return (
            <div className="log-outer-container">
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
                          <div
                            className="logs-info-container"
                            key={item.id}
                          >
                            <li className="logs-list-name">
                              {item.exerciseName}
                            </li>
                            {this.state.editing && currentDateIndex === dateIndex && this.state.currentId === item.id &&
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
                                  this.handleClick(currentId, currentDate, indexValue, exerciseIndex, dateIndex, currentDateIndex)
                                }
                              >
                                Edit
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



