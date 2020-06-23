import React from 'react';

function LogsTabEditView(props) {
	return (
    <>
      <li className="logs-list-info">Sets: {props.sets}</li>
      <li className="logs-list-info">Reps: {props.reps}</li>
    </>
  );
}

export default LogsTabEditView;