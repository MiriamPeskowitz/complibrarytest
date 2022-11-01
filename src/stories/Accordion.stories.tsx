import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from "../components/Typography";
import Accordion from "../components/Accordion";

export default {
  title: "ComponentLibrary/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

// const Template: ComponentStory<typeof DescriptionList> = (args) => <DescriptionList {...args} />;

export const DefaultAccordion = () => (
  <Accordion title="What is your return policy?" id="sect1">
    <Typography noTopMargin>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Typography>
  </Accordion>
);

export const AllVariantsAccordion = () => (
  <div>
    <Accordion title="Accordion Title Text One" id="sect1" variant="h2" isOpen>
      <Typography noTopMargin>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Accordion>
    <Accordion title="Accordion Title Text Two" id="sect2">
      <Typography noTopMargin>
        Etiam imperdiet imperdiet orci. Etiam feugiat lorem non metus. Aliquam
        eu nunc. Praesent turpis. Sed mollis, eros et ultrices tempus, mauris
        ipsum aliquam libero, non adipiscing dolor urna a orci.
      </Typography>
    </Accordion>
    <Accordion
      title="Much Much Longer Accordion Title Text Three"
      id="sect3"
      variant="h4"
    >
      <Typography noTopMargin>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna.
      </Typography>
    </Accordion>
    <Accordion title="Accordion Title Text Four" id="sect4" variant="h5">
      <Typography noTopMargin>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Accordion>
  </div>
);
