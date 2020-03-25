import React from 'react';
import CategorySection from "./muscle-category-components/CategorySection";

function MuscleCategory(props) {

		const {activeCategory, handleCategoryClick, setActiveTab, activeTab, dataCategory } = props;

		// console.log("ACTIVE CATEGORY IS", activeCategory);

		if (!activeCategory) {
		return null;
		}


		return (
      <div className="muscle-category-container">

		{/* <SectionComponent category={activeCategory}/> */}

		<CategorySection activeCategory={activeCategory}
		 handleCategoryClick={handleCategoryClick}
		 setActiveTab={setActiveTab}
		 activeTab={activeTab}
		 dataCategory={dataCategory}
		 />
        {/* <Abdominals /> */}
		{/* <Back />
		<Biceps /> 
		<Calves />
		<Chest />
		<Glutes />
		<Hamstrings />
		<Other />
		<Quadriceps />
		<Shoulders />
		<Triceps /> */}
      </div>
    );
}

export default MuscleCategory;