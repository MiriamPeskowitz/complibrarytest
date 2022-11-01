import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "../components/Link";
import Typography from "../components/Typography";

export default {
  title: "ComponentLibrary/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

// const typographyStories = {
//   Primary,
//   Secondary,
//   DisplayWhite,
//   ComponentTypes,
//   Error,
//   Success
// };

export const Primary = () => (
  <div>
    <Typography variant="h1">h1: Heading One</Typography>
    <Typography variant="h2">h2: Heading Two</Typography>
    <Typography variant="h3">h3: Heading Three</Typography>
    <Typography variant="h4">h4: Heading Four</Typography>
    <Typography variant="h5">h5: Heading Five</Typography>
    <Typography variant="p">
      Regular paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Typography>
    <Typography>
      Regular Paragraph with links and no top/bottom margins: Lorem ipsum dolor
      sit amet, <Link url="http://google.com">consectetur</Link> adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip{" "}
      <Link url="http://google.com" external>
        ex ea commodo consequat
      </Link>
      .
    </Typography>
    <Typography body="small">
      Small body text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </Typography>
    <Typography body="smallCaps">
      Small Caps body text: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Typography>
  </div>
);

export const Secondary = () => (
  <div style={{ background: "#152e5f", padding: 24 }}>
    <Typography variant="h1" display="light">
      h1: Heading One
    </Typography>
    <Typography variant="h2" display="light">
      h2: Heading Two
    </Typography>
    <Typography variant="h3" display="light">
      h3: Heading Three
    </Typography>
    <Typography variant="h4" display="light">
      h4: Heading Four
    </Typography>
    <Typography variant="h5" display="light">
      h5: Heading Five
    </Typography>
    <Typography display="light">
      Regular Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Typography>
    <Typography display="light">
      Regular Paragraph with links: Lorem ipsum dolor sit amet,{" "}
      <Link url="http://google.com" display="light">
        consectetur
      </Link>{" "}
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip{" "}
      <Link url="http://google.com" external display="light">
        ex ea commodo consequat
      </Link>
      .
    </Typography>
    <Typography body="small" display="light">
      Small body text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </Typography>
    <Typography body="smallCaps" display="light">
      Small Caps body text: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Typography>
  </div>
);

export const DisplayWhite = () => (
  <div style={{ background: "#333", padding: 24 }}>
    <Typography variant="h1" display="white">
      h1: Heading One
    </Typography>
    <Typography variant="h2" display="white">
      h2: Heading Two
    </Typography>
    <Typography variant="h3" display="white">
      h3: Heading Three
    </Typography>
    <Typography variant="h4" display="white">
      h4: Heading Four
    </Typography>
    <Typography variant="h5" display="white">
      h5: Heading Five
    </Typography>
    <Typography display="white">
      Regular Paragraph: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Typography>
    <Typography display="white">
      Regular Paragraph with links: Lorem ipsum dolor sit amet,{" "}
      <Link url="http://google.com" display="white">
        consectetur
      </Link>{" "}
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip{" "}
      <Link url="http://google.com" external display="white">
        ex ea commodo consequat
      </Link>
      .
    </Typography>
    <Typography body="small" display="white">
      Small body text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </Typography>
    <Typography body="smallCaps" display="white">
      Small Caps body text: Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </Typography>
  </div>
);

export const ComponentTypes = () => (
  <div>
    <Typography variant="h1">h1: Heading One</Typography>
    <Typography variant="h1" component="h3">
      h1: h3 styled as an h1
    </Typography>

    <Typography variant="h2">h2: Heading Two</Typography>
    <Typography variant="h2" component="h1">
      h2: h1 styled as an h2
    </Typography>

    <Typography variant="h3">h3: Heading Three</Typography>
    <Typography variant="h3" component="p">
      h3: p styled as an h3
    </Typography>

    <Typography variant="h4">h4: Heading Four</Typography>
    <Typography variant="h4" component="h2">
      h4: h2 styled as an h4
    </Typography>

    <Typography variant="h5">h5: Heading Five</Typography>
    <Typography variant="h5" component="p">
      h5: p styled as an h5
    </Typography>

    <Typography variant="p">p: Regular Paragraph</Typography>
    <Typography variant="p" component="h2">
      p: h2 styled as a p
    </Typography>

    <Typography component="span">Span styled as a p</Typography>
    <div>
      <Typography variant="h3" component="span">
        Span styled as an h3
      </Typography>
    </div>
  </div>
);

export const Error = () => (
  <div>
    <Typography component="p" variant="error">
      Error message.
    </Typography>
  </div>
);

export const Success = () => (
  <div>
    <Typography component="p" variant="success">
      Success message.
    </Typography>
  </div>
);



