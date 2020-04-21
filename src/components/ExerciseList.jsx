import React from 'react';

import ExerciseImage from "./ExerciseImage";
import Modal from "./Modal";

function ExerciseList(props) {


    const {
      selectExercise,
      exerciseTitle,
      exerciseImage1,
      exerciseImage2,
      exercisePrimer,
      exerciseType,
      exerciseEquipment,
      steps
      // isModalActive,
      // showModal
    } = props;


    return (
      <>
        <div class="flip">
          <div class="front">
            <div
              className="exerciseList"
              onClick={() => {
                selectExercise({
                  exerciseTitle: exerciseTitle,
                  steps: steps
                });
              }}
            >
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
                    <h2 className="mini-info-title">
                      Movement type:{" "}
                      <h2 className="mini-info">
                      {exerciseType
                        ? exerciseType.charAt(0).toUpperCase() +
                          exerciseType.substring(1)
                        : null}
                        </h2>
                    </h2>
                    <br />
                    <h2 className="mini-info-title">
                      Equipment:{" "}
                      <h2 className="mini-info">
                        {exerciseEquipment
                          ? exerciseEquipment
                              .join(", ")
                              .charAt(0)
                              .toUpperCase() +
                            exerciseEquipment.join(", ").substring(1)
                          : null}
                      </h2>
                    </h2>
                  </div>
                  {/* <p className="more-info">More info</p> */}
                </div>
              </div>
            </div>
          </div>

          <div class="back">
            <div className="exerciseList">
              <div className="exerciseTitle">
                <h1 className="exercise-title">{exerciseTitle}</h1>
              </div>
              <div className="exerciseImageAndInfo">
                <ExerciseImage
                  exerciseImage1={exerciseImage1}
                  exerciseImage2={exerciseImage2}
                />
                <div className="exercise-info">
                  <h1 className="steps-list-title">Steps</h1>
                  <ol className="steps-list">
                    {steps.map(step => {
                      return <li className="step-list-item">{step}</li>;
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      // {/*

      //       // <div className="flip-card">
      //       //   <div className="flip-card-inner">
      //       //     <div className="flip-card-front">
      //       //       <div
      //       //         className="exerciseList"
      //       //         onClick={() => {
      //       //           selectExercise({
      //       //             exerciseTitle: exerciseTitle,
      //       //             steps: steps
      //       //           });
      //       //         }}
      //       //       >
      //       //         <div className="exerciseTitle">
      //       //           <h1 className="exercise-title">{exerciseTitle}</h1>
      //       //         </div>
      //       //         <div className="exerciseImageAndInfo">
      //       //           <ExerciseImage
      //       //             exerciseImage1={exerciseImage1}
      //       //             exerciseImage2={exerciseImage2}
      //       //           />
      //       //           <div className="exercise-info">
      //       //             <h1 className="general-info">{exercisePrimer}</h1>
      //       //             <div className="mini-info-container">
      //       //               <h2 className="mini-info">
      //       //                 Movement type:{" "}
      //       //                 {exerciseType
      //       //                   ? exerciseType.charAt(0).toUpperCase() +
      //       //                     exerciseType.substring(1)
      //       //                   : null}
      //       //               </h2>
      //       //               <br />
      //       //               <h2 className="mini-info">
      //       //                 Equipment:{" "}
      //       //                 {exerciseEquipment
      //       //                   ? exerciseEquipment
      //       //                       .join(", ")
      //       //                       .charAt(0)
      //       //                       .toUpperCase() +
      //       //                     exerciseEquipment.join(", ").substring(1)
      //       //                   : null}
      //       //               </h2>
      //       //             </div>
      //       //             {/* <p className="more-info">More info</p> */}
      //       //           </div>
      //       //         </div>
      //       //       </div>
      //       //     </div>
      //       //     {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      //       //     <div className="flip-card-back">
      //       //       <div className="exerciseList">
      //       //         <div className="exerciseTitle">
      //       //           <h1 className="exercise-title">{exerciseTitle}</h1>
      //       //         </div>
      //       //         <div className="exerciseImageAndInfo">
      //       //           <ExerciseImage
      //       //             exerciseImage1={exerciseImage1}
      //       //             exerciseImage2={exerciseImage2}
      //       //           />
      //       //           <div className="exercise-info">
      //       //             <h1 className="general-info">Steps</h1>
      //       //               <ol className="steps-list">
      //       //                 {steps.map(step => {
      //       //                   return <li className="step-list-item">{step}</li>;
      //       //                 })}
      //       //               </ol>
      //       //           </div>
      //       //         </div>
      //       //       </div>
      //       //     </div>
      //       //   </div>
      //       // </div> */}
    );

}



export default ExerciseList;