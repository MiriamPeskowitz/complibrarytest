import React from "react";

import UnorderedList from "../UnorderedList";

export interface Props {
  children: React.ReactNode[];
  className?: string;
  separator?: any; // or svg?
}

const Breadcrumbs: React.FC<Props> = props => {
  const { children, className, separator = ">" } = props;

  return (
    <UnorderedList spacing={2} className={className} inline variant="unstyled">
      {React.Children.map<React.ReactNode, React.ReactNode>(
        children,
        (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child as React.DetailedReactHTMLElement<any, HTMLElement>,
              {
                ...child.props,
                separator,
                index,
                last: index === children.length - 1,
                key: index
              }
            );
          }
        }
      )}
    </UnorderedList>
  );
};

export default Breadcrumbs;
