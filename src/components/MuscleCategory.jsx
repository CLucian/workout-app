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
        {/* <img className="overview-background-image" src="/exercise-images/background-images/gym1.jpg" alt="overview-background" /> */}
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
      </div>
    );
}

export default MuscleCategory;