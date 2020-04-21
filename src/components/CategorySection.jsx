import React from "react";

import ExercisesTab from './ExercisesTab';
import OverviewTab from './OverviewTab';
import CreateTab from './CreateTab';

function SectionContent(props) {

		const {
      activeCategory,
      activeTab,
      setActiveTab,
      dataCategory,
      showModal,
      isModalActive,
      setExerciseTitle,
      handleFormChange,
      handleSubmit,
      formSubData,
      addNewItem
    } = props;
    
		const { sectionContent } = activeCategory;
    const { info, title, muscleFunction, src } = sectionContent;

  function currentTab() {
    if(activeTab === "overview") {
      return (
        <OverviewTab
          info={info}
          title={title}
          src={src}
          muscleFunction={muscleFunction}
        />
      )
      }
      else if (activeTab === "exercises") {
        return (
          <ExercisesTab
            activeCategory={activeCategory}
            dataCategory={dataCategory}
            showModal={showModal}
            isModalActive={isModalActive}
            setExerciseTitle={setExerciseTitle}
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            formSubData={formSubData}
          />
        );
      } 
      else {
        return (
          <CreateTab
            handleFormChange={handleFormChange}
            handleSubmit={handleSubmit}
            addNewItem={addNewItem}
          />
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
        </ul>
        <div className="overview-main-container">
          <div className="overview-content-container">
            {currentTab()}
             {/* {activeTab === "overview" ? (
              <OverviewTab
                info={info}
                title={title}
                src={src}
                muscleFunction={muscleFunction}
              />
            ) : (
              <ExercisesTab
                activeCategory={activeCategory}
                dataCategory={dataCategory}
                showModal={showModal}
                isModalActive={isModalActive}
                setExerciseTitle={setExerciseTitle}
              />
            )} */}
          </div>
        </div>
      </div>
    );
  }

export default SectionContent;
