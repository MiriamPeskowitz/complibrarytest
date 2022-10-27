import colors from "../../shared/colors";

const styles = {
  card: {
    width: "328px",
    display: "inline-block",
    border: `1px solid ${colors.grey300}`,
    borderRadius: "0.25rem",
    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.3)"
  },
  imageContainer: {
    width: "100%",
    height: "250px",
    background: colors.white,
    overflow: "hidden",
    position: "relative",
    "&$horizontal": {
      width: "130px",
      height: "130px"
    }
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  cover: {
    objectFit: "cover"
  },
  contain: {
    objectFit: "contain"
  },
  detailsContainer: {
    margin: "1.25rem",
    "&$horizontal": {
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "1rem",
      width: "192px"
    }
  },
  actionsContainer: {
    marginTop: "1.5rem"
  },
  horizontal: {
    display: "flex",
    alignItems: "center",
    height: "132px",
    "& $image": {
      width: "100%",
      height: "100%"
    }
  }
};

export default styles;
