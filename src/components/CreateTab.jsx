import React from 'react';




function initialState() {
  return {
    inputName: "",
    inputGroup: "abdominals",
    inputDesc: "",
    img: [],
    inputEquipment: [],
    inputType: [],
    steps: [],
    completeArray: [],
    id: Math.random()
  }
}


class CreateTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState();


    

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  

  handleFormChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleStepsChange(e, index) {
    this.state.steps[index] = e.target.value;
    this.setState({ steps: this.state.steps });
  }

  addStep() {
    this.setState({
      steps: [...this.state.steps, ""]
    });
  }

  handleRemove(index) {
    this.state.steps.splice(index, 1);
    this.setState({ steps: this.state.steps });
  }



  handleSubmit(e) {
    e.preventDefault();
    const formSubData = {
      title: this.state.inputName,
      primary: this.state.inputGroup,
      primer: this.state.inputDesc,
      equipment: [this.state.inputEquipment],
      type: this.state.inputType,
      img: [
        "_images/web/dumbbell-shoulder-press-1.png",
        "_images/web/dumbbell-shoulder-press-2.png"
      ],
      steps: this.state.steps,
      userCreated: true,
      id: this.state.id
    };
    this.setState(initialState())
    this.props.addArrayItem(formSubData);
    
  }



  render() {
    const { handleFormChange, handleSubmit } = this;
    return (
      <div>
        <form className="create-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="createTab-label">Exercise name: </label>
              <div className="input-div">
                <input
                  className="inputs"
                  type="text"
                  name="inputName"
                  placeholder="E.g. Push Ups"
                  onChange={handleFormChange}
                  value={this.state.inputName}
                  maxLength="20"
                  required
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="createTab-label">Movement Type:</label>
              <div className="input-div">
                <input
                  className="inputs"
                  type="text"
                  name="inputType"
                  placeholder="E.g. Isolation/Compound"
                  onChange={handleFormChange}
                  value={this.state.inputType}
                  maxLength="20"
                  required
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="createTab-label">Equipment:</label>
              <div className="input-div">
                <input
                  className="inputs"
                  type="text"
                  name="inputEquipment"
                  placeholder="E.g. Barbell/Bench etc..."
                  onChange={handleFormChange}
                  value={this.state.inputEquipment}
                  maxLength="40"
                  required
                  autocomplete="off"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="createTab-label">Steps: </label>
              <div className="steps-input-div">
                {this.state.steps.map((step, index) => {
                  return (
                    <div className="steps-div" key={index}>
                      <input
                        className="step-inputs"
                        type="text"
                        name="steps"
                        onChange={(e) => this.handleStepsChange(e, index)}
                        maxLength="50"
                        value={step}
                        autocomplete="off"
                      />
                      <button
                        type="button"
                        className="step-remove-button"
                        onClick={() => this.handleRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
              <button
                type="button"
                onClick={(e) => this.addStep(e)}
                className="step-button"
              >
                Add Step
              </button>
            </div>
            <div className="form-group">
              <label className="createTab-label">Muscle Group</label>
              <select
                className="inputs"
                name="inputGroup"
                onChange={handleFormChange}
                value={this.state.inputGroup}
                required
              >
                <option name="abdominals" value="abdominals">
                  Abdominals
                </option>
                <option name="back" value="back">
                  Back
                </option>
                <option name="biceps" value="biceps">
                  Biceps
                </option>
                <option name="calves" value="calves">
                  Calves
                </option>
                <option name="chest" value="chest">
                  Chest
                </option>
                <option name="shoulders" value="shoulders">
                  Shoulders
                </option>
                <option name="glutes" value="glutes">
                  Glutes
                </option>
                <option name="hamstrings" value="hamstrings">
                  Hamstrings
                </option>
                <option name="quadriceps" value="quadriceps">
                  Quadriceps
                </option>
                <option name="triceps" value="triceps">
                  Triceps
                </option>
              </select>
            </div>
            <div className="form-group">
              <label className="createTab-label">Description: </label>
              <textarea
                className="inputs"
                name="inputDesc"
                rows="10"
                cols="30"
                onChange={handleFormChange}
                placeholder="Briefly, please describe this movement."
                value={this.state.inputDesc}
                maxLength="100"
                autocomplete="off"
                required
              />
            </div>
            <div>
              <input className="createForm-submit-btn" type="submit" value="Submit" />
            </div>
          </form>
      </div>
    );
  }
}

export default CreateTab;
