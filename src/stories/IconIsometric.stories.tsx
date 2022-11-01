
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { getUseStyles } from "../shared/helpers";

import styles from "../components/IconIsometric/IconIsometric.stories.jss.js";
import IconIsometric from "../components/IconIsometric/IconIsometric";

const useStyles = getUseStyles(styles);
import IconIsometricNames from "../components/IconIsometric/IconIsometricNames";

export default {
  title: "ComponentLibrary/IconIsometric",
  component: IconIsometric ,
} as ComponentMeta<typeof IconIsometric>;

// const Template: ComponentStory<typeof IconIsometric> = (args) => <IconIsometric  {...args} />;


const benefitsIcons = [
  "childcare",
  "education",
  "food",
  "healthcare",
  "heating",
  "money",
  "prescription",
  "shelter"
];

const BDTIcons = ["data-tech", "direct-service", "partnership", "policy"];

const processAndJourneyIcons = [
  "assess-eligibility",
  "barrier",
  "calendar",
  "call",
  "coins",
  "college",
  "connection",
  "cumbersome-applications",
  "debit",
  "evaluate-outcomes",
  "household",
  "identify",
  "impact",
  "lack-of-knowledge",
  "legal",
  "mobility",
  "no-deductible",
  "process",
  "results",
  "simplify",
  "stigma",
  "submit",
  "targeted-outreach",
  "tech-assistance",
  "tracking",
  "user"
];

const dataDigitalServiceIcons = [
  "chart",
  "data",
  "data-driven-outreach",
  "data-matching",
  "testing",
  "website"
];

const communicationAndDocumentsIcons = [
  "contract",
  "documents",
  "draft",
  "letter",
  "mail",
  "open-book",
  "texting"
];

const placesIcons = ["cbo", "government", "hospital", "school", "worship"];

export const Benefits = () => (
  <>
    {benefitsIcons.map(name => (
      <IconIsometric iconName={IconIsometricNames[name]} key={name} />
    ))}
  </>
);

export const BDT = () => (
  <>
    {BDTIcons.map(name => (
      <IconIsometric iconName={IconIsometricNames[name]} key={name} />
    ))}
  </>
);

export const ProcessAndJourney = () => (
  <>
    {processAndJourneyIcons.map(name => (
      <IconIsometric iconName={IconIsometricNames[name]} key={name} />
    ))}
  </>
);

export const DataAndDigitalService = () => (
  <>
    {dataDigitalServiceIcons.map(name => (
      <IconIsometric iconName={IconIsometricNames[name]} key={name} />
    ))}
  </>
);

export const CommunicationAndDocuments = () => (
  <>
    {communicationAndDocumentsIcons.map(name => (
      <IconIsometric iconName={IconIsometricNames[name]} key={name} />
    ))}
  </>
);

const Places = () => (
  <>
    {placesIcons.map(name => (
      <IconIsometric iconName={IconIsometricNames[name]} key={name} />
    ))}
  </>
);

export const ClassOverrideSize = () => {
  const classes = useStyles();

  return (
    <>
      <IconIsometric
        iconName={IconIsometricNames["data-tech"]}
        classOverrides={{ size: classes.xsmall }}
      />
      <IconIsometric
        iconName={IconIsometricNames["data-tech"]}
        classOverrides={{ size: classes.small }}
      />
      <IconIsometric
        iconName={IconIsometricNames["data-tech"]}
        classOverrides={{ size: classes.medium }}
      />
      <IconIsometric
        iconName={IconIsometricNames["data-tech"]}
        classOverrides={{ size: classes.large }}
      />
      <IconIsometric
        iconName={IconIsometricNames["data-tech"]}
        classOverrides={{ size: classes.xlarge }}
      />
    </>
  );
};

// const iconIsometricStories = {
//   Benefits,
//   BDT,
//   ProcessAndJourney,
//   DataAndDigitalService,
//   CommunicationAndDocuments,
//   Places,
//   ClassOverrideSize
// };


