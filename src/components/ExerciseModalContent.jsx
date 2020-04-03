import React from "react";

export default function ExerciseModalContent(props) {
  const { data } = props

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1 className="modal-title">{data.exerciseTitle}</h1>
      <br></br>
      <ol className="steps-list">
        {data.steps.map(step => {
          return (
            <li className="step-list-item">
              {step}
            </li>
          );
        })}
      </ol>
      <div className="modal-button-div">
        <button className="modal-button" onClick={props.closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}
