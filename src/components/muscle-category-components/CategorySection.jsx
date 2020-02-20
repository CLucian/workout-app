import React from "react";


function SectionContent({ category }) {
  const { sectionContent } = category;
  const { info, title } = sectionContent;
  return (
    <div className="main-container">
      <ul className="tab-bar">
        <li className="tab">Overview</li>
        <li className="tab">Exercises</li>
      </ul>
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
          <div className="info">{info}</div>
        </div>
      </div>
    </div>
  );
}

export default SectionContent;
