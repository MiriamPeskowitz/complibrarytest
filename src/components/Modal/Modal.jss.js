import colors from "../../shared/colors";
import { backdrop, scrollEffect } from "../../shared/utilities";

const styles = {
  open: {},
  container: {
    position: "fixed",
    padding: "1.5rem",
    background: colors.white,
    border: `1px solid ${colors.grey300}`,
    borderRadius: "0.25rem",
    outline: "none",
    boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0.3)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    "&$open": {
      animation: "dropDown ease 200ms forwards"
    },
    height: "auto",
    maxHeight: "90%",
    display: "flex",
    flexDirection: "column"
  },
  containerScroll: {
    overflowY: "auto"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  close: {
    alignSelf: "flex-start",
    marginRight: "-10px",
    marginTop: "-8px",
    "& path": {
      fill: `${colors.grey700}`
    }
  },
  closeIcon: {
    "& svg": {
      width: "24px",
      height: "24px"
    }
  },
  bodyScroll: {
    ...scrollEffect,
    maxHeight: "80%",
    overflow: "auto",
    marginRight: "-1.5rem",
    marginLeft: "-1.5rem",
    paddingRight: "1.5rem",
    paddingLeft: "1.5rem"
  },
  body: {
    marginTop: "1rem"
  },
  actions: {
    marginTop: "1rem"
  },
  backdrop: {
    ...backdrop,
    background: "rgba(0, 0, 0, 0.5)",
    animation: "fadeIn ease 100ms"
  }
};

export default styles;
