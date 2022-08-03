import React from "react";
import "./index.css";

import { useState } from "react";
import Signup from "./components/Signup";

function App() {
  // const [state, setState] = useState({
  //   step: 1,
  //   fullName: "",
  //   displayName: "",
  //   workSpaceName: "",
  //   workSpaceURL: "",
  //   planOfUse: "",
  // });

  const [step, setStep] = useState(1);

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // const handleChange = (input) => (e) => {
  //   setState({ [input]: e.target.value });
  // };

  return (
    <div className="text-xl font-bold bg-red-500">
      <Signup step={step} prevStep={prevStep} nextStep={nextStep} />
    </div>
  );
}

export default App;
