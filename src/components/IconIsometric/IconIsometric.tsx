import React from "react";

import AssessEligibility from "../../shared/isometric-icons/isometric-assess-eligibility.svg";
import Barrier from "../../shared/isometric-icons/isometric-barrier.svg";
import Calendar from "../../shared/isometric-icons/isometric-calendar.svg";
import Call from "../../shared/isometric-icons/isometric-call.svg";
import CBO from "../../shared/isometric-icons/isometric-cbo.svg";
import Chart from "../../shared/isometric-icons/isometric-chart.svg";
import Childcare from "../../shared/isometric-icons/isometric-childcare.svg";
import Coins from "../../shared/isometric-icons/isometric-coins.svg";
import College from "../../shared/isometric-icons/isometric-college.svg";
import Connection from "../../shared/isometric-icons/isometric-connection.svg";
import Contract from "../../shared/isometric-icons/isometric-contract.svg";
import CumbersomeApplications from "../../shared/isometric-icons/isometric-cumbersome-applications.svg";
import DataDrivenOutreach from "../../shared/isometric-icons/isometric-data-driven-outreach.svg";
import DataMatching from "../../shared/isometric-icons/isometric-data-matching.svg";
import DataTech from "../../shared/isometric-icons/isometric-data-tech.svg";
import Data from "../../shared/isometric-icons/isometric-data.svg";
import Debit from "../../shared/isometric-icons/isometric-debit.svg";
import DirectService from "../../shared/isometric-icons/isometric-direct-service.svg";
import Documents from "../../shared/isometric-icons/isometric-documents.svg";
import Draft from "../../shared/isometric-icons/isometric-draft.svg";
import Education from "../../shared/isometric-icons/isometric-education.svg";
import EvaluateOutcomes from "../../shared/isometric-icons/isometric-evaluate-outcomes.svg";
import Food from "../../shared/isometric-icons/isometric-food.svg";
import Government from "../../shared/isometric-icons/isometric-government.svg";
import Healthcare from "../../shared/isometric-icons/isometric-healthcare.svg";
import Heating from "../../shared/isometric-icons/isometric-heating.svg";
import Hospital from "../../shared/isometric-icons/isometric-hospital.svg";
import Household from "../../shared/isometric-icons/isometric-household.svg";
import Identify from "../../shared/isometric-icons/isometric-identify.svg";
import Impact from "../../shared/isometric-icons/isometric-impact.svg";
import LackOfKnowledge from "../../shared/isometric-icons/isometric-lack-of-knowledge.svg";
import Legal from "../../shared/isometric-icons/isometric-legal.svg";
import Letter from "../../shared/isometric-icons/isometric-letter.svg";
import Mail from "../../shared/isometric-icons/isometric-mail.svg";
import Mobility from "../../shared/isometric-icons/isometric-mobility.svg";
import Money from "../../shared/isometric-icons/isometric-money.svg";
import NoDeductible from "../../shared/isometric-icons/isometric-no-deductible.svg";
import OpenBook from "../../shared/isometric-icons/isometric-open-book.svg";
import Partnership from "../../shared/isometric-icons/isometric-partnership.svg";
import Policy from "../../shared/isometric-icons/isometric-policy.svg";
import Prescription from "../../shared/isometric-icons/isometric-prescription.svg";
import Process from "../../shared/isometric-icons/isometric-process.svg";
import Results from "../../shared/isometric-icons/isometric-results.svg";
import School from "../../shared/isometric-icons/isometric-school.svg";
import Shelter from "../../shared/isometric-icons/isometric-shelter.svg";
import Simplify from "../../shared/isometric-icons/isometric-simplify.svg";
import Stigma from "../../shared/isometric-icons/isometric-stigma.svg";
import Submit from "../../shared/isometric-icons/isometric-submit.svg";
import TargetedOutreach from "../../shared/isometric-icons/isometric-targeted-outreach.svg";
import TechAssistance from "../../shared/isometric-icons/isometric-tech-assistance.svg";
import Testing from "../../shared/isometric-icons/isometric-testing.svg";
import Texting from "../../shared/isometric-icons/isometric-texting.svg";
import Tracking from "../../shared/isometric-icons/isometric-tracking.svg";
import User from "../../shared/isometric-icons/isometric-user.svg";
import Website from "../../shared/isometric-icons/isometric-website.svg";
import Worship from "../../shared/isometric-icons/isometric-worship.svg";

import { getOverrideNames, getUseStyles } from "../../shared/helpers";
import IconIsometricNames from "./IconIsometricNames";
import styles from "./IconIsometric.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-IconIsometric");

interface ClassOverrides {
  size?: string;
}
export interface Props {
  className?: string | number | symbol | any
  iconName: IconIsometricNames;
  classOverrides?: ClassOverrides;
}

const nameToIconMap = {
  "assess-eligibility": <AssessEligibility />,
  "barrier": <Barrier />,
  "calendar": <Calendar />,
  "call": <Call />,
  "cbo": <CBO />,
  "chart": <Chart />,
  "childcare": <Childcare />,
  "coins": <Coins />,
  "college": <College />,
  "connection": <Connection />,
  "contract": <Contract />,
  "cumbersome-applications": <CumbersomeApplications />,
  "data-driven-outreach": <DataDrivenOutreach />,
  "data-matching": <DataMatching />,
  "data-tech": <DataTech />,
  "data": <Data />,
  "debit": <Debit />,
  "direct-service": <DirectService />,
  "documents": <Documents />,
  "draft": <Draft />,
  "education": <Education />,
  "evaluate-outcomes": <EvaluateOutcomes />,
  "food": <Food />,
  "government": <Government />,
  "healthcare": <Healthcare />,
  "heating": <Heating />,
  "hospital": <Hospital />,
  "household": <Household />,
  "identify": <Identify />,
  "impact": <Impact />,
  "lack-of-knowledge": <LackOfKnowledge />,
  "legal": <Legal />,
  "letter": <Letter />,
  "mail": <Mail />,
  "mobility": <Mobility />,
  "money": <Money />,
  "no-deductible": <NoDeductible />,
  "open-book": <OpenBook />,
  "partnership": <Partnership />,
  "policy": <Policy />,
  "prescription": <Prescription />,
  "process": <Process />,
  "results": <Results />,
  "school": <School />,
  "shelter": <Shelter />,
  "simplify": <Simplify />,
  "stigma": <Stigma />,
  "submit": <Submit />,
  "targeted-outreach": <TargetedOutreach />,
  "tech-assistance": <TechAssistance />,
  "testing": <Testing />,
  "texting": <Texting />,
  "tracking": <Tracking />,
  "user": <User />,
  "website": <Website />,
  "worship": <Worship />
};

const IconIsometric: React.FC<Props> = props => {
  const { className, iconName, classOverrides = {} } = props;
  const classes = useStyles();
  const overrideNames = getOverrideNames(classOverrides);

  return (
    <span
      className={classNames({
        [classes.size]: !classOverrides.size,
        [className]: !!className,
        [overrideNames]: !!overrideNames
      })}
      data-testid={iconName}
    >
      {nameToIconMap[iconName]}
    </span>
  );
};

export default IconIsometric;
