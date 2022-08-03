import React from "react";
import Success from "./Success";
import UsagePlanDetails from "./UsagePlanDetails";
import UserDetails from "./UserDetails";
import WorkspaceDetails from "./WorkspaceDetails";

const Signup = ({ step, nextStep, prevStep }) => {
  switch (step) {
    case 1:
      return <UserDetails nextStep={nextStep} step={step} />;
    case 2:
      return (
        <WorkspaceDetails nextStep={nextStep} prevStep={prevStep} step={step} />
      );
    case 3:
      return (
        <UsagePlanDetails nextStep={nextStep} prevStep={prevStep} step={step} />
      );
    case 4:
      return <Success step={step} />;
    default:
  }
};

export default Signup;
