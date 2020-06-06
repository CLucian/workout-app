import React from 'react';

class ExerciseButton extends React.Component {
	constructor() {
		super();
		this.state = {
			isButtonActive: false
		}

	}

	onClick = () => {
		this.setState({
			isButtonActive: !this.state.isButtonActive
		})
	}


	render() {
		return(
			<div>
				<button className="exercise-button" onClick={this.onClick()}>
					Click for Info
				</button>
			</div>
		)
	}
}

export default ExerciseButton;