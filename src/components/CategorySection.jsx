import React from "react";

import ExercisesTab from './ExercisesTab';
import OverviewTab from './OverviewTab';
import CreateTab from './CreateTab';
import WorkoutTab from './WorkoutTab';
import LogsTab from './LogsTab';
import FormContext from "./FormContext";


function SectionContent(props) {

		const {
      activeCategory,
      activeTab,
      setActiveTab,
      dataCategory,
      handleFormChange,
      handleSubmit,
      addNewItem
    } = props;
    
		const { sectionContent } = activeCategory;
    const { info, title, muscleFunction, src } = sectionContent;

  function currentTab() {
    if (activeTab === "overview") {
      return (
        <OverviewTab
          info={info}
          title={title}
          src={src}
          muscleFunction={muscleFunction}
        />
      );
    } else if (activeTab === "exercises") {
      return (
        <FormContext.Consumer>
          {(context) => (
            <ExercisesTab
              dataCategory={dataCategory}
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
              handleDeleteEx={context.handleDeleteEx}
              addCompleteArray={context.addCompleteArray}
              formData={context.items}
            />
          )}
        </FormContext.Consumer>
      );
    } else if (activeTab === "create") {
      return (
        <FormContext.Consumer>
          {(context) => (
            <CreateTab
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
              addNewItem={addNewItem}
              addArrayItem={context.addArrayItem}
              hello={context.test}
            />
          )}
        </FormContext.Consumer>
      );
    } else if (activeTab === "workout") {
      return (
        <FormContext.Consumer>
          {(context) => (
            <WorkoutTab
              handleFormChange={handleFormChange}
              handleSubmit={handleSubmit}
              addNewItem={addNewItem}
              addArrayItem={context.addArrayItem}
              hello={context.test}
              workout={context.workout}
            />
          )}
        </FormContext.Consumer>
      );
    } else if (activeTab === "logs") {
      return (
        <FormContext.Consumer>
          {(context) => (
            <LogsTab
              exercise={context.exerciseLog}
              exerciseLog={context.exerciseLog}
              addExerciseToLogsArray={context.addExerciseToLogsArray}
              updateExerciseToLogsArray={context.updateExerciseToLogsArray}
            />
          )}
        </FormContext.Consumer>
      );
    }

    }





		return (
      <div className="main-div">
        <ul className="tab-bar">
          <li
            className={activeTab === "overview" ? "active" : null}
            id="overview"
            onClick={setActiveTab}
          >
            Overview
          </li>
          <li
            className={activeTab === "exercises" ? "active" : null}
            id="exercises"
            onClick={setActiveTab}
          >
            Exercises
          </li>
          <li
            className={activeTab === "create" ? "active" : null}
            id="create"
            onClick={setActiveTab}
          >
            Create
          </li>
          <li
            className={activeTab === "workout" ? "active" : null}
            id="workout"
            onClick={setActiveTab}
          >
            Workouts
          </li>
          <li
            className={activeTab === "logs" ? "active" : null}
            id="logs"
            onClick={setActiveTab}
          >
            Logs
          </li>
        </ul>
        <div className="overview-main-container">
          <div className="overview-content-container">{currentTab()}</div>
        </div>
      </div>
    );
  }

export default SectionContent;
