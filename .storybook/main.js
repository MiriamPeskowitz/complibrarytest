// export default {
//     "stories": [
//       // "../packages/intro.stories.mdx", // default page
//       "../src/**/*.stories.mdx",
//       "../src/**/*.stories.@(js|jsx|ts|tsx)"
//     ],
//     "addons": [
//       "@storybook/addon-links",
//       "@storybook/addon-essentials",
//       "@storybook/preset-scss"
//     ],
//     "core": {
//       "builder": "webpack5"
//     }
//   }
//older syntax but storybook gave me an error when I changed to export default -- have I asserted CJS?
  module.exports = {
    "stories": [
      // "../packages/intro.stories.mdx", // default page
      "../src/**/*.stories.mdx",
      "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/preset-scss"
    ],
    "core": {
      "builder": "webpack5"
    }
  }