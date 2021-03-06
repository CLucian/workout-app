import React from 'react';


class LogsTabEdit extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputSets: null,
			inputReps: null,
			dataIsSent: false
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const editedData = {
			sets: this.state.inputSets,
			reps: this.state.inputReps,
			date: this.props.date,
			exerciseName: this.props.exerciseName,
			id: this.props.currentId
		}
		this.props.addExerciseToLogsArray(editedData);
		this.props.toggleEdit();
		this.setState({ dataIsSent: true })
		
	}


	render() {
		return(
			<>
				<form onSubmit={this.handleSubmit}>
					<ul className="logs-master-list">
						<li className="logs-list-info">
							Sets:
							<input className="logs-edit-input1" onChange={this.handleChange} value={this.state.inputSets} name="inputSets" type="number" min="0" placeholder={this.props.sets} autocomplete="off" />
						</li>
						<li className="logs-list-info">
							Reps:
							<input className="logs-edit-input2" onChange={this.handleChange} value={this.state.inputReps} name="inputReps" type="number" min="0" placeholder={this.props.reps} autocomplete="off" />
						</li>
					</ul>
					<input type="submit" value="Submit" className="logs-edit-submit-btn" />
				</form>
			</>
		)
	}
}


export default LogsTabEdit