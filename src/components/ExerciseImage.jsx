import React from 'react';

class ExerciseImage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHover: false
		}

		this.changeImage = this.changeImage.bind(this);
	}


	changeImage() {
		this.setState(prevState => {
			return {
				isHover: !prevState.isHover
			}
		})
	}

	render() {

	const { exerciseImage1, exerciseImage2 } = this.props;

		return(
			<div className="image-container" onMouseOver={this.changeImage} onMouseOut={this.changeImage}>
				<img className="exercise-image" src={ this.state.isHover ? exerciseImage2 : exerciseImage1 } alt='exercise-pic' />
			</div>
		)
	}
}

export default ExerciseImage;