import colors from "../../shared/colors";

const styles = {
  listItem: {
    color: colors.grey700,
    lineHeight: 1.5
  },
  customBullet: {
    listStyle: "none",
    marginTop: "0.5rem",
    display: "flex",
    alignItems: "center",
    "& svg": {
      height: "1rem",
      width: "1rem",
      marginRight: "0.5rem"
    }
  }
};

export default styles;
