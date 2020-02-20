import React from 'react';
import MuscleData from './MuscleData';


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
                      onClick={() => this.props.setActiveMuscleCategory(category)}
                    />
                    })}
                  </div>
                )



                //  <img
                //    src="exercise-images/site-images/muscle-map/01.A-Quads.png"
                //    className="muscle-image-quadA"
                //    alt="Quads"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/01.B-Quads.png"
                //    className="muscle-image-quadB"
                //    alt="Quads"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/04.-Obliques.png"
                //    className="muscle-image-abs"
                //    alt="Abs"
                //    onClick="abc(this.className)"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/05.A-Biceps.png"
                //    className="muscle-image-bicepsA"
                //    alt="Biceps"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/05.B-Biceps.png"
                //    className="muscle-image-bicepsB"
                //    alt="Biceps"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/06.-Pecs.png"
                //    className="muscle-image-pecs"
                //    alt="Pecs"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/07.A-Deltoids.png"
                //    className="muscle-image-deltoidA"
                //    alt="Deltoids"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/07.B-Deltoids.png"
                //    className="muscle-image-deltoidB"
                //    alt="Deltoids"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/13.A-Calves.png"
                //    className="muscle-image-calvesA"
                //    alt="Calves"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/13.B-Calves.png"
                //    className="muscle-image-calvesB"
                //    alt="Calves"
                //  />
                //  {/* Back side */}
                //  <img
                //    src="exercise-images/site-images/muscle-map/07.C-Deltoids.png"
                //    className="muscle-image-deltoidC"
                //    alt="Deltoids"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/07.D-Deltoids.png"
                //    className="muscle-image-deltoidD"
                //    alt="Deltoids"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/08.C-Traps.png"
                //    className="muscle-image-trapsC"
                //    alt="Back"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/10.A-Lats.png"
                //    className="muscle-image-latsA"
                //    alt="Back"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/10.B-Lats.png"
                //    className="muscle-image-latsB"
                //    alt="Back"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/15.-Lower-back.png"
                //    className="muscle-image-lower-back"
                //    alt="Back"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/09.A-Triceps.png"
                //    className="muscle-image-tricepsA"
                //    alt="Triceps"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/09.B-Triceps.png"
                //    className="muscle-image-tricepsB"
                //    alt="Triceps"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/11.-Glutes.png"
                //    className="muscle-image-glutes"
                //    alt="Glutes"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/12.A-Hamstrings.png"
                //    className="muscle-image-hamstringsA"
                //    alt="Hamstrings"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/12.B-Hamstrings.png"
                //    className="muscle-image-hamstringsB"
                //    alt="Hamstrings"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/13.C-Calves.png"
                //    className="muscle-image-calvesC"
                //    alt="Calves"
                //  />
                //  <img
                //    src="exercise-images/site-images/muscle-map/13.D-Calves.png"
                //    className="muscle-image-calvesD"
                //    alt="Calves"
                //  />
              //  </div>
            //  );
           }
}

export default MuscleMap;