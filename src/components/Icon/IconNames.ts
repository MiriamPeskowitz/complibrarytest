/*
 * IconNames.ts
 *
 * Taken from IconIsometricNames.ts
 *
 * We need to encapsulate any reusable enums in a separate file so that we can export as default, or our compilation breaks.
 *
 * We also must declare default on a separate line at the end of the file to avoid additional compilation errors.
 */

enum IconNames {
  "chevron-left" = "chevron-left",
  "chevron-right" = "chevron-right",
  "dollar" = "dollar",
  "exclamation-circle" = "exclamation-circle",
  "information-circle" = "information-circle",
  "plus-circle" = "plus-circle",
  "check-circle" = "check-circle",
  "exclamation-diamond" = "exclamation-diamond",
  "print" = "print",
  "user" = "user"
}

export default IconNames;
