export const testEnvironment = "jsdom";
export const moduleNameMapper = {
    ".(css|less|scss)$": "identity-obj-proxy",
};
//tells jest to use jsdom as DOM implementation

// module.exports = {
//     testEnvironment: "jsdom",
//     moduleNameMapper: {
//         ".(css|less|scss)$": "identity-obj-proxy",
//     },
// };