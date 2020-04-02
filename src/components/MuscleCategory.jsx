import React from 'react';
import CategorySection from "./CategorySection";

function MuscleCategory(props) {

		const {
      activeCategory,
      handleCategoryClick,
      setActiveTab,
      activeTab,
      dataCategory,
      showModal,
      isModalActive,
      setExerciseTitle
    } = props;

		// console.log("ACTIVE CATEGORY IS", activeCategory);

		if (!activeCategory) {
		return null;
		}


		return (
      <div className="muscle-category-container">
        {/* <SectionComponent category={activeCategory}/> */}

        <CategorySection
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          dataCategory={dataCategory}
          showModal={showModal}
          isModalActive={isModalActive}
          setExerciseTitle={setExerciseTitle}
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