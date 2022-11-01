import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Link from "../components/Link";
import Typography from "../components/Typography";

export default {
  title: "ComponentLibrary/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

export const Primary = () => (
  <>
    <div style={{ marginBottom: "8px" }}>
      <p>
        <Link url="https://www.bdtrust.org">Test Link Default</Link>
      </p>
      <p>
        <Link url="https://www.bdtrust.org" isUnderlined={false}>
          Test Link Default
        </Link>
      </p>
    </div>
    <div style={{ background: "#152e5f", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="light">
          Test Link Light
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="light"
          isUnderlined={false}
        >
          Test Link Light
        </Link>
      </p>
    </div>
    <div style={{ background: "#333", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="white">
          Test Link White
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="white"
          isUnderlined={false}
        >
          Test Link White
        </Link>
      </p>
    </div>
  </>
);

export const External = () => (
  <>
    <div style={{ marginBottom: "8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" isExternal>
          External Link
        </Link>
      </p>
      <p>
        <Link url="https://www.bdtrust.org" isExternal isUnderlined={false}>
          External Link
        </Link>
      </p>
    </div>
    <div style={{ background: "#152e5f", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="light" isExternal>
          External Link
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="light"
          isExternal
          isUnderlined={false}
        >
          External Link
        </Link>
      </p>
    </div>
    <div style={{ background: "#333", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="white" isExternal>
          External Link
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="white"
          isExternal
          isUnderlined={false}
        >
          External Link
        </Link>
      </p>
    </div>
  </>
);

export const Truncated = () => (
  <>
    <div style={{ marginBottom: "8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" isTruncated>
          Truncated Link That Is Really, Really Long For Testing Purposes
        </Link>
      </p>
      <p>
        <Link url="https://www.bdtrust.org" isTruncated isUnderlined={false}>
          Truncated Link That Is Really, Really Long For Testing Purposes
        </Link>
      </p>
    </div>
    <div style={{ background: "#152e5f", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="light" isTruncated>
          Truncated Link That Is Really, Really Long For Testing Purposes
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="light"
          isTruncated
          isUnderlined={false}
        >
          Truncated Link That Is Really, Really Long For Testing Purposes
        </Link>
      </p>
    </div>
    <div style={{ background: "#333", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="white" isTruncated>
          Truncated Link That Is Really, Really Long For Testing Purposes
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="white"
          isTruncated
          isUnderlined={false}
        >
          Truncated Link That Is Really, Really Long For Testing Purposes
        </Link>
      </p>
    </div>
  </>
);

export const Inactive = () => (
  <>
    <div style={{ marginBottom: "8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" isActive={false}>
          Test Link Default
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          isActive={false}
          isUnderlined={false}
        >
          Test Link Default
        </Link>
      </p>
    </div>
    <div style={{ background: "#152e5f", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="light" isActive={false}>
          Test Link Light
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="light"
          isActive={false}
          isUnderlined={false}
        >
          Test Link Light
        </Link>
      </p>
    </div>
    <div style={{ background: "#333", padding: "4px 4px 8px" }}>
      <p>
        <Link url="https://www.bdtrust.org" display="white" isActive={false}>
          Test Link White Test Link White Test Link White
        </Link>
      </p>
      <p>
        <Link
          url="https://www.bdtrust.org"
          display="white"
          isActive={false}
          isUnderlined={false}
        >
          Test Link White Test Link White Test Link White
        </Link>
      </p>
    </div>
  </>
);

export const InParagraph = () => (
  <>
    <div style={{ marginBottom: "8px" }}>
      <Typography variant="p">
        Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
        sollicitudin urna dolor sagittis lacus. Pellentesque{" "}
        <Link url="https://www.bdtrust.org">test link</Link> auctor neque nec
        urna. Phasellus accumsan cursus velit.
      </Typography>
      <Typography variant="p">
        Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc,{" "}
        <Link isExternal url="https://www.bdtrust.org" isTruncated>
          test link really really long to test truncation in paragraph
        </Link>{" "}
        eu sollicitudin urna dolor sagittis lacus. Pellentesque auctor neque nec
        urna. Phasellus accumsan cursus velit.
      </Typography>
    </div>

    <div style={{ background: "#152e5f", padding: "4px 4px 8px" }}>
      <Typography variant="p" display="light">
        Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
        sollicitudin urna dolor sagittis lacus. Pellentesque{" "}
        <Link url="https://www.bdtrust.org" display="light">
          test link
        </Link>{" "}
        auctor neque nec urna. Phasellus accumsan cursus velit.
      </Typography>
      <Typography variant="p" display="light">
        Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc,{" "}
        <Link
          isExternal
          url="https://www.bdtrust.org"
          isTruncated
          display="light"
        >
          test link really really long to test truncation in paragraph
        </Link>{" "}
        eu sollicitudin urna dolor sagittis lacus. Pellentesque auctor neque nec
        urna. Phasellus accumsan cursus velit.
      </Typography>
    </div>

    <div style={{ background: "#333", padding: "4px 4px 8px" }}>
      <Typography variant="p" display="white">
        Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu
        sollicitudin urna dolor sagittis lacus. Pellentesque{" "}
        <Link url="https://www.bdtrust.org" display="white">
          test link
        </Link>{" "}
        auctor neque nec urna. Phasellus accumsan cursus velit.
      </Typography>
      <Typography variant="p" display="white">
        Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc,{" "}
        <Link
          isExternal
          url="https://www.bdtrust.org"
          isTruncated
          display="white"
        >
          test link really really long to test truncation in paragraph
        </Link>{" "}
        eu sollicitudin urna dolor sagittis lacus. Pellentesque auctor neque nec
        urna. Phasellus accumsan cursus velit.
      </Typography>
    </div>
  </>
);

// const linkStories = {
//   Primary,
//   External,
//   Truncated,
//   Inactive,
//   InParagraph
// };

// export default linkStories;



// const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

// export const Primary = Template.bind({})
// Primary.args = {
//   url: "https://www.bdtrust.org",
// }
// // const Button = (props: ButtonProps) => {
// //   return <button>{props.label}</button>;
// // };



// <>
// <div style={{ marginBottom: "8px" }}>
//   <p>
//     <Link url="https://www.bdtrust.org">Test Link Default</Link>
//   </p>
//   <p>
//     <Link url="https://www.bdtrust.org" isUnderlined={false}>
//       Test Link Default
//     </Link>
//   </p>
// </div>
// <div style={{ background: "#152e5f", padding: "4px 4px 8px" }}>
//   <p>
//     <Link url="https://www.bdtrust.org" display="light">
//       Test Link Light
//     </Link>
//   </p>
//   <p>
//     <Link
//       url="https://www.bdtrust.org"
//       display="light"
//       isUnderlined={false}
//     >
//       Test Link Light
//     </Link>
//   </p>
// </div>
// <div style={{ background: "#333", padding: "4px 4px 8px" }}>
//   <p>
//     <Link url="https://www.bdtrust.org" display="white">
//       Test Link White
//     </Link>
//   </p>
//   <p>
//     <Link
//       url="https://www.bdtrust.org"
//       display="white"
//       isUnderlined={false}
//     >
//       Test Link White
//     </Link>
//   </p>
// </div>
// </>
// );

// export const External = Template.bind({})
// External.args = {
//   isUnderlined: false,
// }

// export const Truncated = Template.bind({})
// Truncated.args =  {
//   isUnderlined: false,
// }

// export const Inactive = Template.bind({})
// Inactive.args = {
//   isUnderlined: false,
// }
// export const InParagraph = Template.bind({})
// InParagraph.args = {
//   isUnderlined: false,
// }

// export const TestLinkLight = Template.bind({})
// TestLinkLight.args = {
//   display: "light",
//   isUnderlined: false,
//   url: "https://www.bdtrust.org"
// }
