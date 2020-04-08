import React from "react";

import ExercisesTab from './ExercisesTab';
import OverviewTab from './OverviewTab';

function SectionContent(props) {

		const {
      activeCategory,
      activeTab,
      setActiveTab,
      dataCategory,
      showModal,
      isModalActive,
      setExerciseTitle
    } = props;
    
		const { sectionContent } = activeCategory;
    const { info, title, muscleFunction, src } = sectionContent;
    


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
        </ul>
        <div className="overview-main-container">
          <div className="overview-content-container">
            {activeTab === "overview" ? (
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
            )}
          </div>
        </div>
      </div>
    );
	}


export default SectionContent;
