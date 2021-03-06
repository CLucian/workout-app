import React from 'react';

function OverviewTab(props) {

	const { title, info, muscleFunction, src } = props;

	return (
    <div className="main-container">
      <div className="category-title">{title}</div>
      <div className="img-info-container">
        <div className="inner-background">
          <div className="img-container">
            <img className="overview-img" src={src} alt="overviewTab" />
          </div>
          <div className="info-container">
            <div className="info-group">
              <h1 className="muscleFunction-title">General Info</h1>
              <div className="info">{info}</div>
            </div>
            <div className="info-group">
              <h1 className="muscleFunction-title">Muscle Function</h1>
              <div className="muscleFunction">{muscleFunction}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;