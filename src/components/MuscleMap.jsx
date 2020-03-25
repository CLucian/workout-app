import React from 'react';
import MuscleData from './MuscleData';


function MuscleMap(props) {  

  const { setActiveMuscleCategory, handleCategoryClick } = props


  return (
    <div className="muscle-map">
      <img
        src="exercise-images/site-images/MuscleDiagram.png"
        className="body-diagram-image"
        alt="muscle-diagram"
      />
      {}
      {MuscleData.map(category => {
        return <img
          key={category.key}
          src={category.img.src}
          alt={category.img.alt}
          className={category.img.class}
          onClick={() => {setActiveMuscleCategory(category); handleCategoryClick()}}
        />
        })}
      </div>
    )
}

export default MuscleMap;