/**
 * helpers.js
 *
 * Abstracts jss generation boilerplate for use throughout the library
 */

 import { createUseStyles } from "react-jss";

 /**
  * Retrieve jss-generated class names hook from a set of jss-declared styles.
  *
  * @param {object} styles
  * @param {string} prefix
  * @returns {function} A hook that retrieves the map of class names when invoked
  */
 const getUseStyles = (styles, prefix = "") =>
   createUseStyles(styles, { name: prefix });

 /**
  * Retrieve jss-generated class names hook as global classes for utilities.
  *
  * @param {object} styles
  * @param {object} prefix
  * @returns {function} A hook that retrieves the map of class names when invoked
  */
 const getUseUtilityClasses = (styles, prefix = "") => {
   const myPrefix = prefix ? `${prefix}-` : "";
   const utilityStyles = Object.keys(styles).reduce(
     (acc, cur) => ({
       "@global": {
         ...acc,
         [`.${myPrefix}${cur}`]: styles[cur]
       }
     }),
     { "@global": {} }
   );

   return createUseStyles(utilityStyles, { name: prefix });
 };

 /**
  * From a map of class names to override with the names to override with,
  * generate a space-separated class name string to use directly in classNames.
  *
  * @param {object} classOverrides
  * @returns {string}
  */
 const getOverrideNames = classOverrides =>
   Object.values(classOverrides)
     .reduce((acc, cur) => (acc += `${cur} `), "")
     .trim();

 export { getUseStyles, getOverrideNames, getUseUtilityClasses };

// import { createUseStyles } from "react-jss";

// export const helpers = {
// /**
//   * @param {object} styles
//   * @param {string} prefix
//   * @returns {function} A hook that retrieves the map of class names when invoked
//   */
// const getUseStyles = (styles, prefix: string = "") =>
//    createUseStyles(styles, { name: prefix });

//  /**
//   * Retrieve jss-generated class names hook as global classes for utilities.
//   *
//   * @param {object} styles
//   * @param {object} prefix
//   * @returns {function} A hook that retrieves the map of class names when invoked
//   */
//  const getUseUtilityClasses = (styles, prefix = "") => {
//    const myPrefix = prefix ? `${prefix}-` : "";
//    const utilityStyles = Object.keys(styles).reduce(
//      (acc, cur) => ({
//        "@global": {
//          ...acc,
//          [`.${myPrefix}${cur}`]: styles[cur]
//        }
//      }),
//      { "@global": {} }
//    );

//    return createUseStyles(utilityStyles, { name: prefix });
//  };

//  /**
//   * From a map of class names to override with the names to override with,
//   * generate a space-separated class name string to use directly in classNames.
//   *
//   * @param {object} classOverrides
//   * @returns {string}
//   */
//  const getOverrideNames = classOverrides =>
//    Object.values(classOverrides)
//      .reduce((acc, cur) => (acc += `${cur} `), "")
//      .trim();

