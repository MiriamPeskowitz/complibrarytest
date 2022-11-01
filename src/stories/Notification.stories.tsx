import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Notification from "../components/Notification";


export default {
  title: "ComponentLibrary/Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;

// const Template: ComponentStory<typeof Notification> = (args) => <Notification  {...args} />;

//export these two? They're called by other functions
const onClick = () => false;
const onDismiss = () => window.alert("Dismissed!");

export const ErrorWithDismiss = () => (
  <Notification variant="error" actionName="Action" onActionClick={onClick}>
    Test notification with very long text to demonstrate truncation.
  </Notification>
);

export const NoIconWithDismiss = () => (
  <Notification actionName="Action" onActionClick={onClick}>
    Test notification with very long text to demonstrate truncation.
  </Notification>
);

export const InformationalWithDismissCallback = () => (
  <Notification
    variant="informational"
    actionName="Action"
    onActionClick={onClick}
    onDismissClick={onDismiss}
  >
    Test notification with very long text to demonstrate truncation.
  </Notification>
);

export const SuccessWithDismiss = () => (
  <Notification variant="success" actionName="Action" onActionClick={onClick}>
    Test notification with very long text to demonstrate truncation.
  </Notification>
);

export const ErrorWithoutDismiss = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const onClickSetDismissed = () => setIsDismissed(true);

  return (
    <Notification
      variant="error"
      hasDismissAction={false}
      isDismissed={isDismissed}
      actionName="Action (Close)"
      onActionClick={onClickSetDismissed}
    >
      Test notification with very long text to demonstrate truncation.
    </Notification>
  );
};

// const notificationStories = {
//   ErrorWithDismiss,
//   NoIconWithDismiss,
//   InformationalWithDismissCallback,
//   SuccessWithDismiss,
//   ErrorWithoutDismiss
// };

