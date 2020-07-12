import React from 'react';
import CategorySection from "./CategorySection";

function MuscleCategory(props) {

		const {
      activeCategory,
      handleCategoryClick,
      setActiveTab,
      activeTab,
      dataCategory,
      setExerciseTitle,
      handleFormChange,
      handleSubmit,
      addNewItem,
      formSubData
    } = props;

		if (!activeCategory) {
		return null;
		}


		return (
      <div className="muscle-category-container">
        <CategorySection
          activeCategory={activeCategory}
          handleCategoryClick={handleCategoryClick}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          dataCategory={dataCategory}
          setExerciseTitle={setExerciseTitle}
          handleFormChange={handleFormChange}
          formSubData={formSubData}
          handleSubmit={handleSubmit}
          addNewItem={addNewItem}
        />
      </div>
    );
}

export default MuscleCategory;