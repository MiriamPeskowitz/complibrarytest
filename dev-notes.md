-- Source:  "name": "@miriampeskowitz/complibrarytest.git",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/MiriamPeskowitz"

-- yarn rollup WORKS/dist folder created /fixed index.d.ts-- but not sure what it does

-- do i want to move shared to src/shared?

-- .npmrc is in root DONE

-- check storybook version: (6.5.13) npx storybook@latest upgrade

Tuesday/EOD: storybook works with test Button/yarn rollup works
Next: bring in shared styles + 1 bdt component ==> debug
    -- add jss
    --added this to tsconfig:  "include": ["src", "types", "**/*.ts", "**/*.tsx"],
WORKED!!! rollup works/dist folder created, BUT now storybook doesn't load  -- add Link DONE -
STORYBOOK BUILDS BUT MY COMPONENTS AREN"T THERE. Ran rollup, new errors --> I think I'm up to the svg issue (i can only see the original button, and rollup has some but not all of the components I added. )
-- pulled declare module *.svg code from earlier version, now in custom.d.ts.
 --> not working yet
   --> this worked: create const, with type string that requires the module
   // import IconExternalLink from "../../shared/icons/icon-external-link.svg";

    const iconExternalLink: string = require("../../shared/icons/icon-external-link").default

--Wed morning:
   -- npm run rollup
   -- npm run storybook
   --npm publish (push code to github/packages)
   --index/d.ts -- this gets created, incorrect, but figure out why.
   --Link.tsx -- how to create declaration files --> custom.d.ts, but not sure of syntax

--> get template updates into xx.stories.tsx for the components I've imported

--> Can these stay in individual component directories, or go into a src/stories directory?

Later:
-- components want classnames library; I'll add it, but want to think about whether it's necessary.
-- later, remove Button

--npm run rollup (alias nrr)
-- npm run storybook
--     (to publish as github package)

Ask:
---This error message: Cannot find module '../shared/helpers' or its corresponding type declarations.
       is it the routing../ or where do I declare its type?
---'require' call may be converted to an import.


boilerplate code:
export default {
    title: "Components/Button";
    component: Button;
    argTypes: {handleClick: { action: "handleClick"} },
}

//base
const Template = args => <Button {...args} />

// then copy the template function
// export const Red = () => <Button label="Press me" backgroundColor="red"
//documentation comes from PropTypes or from typescript

export const Red = Template.bind({})
//args come from the tsx file props
Red.args = {
    backgroundColor: "red";
    label: "press me ";
    size: "md";
}

export const Green= Template.bind({})
//args come from the tsx file props
Green.args = {
    backgroundColor: "red";
    label: "press me ";
    size: "md";
}

export const Large = Template.bind({})
//args come from the tsx file props
Red.args = {
    backgroundColor: "green";
    label: "press me ";
    size: "md";
}

export const Long = Template.bind({})
//args come from the tsx file props
Red.args = {
    backgroundColor: "yellow";
    label: "press me ";
    size: "lg";
}


import Stack from '../components/Stack' //import from regular file

export default {
    title: "Components/Stack";
    component: Stack;
    argTypes: {
        numberOfChildren: {type: "number", defaultValue: 4 }
     },
}
//only an argument numberofChildren needed here
//base
const Template = ({ numberOfChildren, ...args}) => {
    <Stack {...args}
        {[ ...Array(numberOfChildren.keys()].map(n => (
            <div Style={{
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
                {n + 1}
            </div>
        ))}
    </Stack>
}

export Horizontal = Template.bind({})
Horizontal.args = {
    direction: "row",
    spacing: 2,
    wrap: false,
}


export NoSpacing = Template.bind({})
NoSpacing.args = {
    direction: "row",
    spacing: 0,
    wrap: false,
}
//copy and change to create versions
export Empty = Template.bind({})
Empty.args = {
    numberOfChildren: 40,
    direction: "row",
    spacing: 2,
    wrap: true,
}

