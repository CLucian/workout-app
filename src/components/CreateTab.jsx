import React from 'react';



class CreateTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputGroup: "abdominals",
      inputDesc: "Please describe this movement.",
      img: [],
      inputEquipment: [],
      inputType: [],
      steps: []
	};
	
	this.handleFormChange = this.handleFormChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFormChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
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
      steps: []
    };
	this.props.addArrayItem(formSubData)
  }

  render() {

	console.log(this.props.hello)


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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="createTab-label">Muscle Group</label>
            <select
              className="inputs"
              name="inputGroup"
              //   value={this.state.value}
              onChange={handleFormChange}
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
              //   value={this.state.value}
              onChange={handleFormChange}
              required
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        <h1>{this.state.inputName}</h1>
        <h1>{this.state.inputGroup}</h1>
        <h1>{this.state.inputDesc}</h1>
		<h1>{this.props.hello}</h1>
      </div>
    );
  }
}

export default CreateTab;
