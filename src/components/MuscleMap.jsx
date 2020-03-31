import React from 'react';
import MuscleData from './MuscleData';

import Foo from './Temp'


function MuscleMap(props) {  

  const { setActiveMuscleCategory, handleCategoryClick } = props


  return (
    <div className="muscle-map">
      <br />
      <br />

      <Foo children={"this is other stuff"} />

      <Foo>
        some random stuff
      </Foo>

      <br />
      <br />
      <br />


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