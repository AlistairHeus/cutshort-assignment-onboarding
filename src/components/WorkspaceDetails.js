import React from "react";

const WorkspaceDetails = ({ step, nextStep, prevStep }) => {
  return (
    <div>
      <h1>Workuspacu Detairusu</h1>
      <button onClick={nextStep}>Next</button>
      <div>{step}</div>
    </div>
  );
};

export default WorkspaceDetails;
