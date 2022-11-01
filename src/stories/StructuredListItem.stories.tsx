import * as React from "react";

import Button from "../components/Button";
import IconCheck from "../shared/icons/icon-check.svg";

import StructuredListItem from "../components/StructuredListItem";

const ActionLeft = () => (
  <Button leadingIcon={<IconCheck is="svg" />} variant="text" size="compact">
    Mark as Read
  </Button>
);
const ActionRight = () => (
  <Button leadingIcon={<IconCheck is="svg" />} variant="text" size="compact">
    Delete
  </Button>
);

const Primary = () => (
  <>
    <StructuredListItem
      actionLeft={<ActionLeft />}
      actionRight={<ActionRight />}
      isRead
      title={
        "Read State Title That Is Really Long To Test Truncation CSS Effect"
      }
      metadata={"Large amount of metadata for testing"}
    >
      Pellentesque vestibulum aliquam ante, sit amet fringilla dolor feugiat
      sed. Phasellus quis eleifend neque. Mauris euismod iaculis tellus et
      fringilla. Nulla eu ultrices quam, ac aliquam odio. Nam eget sem nisl. Nam
      quis sem sit amet turpis.
    </StructuredListItem>
    <StructuredListItem
      actionLeft={<ActionLeft />}
      actionRight={<ActionRight />}
      title={
        "Unread State Title That Is Really Long To Test Truncation CSS Effect"
      }
      metadata={"Large amount of metadata for testing"}
    >
      Pellentesque vestibulum aliquam ante, sit amet fringilla dolor feugiat
      sed. Phasellus quis eleifend neque. Mauris euismod iaculis tellus et
      fringilla. Nulla eu ultrices quam, ac aliquam odio. Nam eget sem nisl. Nam
      quis sem sit amet turpis.
    </StructuredListItem>
    <StructuredListItem
      actionLeft={<ActionLeft />}
      actionRight={<ActionRight />}
      isRead
      title={"Read"}
      metadata={"Metadata"}
    >
      Pellentesque vestibulum aliquam ante, sit amet fringilla dolor feugiat
      sed. Phasellus quis eleifend neque. Mauris euismod iaculis tellus et
      fringilla. Nulla eu ultrices quam, ac aliquam odio. Nam eget sem nisl. Nam
      quis sem sit amet turpis.
    </StructuredListItem>
    <StructuredListItem
      actionLeft={<ActionLeft />}
      actionRight={<ActionRight />}
      title={"Unread"}
      metadata={"Metadata"}
    >
      Pellentesque vestibulum aliquam ante, sit amet fringilla dolor feugiat
      sed. Phasellus quis eleifend neque. Mauris euismod iaculis tellus et
      fringilla. Nulla eu ultrices quam, ac aliquam odio. Nam eget sem nisl. Nam
      quis sem sit amet turpis.
    </StructuredListItem>
  </>
);

const structuredListItemStories = {
  Primary
};

export default structuredListItemStories;
