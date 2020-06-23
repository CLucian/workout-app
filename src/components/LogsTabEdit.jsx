import React from 'react';


import LogsTabEditView from './LogsTabEditView';

class LogsTabEdit extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputSets: null,
			inputReps: null,
			dataIsSent: false
		}
	}

	componentDidMount() {
		
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
				{/* {	!this.state.dataIsSent ? */}
					<form onSubmit={this.handleSubmit}>
						<li className="logs-list-info">
							Sets: 
							<input onChange={this.handleChange} value={this.state.inputSets} name="inputSets" type="number" min="0" placeholder={this.props.sets} />
						</li>
						<li className="logs-list-info">
							Reps:
							<input onChange={this.handleChange} value={this.state.inputReps} name="inputReps" type="number" min="0" placeholder={this.props.reps} />
						</li>
						<input type="submit" value="Submit" />
					</form>
					{/* : <LogsTabEditView sets={this.state.inputSets} reps={this.state.inputReps} />
				} */}
			</>
		)
	}
}


export default LogsTabEdit