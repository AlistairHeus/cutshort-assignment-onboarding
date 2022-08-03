import React from "react";

const UsagePlanDetails = ({ nextStep, prevStep, step }) => {
  return (
    <div>
      <h1>Useju Purran Detairusu</h1>
      <button onClick={nextStep}>Next</button>
      <div>{step}</div>
    </div>
  );
};

export default UsagePlanDetails;
