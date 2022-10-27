import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "../components/Tooltip/Tooltip";

import { getUseUtilityClasses }  from "../shared/helpers.js";
import { fullCenter }  from "../shared/utilities.js";

const useUtilityStyles = getUseUtilityClasses({ fullCenter });

import Typography from "../components/Typography";

export default {
  title: "ComponentLibrary/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

// const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

//

  // Dynamic,
  // TopLeft,
  // TopRight,
  // BottomLeft,
  // BottomRight


export const Dynamic1 = () => (
  <div className="tooltip-container">
    <div style={{ position: "absolute", left: "10px" }}>
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Tooltip Text
          </Typography>
        }
        description="save-hint"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>

    <div style={{ position: "absolute", right: "10px" }}>
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Tooltip Text
          </Typography>
        }
        description="save-hint"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>

    <div style={{ position: "absolute", right: "50%", bottom: "10px" }}>
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Tooltip Text
          </Typography>
        }
        description="save-hint"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>

    <div style={{ position: "absolute", right: "50%", top: "10px" }}>
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Tooltip Text
          </Typography>
        }
        description="save-hint"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>
  </div>
);

export const TopLeft = () => {
  useUtilityStyles();

  return (
    <div className="fullCenter">
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Tooltip Text
          </Typography>
        }
        description="save-hint"
        staticPosition="topLeft"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>
  );
};

export const TopRight = () => {
  useUtilityStyles();

  return (
    <div className="fullCenter">
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Tooltip Text
          </Typography>
        }
        description="save-hint"
        staticPosition="topRight"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>
  );
};

export const BottomLeft = () => {
  useUtilityStyles();

  return (
    <div className="fullCenter">
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Tooltip Text
          </Typography>
        }
        description="save-hint"
        staticPosition="bottomLeft"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>
  );
};

export const BottomRight = () => {
  useUtilityStyles();

  return (
    <div className="fullCenter">
      {" "}
      <Tooltip
        hoverContent={
          <Typography body="small" noTopMargin noBottomMargin>
            Proin pretium, leo ac pellentesque mollis, felis nunc ultrices eros,
            sed gravida augue augue mollis justo. Praesent turpis. Aliquam eu
            nunc. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
            imperdiet, leo. Donec mi odio, faucibus at, scelerisque quis,
            convallis in, nisi. Pellentesque libero tortor, tincidunt et,
            tincidunt eget, semper nec, quam. Nunc nonummy metus. Praesent metus
            tellus, elementum eu, semper a, adipiscing nec, purus. Praesent
            egestas neque eu enim. Nam at tortor in tellus interdum sagittis.
            Fusce convallis metus id felis luctus adipiscing. Cras varius. Etiam
            iaculis nunc ac metus.
          </Typography>
        }
        description="save-hint"
        staticPosition="bottomRight"
      >
        <Typography noTopMargin noBottomMargin>
          Learn More
        </Typography>
      </Tooltip>
    </div>
  );
};

// const tooltipStories = {
//   Dynamic,
//   TopLeft,
//   TopRight,
//   BottomLeft,
//   BottomRight
// };

// export default tooltipStories;
