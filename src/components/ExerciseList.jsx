import React from 'react';

import ExerciseImage from "./ExerciseImage";
import Modal from "./Modal";

function ExerciseList(props) {


    const {
      exerciseTitle,
      exerciseImage1,
      exerciseImage2,
      exercisePrimer,
      exerciseType,
      exerciseEquipment,
      steps,
      isModalActive,
      showModal
    } = props;


    return (
      <div className="exerciseList" onClick={showModal}>
        <Modal exerciseTitle={exerciseTitle} steps={steps} showModal={showModal} isModalActive={isModalActive} />
        <div className="exerciseTitle">
          <h1 className="exercise-title">{exerciseTitle}</h1>
        </div>
        <div className="exerciseImageAndInfo">
          <ExerciseImage
            exerciseImage1={exerciseImage1}
            exerciseImage2={exerciseImage2}
          />
          <div className="exercise-info">
            <h1 className="general-info">{exercisePrimer}</h1>
            <div className="mini-info-container">
              <h2 className="mini-info">
                Movement type:{" "}
                {exerciseType
                  ? exerciseType.charAt(0).toUpperCase() +
                    exerciseType.substring(1)
                  : null}
              </h2>
              <br />
              <h2 className="mini-info">
                Equipment:{" "}
                {exerciseEquipment
                  ? exerciseEquipment
                      .join(", ")
                      .charAt(0)
                      .toUpperCase() + exerciseEquipment.join(", ").substring(1)
                  : null}
              </h2>
            </div>
            <p className="more-info">More info</p>
          </div>
        </div>
      </div>
    );

}



export default ExerciseList;