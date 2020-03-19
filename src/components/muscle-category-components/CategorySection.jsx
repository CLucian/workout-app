import React from "react";

import ExercisesTab from './ExercisesTab';

function SectionContent(props) {

		const { activeCategory, activeTab, setActiveTab } = props;
		const { sectionContent } = activeCategory;
    const { info, title, muscleFunction } = sectionContent;
    


		return (
      <div className="main-div">
        <ul className="tab-bar"> 
          <li
            className={activeTab === 'overview' ? "active" : null}
            id="overview"
            onClick={setActiveTab}
          >
            Overview
          </li>
          <li
            className={activeTab === 'exercises' ? 'active' : null}
            id="exercises"
            
            onClick={setActiveTab}
          >
            Exercises
          </li>
        </ul>
        {activeTab === "overview" ? (
          <div className="main-container">
            <div className="category-title">{title}</div>
            <div className="img-info-container">
              <div className="img-container">
                <img
                  className="overview-img"
                  src="exercise-images/muscle-category-images/abs.png"
                  alt="abs"
                />
              </div>
              <div className="info-container">
                <div className="info">{info}</div>
                <h1 className="muscleFunction-title">Muscle Function</h1>
                <div className="muscleFunction">{muscleFunction}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-container">
            <ExercisesTab activeCategory={activeCategory} />
          </div>
        )}
      </div>
    );
	}


export default SectionContent;
