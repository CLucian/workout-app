import React from 'react';
import CategorySection from "./muscle-category-components/CategorySection";

// import Abdominals from "./muscle-category-components/Abdominals";
// import Back from "./muscle-category-components/Back";
// import Biceps from "./muscle-category-components/Biceps";
// import Calves from "./muscle-category-components/Calves";
// import Chest from "./muscle-category-components/Chest";
// import Glutes from "./muscle-category-components/Glutes";
// import Hamstrings from "./muscle-category-components/Hamstrings";
// import Other from "./muscle-category-components/Other";
// import Quadriceps from "./muscle-category-components/Quadriceps";
// import Shoulders from "./muscle-category-components/Shoulders";
// import Triceps from "./muscle-category-components/Triceps";

class MuscleCategory extends React.Component {
	render() {
		const {activeCategory} = this.props

		console.log("ACTIVE CATEGORY IS", activeCategory);

		if (!activeCategory) {
		return null;
		}


		return (
      <div className="muscle-category-container">

		{/* <SectionComponent category={activeCategory}/> */}

		<CategorySection category={activeCategory} />
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
}

export default MuscleCategory;