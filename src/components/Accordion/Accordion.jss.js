import colors from "../../shared/colors";

const icon = {
  transition: "transform 0.2s ease"
};

const styles = {
  title: {},
  summary: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "1rem 0",
    "&:focus": {
      outline: "none",
      boxShadow: `0 0 4px 2px ${colors.blue200}`
    },
    "&:hover": {
      background: colors.blue100
    }
  },
  details: {
    display: "flex",
    alignItems: "center",
    "& title": {
      fontWeight: "600",
      margin: "0 .75rem"
    },
    "& summary": {
      "&-webkit-details-marker": {
        visibility: "hidden"
      }
    }
  },
  "icon-h2": {
    marginRight: "0.5rem",
    height: "1.5rem",
    "& svg": {
      transition: icon.transition,
      height: "1.5rem",
      width: "1.5rem",
      fill: colors.blue500
    }
  },
  "icon-h3": {
    marginRight: "0.5rem",
    height: "1.25rem",
    "& svg": {
      transition: icon.transition,
      height: "1.25rem",
      width: "1.25rem",
      fill: colors.blue500
    }
  },
  "icon-h4": {
    marginRight: "0.5rem",
    height: "1.25rem",
    "& svg": {
      transition: icon.transition,
      height: "1.25rem",
      width: "1.25rem",
      fill: colors.blue500
    }
  },
  "icon-h5": {
    marginRight: "0.5rem",
    height: "1rem",
    "& svg": {
      transition: icon.transition,
      height: "1rem",
      width: "1rem",
      fill: colors.blue500
    }
  },
  open: {
    "& svg": {
      transform: "rotate(90deg)",
      fill: colors.blue500
    }
  },
  content: {
    overflow: "hidden",
    padding: "0 1rem 1rem 2rem"
  }
};

export default styles;
