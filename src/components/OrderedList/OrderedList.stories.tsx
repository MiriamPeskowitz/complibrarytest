import * as React from "react";

import Grid from "../Grid";
import ListItem from "../ListItem";
import Typography from "../Typography";

import OrderedList from "./";

const PrimaryOrderedList = () => (
  <>
    <Typography noBottomMargin component="span">
      Some text before to provide context:
    </Typography>
    <OrderedList>
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
    </OrderedList>
  </>
);

const CustomOrderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
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
    </OrderedList>
  </>
);

const InlineOrderedList = () => (
  <Grid direction="column" spacing={3}>
    <OrderedList inline>
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
    </OrderedList>
    <OrderedList inline numberIcons>
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
    </OrderedList>
  </Grid>
);

const NoBottomMarginOrderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <OrderedList noBottomMargin>
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
    </OrderedList>
  </>
);

const NoTopMarginOrderedList = () => (
  <>
    <Typography component="span" noBottomMargin>
      Some text before to provide context:
    </Typography>
    <OrderedList noTopMargin>
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
    </OrderedList>
  </>
);

const CustomOrderedListWithExtraText = () => (
  <OrderedList numberIcons>
    <ListItem>
      <Grid direction="column">
        <Typography noTopMargin component="span">
          Call the PA Benefits Center Hotline, Monday - Friday, 9am -5pm EST
        </Typography>
        <Typography noTopMargin component="span" variant="h3">
          1 (833)-373-5869
        </Typography>
      </Grid>
    </ListItem>
    <ListItem>
      <Grid direction="column">
        <Typography noTopMargin component="span">
          Provide your Reference ID to the assister:
        </Typography>
        <Typography noTopMargin component="span" variant="h3">
          PA 00000000000
        </Typography>
      </Grid>
    </ListItem>
    <ListItem>
      <Typography noTopMargin component="span">
        Complete your application. You can apply for most of these benefits at
        once, get referrals, and schedule necessary appointments over the phone.
      </Typography>
    </ListItem>
  </OrderedList>
);

const orderedListStories = {
  PrimaryOrderedList,
  CustomOrderedList,
  InlineOrderedList,
  NoBottomMarginOrderedList,
  NoTopMarginOrderedList,
  CustomOrderedListWithExtraText
};

export default orderedListStories;
