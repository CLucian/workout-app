import React from "react";

import ExercisesTab from './ExercisesTab';
import OverviewTab from './OverviewTab';

function SectionContent(props) {

		const { activeCategory, activeTab, setActiveTab, dataCategory } = props;
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
          <OverviewTab info={info} title={title} muscleFunction={muscleFunction}  />
        ) :
          <ExercisesTab activeCategory={activeCategory} dataCategory={dataCategory} />
        }
      </div>
    );
	}


export default SectionContent;
