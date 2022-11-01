import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Link from "../components/Link";

import Banner from "../components/Banner";


export default {
  title: "ComponentLibrary/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

// const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const onActionClick = () => window.alert("Action clicked!");
export const DangerAction = () => (
  <Button
    variant="inverted"
    status="danger"
    size="compact"
    onClick={onActionClick}
  >
    Action
  </Button>
);

export const InfoAction = () => (
  <Button
    variant="inverted"
    status="informational"
    size="compact"
    onClick={onActionClick}
  >
    Action
  </Button>
);

export const SuccessAction = () => (
  <Button
    variant="inverted"
    status="success"
    size="compact"
    onClick={onActionClick}
  >
    Action
  </Button>
);

export const WarningAction = () => (
  <Button
    variant="inverted"
    status="warning"
    size="compact"
    onClick={onActionClick}
  >
    Action
  </Button>
);

export const DefaultBanner = () => (
  <Banner variant="error" isFixed>
    Error message.
  </Banner>
);

export const SuccessBanner = () => (
  <Banner isFixed variant="success">
    Success message.
  </Banner>
);

export const InformationalBanner = () => (
  <Banner isFixed variant="informational">
    Informational message.
  </Banner>
);

export const WarningBanner = () => (
  <Banner isFixed variant="warning">
    Warning message.
  </Banner>
);

export const BannerBottom = () => (
  <Banner isFixed position="bottom">
    Please try again.
  </Banner>
);

export const DefaultBannerWithDismissTimer = () => {
  const myTimer = 3000;
  const myInterval = 1000;
  const [timer, setTimer] = React.useState(myTimer);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimer(currentState => {
        if (currentState === myInterval) window.clearInterval(intervalId);
        return currentState - myInterval;
      });
    }, myInterval);
  }, []);

  return (
    <Banner isFixed autoDismiss={myTimer}>
      I'll disappear in {timer / 1000} seconds.
    </Banner>
  );
};

export const BannersWithAction = () => (
  <Container position="fixed-top" isHorizontallyCentered>
    <Grid direction="column">
      <Banner variant="error" action={<DangerAction />}>
        Error message
      </Banner>
      <Banner variant="warning" action={<WarningAction />}>
        Warning message
      </Banner>
      <Banner variant="success" action={<SuccessAction />}>
        Success message
      </Banner>
      <Banner variant="informational" action={<InfoAction />}>
        Informational message
      </Banner>
    </Grid>
  </Container>
);

export const DimissableBanner = () => (
  <Banner isDismissable isFixed>
    Please try again.
  </Banner>
);

export const DimissableBannerWithAction = () => (
  <Banner isDismissable isFixed action={<DangerAction />}>
    Please try again.
  </Banner>
);

export const LongMessageBanner = () => (
  <Banner isDismissable isFixed action={<DangerAction />}>
    Pellentesque vestibulum aliquam ante, sit amet fringilla dolor feugiat sed.
    Phasellus quis{" "}
    <Link url="#" display="white">
      eleifend
    </Link>{" "}
    neque. Mauris euismod iaculis tellus et fringilla. Nulla eu ultrices quam,
    ac aliquam odio. Nam eget sem nisl. Nam quis sem sit amet turpis.
  </Banner>
);

export const BannersWithContainerTop = () => (
  <Container position="fixed-top" isHorizontallyCentered>
    <Grid direction="column">
      <Banner isDismissable>
        1. Please try again different length message.
      </Banner>
      <Banner variant="informational" isDismissable>
        2. Here's info.
      </Banner>
      <Banner variant="success" isDismissable>
        3. Success.
      </Banner>
      <Banner isDismissable>4. Please try again.</Banner>
      <Banner isDismissable>5. Please try again.</Banner>
    </Grid>
  </Container>
);

export const BannersWithContainerBottom = () => (
  <Container position="fixed-bottom" isHorizontallyCentered>
    <Grid direction="column">
      <Banner isDismissable>
        1. Please try again different length message.
      </Banner>
      <Banner variant="informational" isDismissable>
        2. Here's info.
      </Banner>
      <Banner variant="success" isDismissable>
        3. Success.
      </Banner>
      <Banner isDismissable>4. Please try again.</Banner>
      <Banner isDismissable>5. Please try again.</Banner>
    </Grid>
  </Container>
);
