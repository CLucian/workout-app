const frontStyles1 = {
  display: "block",
  "transition-timing-function": "cubic-bezier(.175, .885, .32, 1.275)",
  "transition-duration": ".5s",
  "transition-property": "transform, opacity",
  border: "1px solid black",
  color: "white",
  width: "100%",
  "background-size": "cover!important",
  "background-position": "center!important",
  height: "45rem",
  background: "#313131",
  "border-radius": "10px",
  transform: "rotateY(0deg)",
};

const backStyles1 = {
  display: "block",
  "transition-timing-function": "cubic-bezier(.175, .885, .32, 1.275)",
  "transition-duration": ".5s",
  "transition-property": "transform, opacity",
  border: "1px solid black",
  color: "white",
  width: "100%",
  "background-size": "cover!important",
  "background-position": "center!important",
  height: "45rem",
  background: "#313131",
  "border-radius": "10px",
  transform: "rotateY(-180deg)",
  position: "absolute",
  opacity: 0,
  top: "0px",
  left: "0px",
};

const frontStyles2 = {
  display: "block",
  "transition-timing-function": "cubic-bezier(.175, .885, .32, 1.275)",
  "transition-duration": ".5s",
  "transition-property": "transform, opacity",
  transform: "rotateY(180deg)",
  border: "1px solid black",
  color: "white",
  width: "100%",
  "background-size": "cover!important",
  "background-position": "center!important",
  height: "45rem",
  background: "#313131",
  "border-radius": "10px",
};

const backStyles2 = {
  display: "block",
  "transition-timing-function": "cubic-bezier(.175, .885, .32, 1.275)",
  "transition-duration": ".5s",
  "transition-property": "transform, opacity",
  // transform: "rotateX(0deg)",
  border: "1px solid black",
  color: "white",
  width: "100%",
  "background-size": "cover!important",
  "background-position": "center!important",
  height: "45rem",
  background: "#313131",
  "border-radius": "10px",
  position: "absolute",
  opacity: 0,
  top: "0px",
  left: "0px",
  transform: "rotateY(0deg)",
};

const backStyles = {
  opacity: 1,
  transform: "rotateY(0deg)",
};




<form className="exercise-form-modal">
  <button
    className="exercise-add-button"
    id={index}
    type="button"
    value={workout.workoutId}
    onClick={(e) => this.toggleOn(e, workout, index)}
    // onClick={() => this.handleClick(workout, index)}
  >
    <span className="exercise-add-symbol">+</span>
  </button>
  <div className="exercise-modal-workout-title">{workout.workoutName}</div>
  <div className="volume-container">
    <div className="volume-input-group">
      <input className="volume-input" placeholder="Sets" />
    </div>
    <div className="volume-input-group">
      <input className="volume-input" placeholder="Reps" />
    </div>
  </div>
</form>;