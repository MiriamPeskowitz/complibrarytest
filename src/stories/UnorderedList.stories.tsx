import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import Link from "../components/Link";
import ListItem from "../components/ListItem";
import Typography from "../components/Typography";
import IconCheckCircle from "../shared/icons/icon-check-circle.svg";

import UnorderedList from "../components/UnorderedList";


export default {
  title: "ComponentLibrary/UnorderedList",
  component: UnorderedList,
} as ComponentMeta<typeof UnorderedList>;

// const Template: ComponentStory<typeof UnorderedList> = (args) => <UnorderedList  {...args} />;


export const PrimaryUnorderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <UnorderedList>
      <ListItem>
        <Typography noTopMargin component="span">
          One
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Two
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Three
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Four
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Five
        </Typography>
      </ListItem>
    </UnorderedList>
  </>
);

export const UnstyledUnorderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <UnorderedList variant="unstyled">
      <ListItem>
        <Typography noTopMargin component="span">
          One
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Two
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Three
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Four
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Five
        </Typography>
      </ListItem>
    </UnorderedList>
  </>
);

export const CustomUnorderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <UnorderedList variant="icon">
      <ListItem hasBulletIcon>
        <>
          <IconCheckCircle />
          <Typography noTopMargin component="span">
            One
          </Typography>
        </>
      </ListItem>
      <ListItem hasBulletIcon>
        <>
          <IconCheckCircle />
          <Typography noTopMargin component="span">
            Two
          </Typography>
        </>
      </ListItem>
      <ListItem hasBulletIcon>
        <>
          <IconCheckCircle />
          <Typography noTopMargin component="span">
            Three
          </Typography>
        </>
      </ListItem>
      <ListItem hasBulletIcon>
        <>
          <IconCheckCircle />
          <Typography noTopMargin component="span">
            Four
          </Typography>
        </>
      </ListItem>
      <ListItem hasBulletIcon>
        <>
          <IconCheckCircle />
          <Typography noTopMargin component="span">
            Five
          </Typography>
        </>
      </ListItem>
    </UnorderedList>
  </>
);

export const InlineUnorderedList = () => (
  <Grid direction="column" spacing={3}>
    <UnorderedList inline spacing={2} variant="unstyled">
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          One
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Two
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Three
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Four
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Five
        </Link>
      </ListItem>
    </UnorderedList>

    <UnorderedList inlineWithSeparators variant="unstyled" spacing={3}>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          One
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Two
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Three
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Four
        </Link>
      </ListItem>
      <ListItem>
        <Link url="https://www.google.com" isUnderlined={false}>
          Five
        </Link>
      </ListItem>
    </UnorderedList>

    <UnorderedList inline spacing={4} variant="icon">
      <ListItem hasBulletIcon>
        <IconCheckCircle />
        <Typography noTopMargin component="span">
          One
        </Typography>
      </ListItem>
      <ListItem hasBulletIcon>
        <IconCheckCircle />
        <Typography noTopMargin component="span">
          Two
        </Typography>
      </ListItem>
      <ListItem hasBulletIcon>
        <IconCheckCircle />
        <Typography noTopMargin component="span">
          Three
        </Typography>
      </ListItem>
      <ListItem hasBulletIcon>
        <IconCheckCircle />
        <Typography noTopMargin component="span">
          Four
        </Typography>
      </ListItem>
      <ListItem hasBulletIcon>
        <IconCheckCircle />
        <Typography noTopMargin component="span">
          Five
        </Typography>
      </ListItem>
    </UnorderedList>
  </Grid>
);

export const NoBottomMarginUnorderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <UnorderedList noBottomMargin>
      <ListItem>
        <Typography noTopMargin component="span">
          One
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Two
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Three
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Four
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Five
        </Typography>
      </ListItem>
    </UnorderedList>
  </>
);

export const NoTopMarginUnorderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <UnorderedList noTopMargin>
      <ListItem>
        <Typography noTopMargin component="span">
          One
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Two
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Three
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Four
        </Typography>
      </ListItem>
      <ListItem>
        <Typography noTopMargin component="span">
          Five
        </Typography>
      </ListItem>
    </UnorderedList>
  </>
);

export const NoLeftMarginUnorderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <UnorderedList noLeftMargin>
      <ListItem>
        <Typography component="span">One</Typography>
      </ListItem>
      <ListItem>
        <Typography component="span">Two</Typography>
      </ListItem>
      <ListItem>
        <Typography component="span">Three</Typography>
      </ListItem>
      <ListItem>
        <Typography component="span">Four</Typography>
      </ListItem>
      <ListItem>
        <Typography component="span">Five</Typography>
      </ListItem>
    </UnorderedList>
  </>
);
UnorderedList
