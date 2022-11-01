import * as React from "react";

import ListItem from "../ListItem";
import OrderedList from "../OrderedList";
import Typography from "../Typography";

import Divider from "./";

const Default = () => (
  <>
    <Typography noBottomMargin variant="h1">
      Some content
    </Typography>
    <Divider />
    <Typography noTopMargin variant="h1">
      Some other content
    </Typography>
  </>
);

const NoTopMargin = () => (
  <>
    <Typography noBottomMargin variant="h1">
      Some content
    </Typography>
    <Divider noTopMargin />
    <Typography noTopMargin variant="h1">
      Some other content
    </Typography>
  </>
);

const NoBottomMargin = () => (
  <>
    <Typography noBottomMargin variant="h1">
      Some content
    </Typography>
    <Divider noBottomMargin />
    <Typography noTopMargin variant="h1">
      Some other content
    </Typography>
  </>
);

const WithLists = () => (
  <>
    <OrderedList numberIcons>
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
    </OrderedList>
    <Divider />
    <OrderedList numberIcons>
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
    </OrderedList>
  </>
);

const DividerStories = {
  Default,
  NoTopMargin,
  NoBottomMargin,
  WithLists
};

export default DividerStories;
