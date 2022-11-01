import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../components/Grid";
import Typography from "../components/Typography";

import Container from "../components/Container";

const styles = {
  padding: "10px",
  background: "gray",
  width: "200px",
  textAlign: "center",
  color: "white"
};

export default {
  title: "ComponentLibrary/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

// const Template: ComponentStory<typeof Container> = (args) => <Container  {...args} />;

export const Example = ({ children }) => (
  <div style={styles}>
    <Typography noTopMargin display="white">
      {children}
    </Typography>
  </div>
);

export const RelativeHorizontallyCenteredWithoutGrid = () => (
  <Container isHorizontallyCentered>
    <Example>Test Div</Example>
    <Example>Test Div</Example>
    <Example>Test Div</Example>
  </Container>
);

export const RelativeHorizontallyCenteredWithGridRow = () => (
  <Container>
    <Grid direction="row" justifyContent="justify-center">
      <Example>Test Div</Example>
      <Example>Test Div</Example>
      <Example>Test Div</Example>
    </Grid>
  </Container>
);

export const RelativeHorizontallyCenteredWithGridColumn = () => (
  <Container>
    <Grid direction="column" alignItems="items-center">
      <Example>Test Div</Example>
      <Example>Test Div</Example>
      <Example>Test Div</Example>
    </Grid>
  </Container>
);

export const FixedTopHorizontallyCenteredWithoutGrid = () => (
  <Container isHorizontallyCentered position="fixed-top">
    <Example>Test Div</Example>
    <Example>Test Div</Example>
    <Example>Test Div</Example>
  </Container>
);

export const FixedTopHorizontallyCenteredWithGridRow = () => (
  <Container isHorizontallyCentered position="fixed-top">
    <Grid direction="row">
      <Example>Test Div</Example>
      <Example>Test Div</Example>
      <Example>Test Div</Example>
    </Grid>
  </Container>
);

export const FixedTopHorizontallyCenteredWithGridColumn = () => (
  <Container isHorizontallyCentered position="fixed-top">
    <Grid direction="column">
      <Example>Test Div</Example>
      <Example>Test Div</Example>
      <Example>Test Div</Example>
    </Grid>
  </Container>
);

export const FixedBottomHorizontallyCenteredWithoutGrid = () => (
  <Container isHorizontallyCentered position="fixed-bottom">
    <Example>Test Div</Example>
    <Example>Test Div</Example>
    <Example>Test Div</Example>
  </Container>
);

export const FixedBottomHorizontallyCenteredWithGridRow = () => (
  <Container isHorizontallyCentered position="fixed-bottom">
    <Grid direction="row">
      <Example>Test Div</Example>
      <Example>Test Div</Example>
      <Example>Test Div</Example>
    </Grid>
  </Container>
);

export const FixedBottomHorizontallyCenteredWithGridColumn = () => (
  <Container isHorizontallyCentered position="fixed-bottom">
    <Grid direction="column">
      <Example>Test Div</Example>
      <Example>Test Div</Example>
      <Example>Test Div</Example>
    </Grid>
  </Container>
);

// const containerStories = {
//   RelativeHorizontallyCenteredWithoutGrid,
//   RelativeHorizontallyCenteredWithGridRow,
//   RelativeHorizontallyCenteredWithGridColumn,
//   FixedTopHorizontallyCenteredWithoutGrid,
//   FixedTopHorizontallyCenteredWithGridRow,
//   FixedTopHorizontallyCenteredWithGridColumn,
//   FixedBottomHorizontallyCenteredWithoutGrid,
//   FixedBottomHorizontallyCenteredWithGridRow,
//   FixedBottomHorizontallyCenteredWithGridColumn
// };

