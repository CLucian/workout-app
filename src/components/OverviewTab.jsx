import React from 'react';

function OverviewTab(props) {

	const { title, info, muscleFunction } = props;

	return(
		<div className="main-container">
			<div className="category-title">{title}</div>
			<div className="img-info-container">
				<div className="img-container">
					<img
						className="overview-img"
						src="exercise-images/muscle-category-images/abs.png"
						alt="abs"
					/>
				</div>
				<div className="info-container">
					<div className="info">
						{info}
					</div>
					<h1 className="muscleFunction-title">Muscle Function</h1>
					<div className="muscleFunction">{muscleFunction}</div>
				</div>
			</div>
		</div>
	)
}

export default OverviewTab;