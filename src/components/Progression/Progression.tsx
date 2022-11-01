import * as React from "react";
import Typography from "../Typography";
import IconCheckCircle from "../../shared/icons/icon-check-circle.svg";
import { getUseStyles } from "../../shared/helpers";
import styles from "./Progression.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Progression");
export interface Props {
  className?: string;
  steps?: string[];
  currentStep?: number;
}

const Progression: React.FC<Props> = props => {
  const { className, steps, currentStep = 0 } = props;
  const classes = useStyles();

  const createSteps = steps.map((step, i) => ({
    description: step,
    completed: i < currentStep, // Steps before current are completed
    active: i === currentStep // The current step is a the active step
  }));

  return (
    <div
      className={classNames({
        [classes.wrapper]: true,
        [className]: className
      })}
    >
      {createSteps.map(({ completed, active, description }, i) => (
        <div className={classes.stepWrapper} key={i}>
          <div
            className={classNames({
              [classes.stepNumber]: true,
              [classes.active]: active,
              [classes.inactive]: !active,
              [classes.completed]: completed
            })}
          >
            {completed && <IconCheckCircle is="svg" />}
          </div>
          <div
            className={classNames({
              [classes.stepDescription]: true,
              [classes.active]: active,
              [classes.inactive]: !active,
              [classes.completed]: completed
            })}
          >
            <Typography
              variant="p"
              noTopMargin
              classOverrides={{
                normal: classNames({
                  [classes.active]: active,
                  [classes.inactive]: !active,
                  [classes.completed]: completed
                })
              }}
            >
              {description}
            </Typography>
          </div>
          {i + 1 !== createSteps.length && (
            <div
              className={classNames({
                [classes.dividerLine]: true,
                [classes.active]: active,
                [classes.inactive]: !active,
                [classes.completed]: completed
              })}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Progression;
