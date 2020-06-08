import React from 'react';

class LogItem extends React.Component {
	constructor() {
		super()
		this.state ={}
	}

	render() {
		return(
			<div>
				{this.props.exercise}
			</div>
		)
	}
}

export default LogItem;