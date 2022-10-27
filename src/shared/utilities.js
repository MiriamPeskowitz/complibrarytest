/**
 * utilities.js
 *
 * Creates reusable jss utility styles for use throughout the library
 */

import colors from "./colors";

const circle = {
  borderRadius: "9999px"
};

const square = {
  borderRadius: 0
};

const fullWidth = {
  width: "100%"
};

const centerX = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, 0)" /* KLUDGE: Beware bad anti-aliasing */
};

const centerY = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)" /* KLUDGE: Beware bad anti-aliasing */
};

const fullCenter = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)" /* KLUDGE: Beware bad anti-aliasing */
};

const textCenter = {
  textAlign: "center"
};

const hidden = {
  display: "none"
};

const truncate = {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap"
};

const srOnly = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: 0,
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0
};

// Based on https://lea.verou.me/2012/04/background-attachment-local/
// Prettier does strange things to the formatting for this class
/* prettier-ignore */
const scrollEffect = {
  background: `
    ${/* Shadow covers */""}
    linear-gradient(${colors.white} 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), ${colors.white} 70%) 0 100%,
    ${/* Shadows */""}
    linear-gradient(${colors.black}, rgba(26,32,44,0)),
    linear-gradient(rgba(26,32,44,0), #ddd) 0 100%
  `,
  background: `
    ${/* Shadow covers */""}
    linear-gradient(${colors.white} 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), ${colors.white} 70%) 0 100%,
    ${/* Shadows */""}
    linear-gradient(#ddd, rgba(26,32,44,0)),
    linear-gradient(rgba(26,32,44,0), #ddd) 0 100%
  `,
  backgroundRepeat: "no-repeat",
  backgroundColor: colors.white,
  backgroundSize: "100% 40px, 100% 40px, 100% 32px, 100% 32px",
  // @KLUDGE: Opera doesn't support this in the shorthand
  backgroundAttachment: "local, local, scroll, scroll"
};

const focusEffect = {
  boxShadow: `0 0 0 4px ${colors.blue200}`
};

const dropShadow = {
  boxShadow: `0 0 1px 0 rgba(0, 0, 0, 0.1), 0 2px 6px 0 rgba(0, 0, 0, 0.2)`
};

const backdrop = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

export {
  circle,
  square,
  fullWidth,
  centerX,
  centerY,
  fullCenter,
  textCenter,
  hidden,
  truncate,
  srOnly,
  scrollEffect,
  focusEffect,
  dropShadow,
  backdrop
};
