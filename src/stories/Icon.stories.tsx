import React from "react";
import Grid from "../components/Grid";
import Typography from "../components/Typography";
import { getUseStyles } from "../shared/helpers";
import styles from "../components/Icon/Icon.stories.jss.js";
import Icon from "../components/Icon";

const useStyles = getUseStyles(styles);

const iconNames = [
  "chevron-left",
  "chevron-right",
  "dollar",
  "exclamation-circle",
  "information-circle",
  "plus-circle",
  "check-circle",
  "exclamation-diamond",
  "print",
  "user"
];

const Tiny = () => {
  return (
    <Grid justifyContent="justify-start" direction="column" spacing={2}>
      {iconNames.map(icon => (
        <Grid direction="row" spacing={2} key={icon} alignItems="items-center">
          <Icon size="tiny" iconName={icon} />
          <Typography noTopMargin>{icon}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const Small = () => {
  return (
    <Grid justifyContent="justify-start" direction="column" spacing={2}>
      {iconNames.map(icon => (
        <Grid direction="row" spacing={2} key={icon} alignItems="items-center">
          <Icon size="small" iconName={icon} />
          <Typography noTopMargin>{icon}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const Medium = () => {
  return (
    <Grid justifyContent="justify-start" direction="column" spacing={2}>
      {iconNames.map(icon => (
        <Grid direction="row" spacing={2} key={icon} alignItems="items-center">
          <Icon size="medium" iconName={icon} />
          <Typography noTopMargin>{icon}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const Large = () => {
  return (
    <Grid justifyContent="justify-start" direction="column" spacing={2}>
      {iconNames.map(icon => (
        <Grid direction="row" spacing={2} key={icon} alignItems="items-center">
          <Icon size="large" iconName={icon} />
          <Typography noTopMargin>{icon}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

const Colors = () => {
  const classes = useStyles();
  return (
    <Grid direction="row" spacing={2}>
      <Grid justifyContent="justify-start" direction="column" spacing={4}>
        {iconNames.map(icon => (
          <Icon size="large" iconName={icon} key={icon} color="warning" />
        ))}
      </Grid>
      <Grid justifyContent="justify-start" direction="column" spacing={4}>
        {iconNames.map(icon => (
          <Icon size="large" iconName={icon} key={icon} color="error" />
        ))}
      </Grid>
      <Grid justifyContent="justify-start" direction="column" spacing={4}>
        {iconNames.map(icon => (
          <Icon size="large" iconName={icon} key={icon} color="success" />
        ))}
      </Grid>
      <Grid justifyContent="justify-start" direction="column" spacing={4}>
        {iconNames.map(icon => (
          <Icon size="large" iconName={icon} key={icon} color="info" />
        ))}
      </Grid>
      <Grid justifyContent="justify-start" direction="column" spacing={4}>
        {iconNames.map(icon => (
          <Icon size="large" iconName={icon} key={icon} color="default" />
        ))}
      </Grid>
      <Grid justifyContent="justify-start" direction="column" spacing={4}>
        {iconNames.map(icon => (
          <Icon
            size="large"
            iconName={icon}
            key={icon}
            classOverrides={{ color: classes.pink }}
          />
        ))}
      </Grid>
    </Grid>
  );
};

const iconStories = {
  Tiny,
  Small,
  Medium,
  Large,
  Colors
};

export default iconStories;
