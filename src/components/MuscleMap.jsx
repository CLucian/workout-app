import React from 'react';
import MuscleData from './MuscleData';

import SectionContent from './muscle-category-components/CategorySection';

class MuscleMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      muscleOverview: null
    };
  };
  

  render() {

    console.log(this.state.muscleOverview);
             return (
               <div className="muscle-map">
                 <img
                   src="exercise-images/site-images/MuscleDiagram.png"
                   className="body-diagram-image"
                   alt="muscle-diagram"
                 />

                  {MuscleData.map(category => {
                    return <img
                      key={category.key}
                      src={category.img.src}
                      alt={category.img.alt}
                      className={category.img.class}
                      onClick={() => {this.props.setActiveMuscleCategory(category); this.props.handleCategoryClick()}}
                    />
                    })}
                  </div>
                )
           }
}

export default MuscleMap;