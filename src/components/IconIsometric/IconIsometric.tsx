import React from "react";

import AssessEligibility from "../..shared/icons/isometric-icons/isometric-assess-eligibility.svg";
import Barrier from "../..shared/icons/isometric-icons/isometric-barrier.svg";
import Calendar from "../..shared/icons/isometric-icons/isometric-calendar.svg";
import Call from "../..shared/icons/isometric-icons/isometric-call.svg";
import CBO from "../..shared/icons/isometric-icons/isometric-cbo.svg";
import Chart from "../..shared/icons/isometric-icons/isometric-chart.svg";
import Childcare from "../..shared/icons/isometric-icons/isometric-childcare.svg";
import Coins from "../..shared/icons/isometric-icons/isometric-coins.svg";
import College from "../..shared/icons/isometric-icons/isometric-college.svg";
import Connection from "../..shared/icons/isometric-icons/isometric-connection.svg";
import Contract from "../..shared/icons/isometric-icons/isometric-contract.svg";
import CumbersomeApplications from "../../icons/shared/icons/isometric-icons/isometric-cumbersome-applications.svg";
import DataDrivenOutreach from "../../shared/icons/isometric-icons/isometric-data-driven-outreach.svg";
import DataMatching from "../../shared/icons/isometric-icons/isometric-data-matching.svg";
import DataTech from "../../shared/icons/isometric-icons/isometric-data-tech.svg";
import Data from "../../shared/icons/isometric-icons/isometric-data.svg";
import Debit from "../../shared/icons/isometric-icons/isometric-debit.svg";
import DirectService from "../../shared/icons/isometric-icons/isometric-direct-service.svg";
import Documents from "../../shared/icons/isometric-icons/isometric-documents.svg";
import Draft from "../../shared/icons/isometric-icons/isometric-draft.svg";
import Education from "../../shared/icons/isometric-icons/isometric-education.svg";
import EvaluateOutcomes from "../../shared/icons/isometric-icons/isometric-evaluate-outcomes.svg";
import Food from "../../shared/icons/isometric-icons/isometric-food.svg";
import Government from "../../shared/icons/isometric-icons/isometric-government.svg";
import Healthcare from "../../shared/icons/isometric-icons/isometric-healthcare.svg";
import Heating from "../../shared/icons/isometric-icons/isometric-heating.svg";
import Hospital from "../../shared/icons/isometric-icons/isometric-hospital.svg";
import Household from "../../shared/icons/isometric-icons/isometric-household.svg";
import Identify from "../../shared/icons/isometric-icons/isometric-identify.svg";
import Impact from "../../shared/icons/isometric-icons/isometric-impact.svg";
import LackOfKnowledge from "../../shared/icons/isometric-icons/isometric-lack-of-knowledge.svg";
import Legal from "../../shared/icons/isometric-icons/isometric-legal.svg";
import Letter from "../../shared/icons/isometric-icons/isometric-letter.svg";
import Mail from "../../shared/icons/isometric-icons/isometric-mail.svg";
import Mobility from "../../shared/icons/isometric-icons/isometric-mobility.svg";
import Money from "../../shared/icons/isometric-icons/isometric-money.svg";
import NoDeductible from "../../shared/icons/isometric-icons/isometric-no-deductible.svg";
import OpenBook from "../../shared/icons/isometric-icons/isometric-open-book.svg";
import Partnership from "../../shared/icons/isometric-icons/isometric-partnership.svg";
import Policy from "../../shared/icons/isometric-icons/isometric-policy.svg";
import Prescription from "../../shared/icons/isometric-icons/isometric-prescription.svg";
import Process from "../../shared/icons/isometric-icons/isometric-process.svg";
import Results from "../../shared/icons/isometric-icons/isometric-results.svg";
import School from "../../shared/icons/isometric-icons/isometric-school.svg";
import Shelter from "../../shared/icons/isometric-icons/isometric-shelter.svg";
import Simplify from "../../shared/icons/isometric-icons/isometric-simplify.svg";
import Stigma from "../../shared/icons/isometric-icons/isometric-stigma.svg";
import Submit from "../../shared/icons/isometric-icons/isometric-submit.svg";
import TargetedOutreach from "../../shared/icons/isometric-icons/isometric-targeted-outreach.svg";
import TechAssistance from "../../shared/icons/isometric-icons/isometric-tech-assistance.svg";
import Testing from "../../shared/icons/isometric-icons/isometric-testing.svg";
import Texting from "../../shared/icons/isometric-icons/isometric-texting.svg";
import Tracking from "../../shared/icons/isometric-icons/isometric-tracking.svg";
import User from "../../shared/icons/isometric-icons/isometric-user.svg";
import Website from "../../shared/icons/isometric-icons/isometric-website.svg";
import Worship from "../../shared/icons/isometric-icons/isometric-worship.svg";

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
