import * as React from "react";

import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Grid from "../components/Grid";

import Progression from "../components/Progression";

const stepsArray = [
  "Account information",
  "Shipping details",
  "Payment details",
  "Complete registration",
  "Registration complete",
  "Finished"
];

const Primary = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const reset = () => {
    setCurrentStep(0);
  };

  return (
    <Grid spacing={3} direction="column">
      <Progression
        className="mb-4"
        steps={stepsArray}
        currentStep={currentStep}
      />
      <ButtonGroup inline>
        <Button className="mb-4" onClick={nextStep}>
          Next
        </Button>
        <Button onClick={reset} status="danger">
          Reset
        </Button>
      </ButtonGroup>
    </Grid>
  );
};

const progressionStories = {
  Primary
};

export default progressionStories;
