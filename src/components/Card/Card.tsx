import * as React from "react";

import Button from "../Button";
import Typography from "../Typography";

import { getUseStyles } from "../../shared/helpers";

import styles from "./Card.jss.js";

import classNames from "classnames";
const useStyles = getUseStyles(styles, "bdt-Card");

export interface Props {
  featuredImage?: string;
  featuredImageDescription?: string;
  imageVariant?: "cover" | "contain";
  title?: string;
  text?: string;
  variant?: "horizontal" | "vertical";
  button?: boolean;
  buttonText?: string;
}

const Card: React.FC<Props> = props => {
  const {
    variant = "vertical",
    featuredImage,
    featuredImageDescription = "Preview",
    imageVariant = "cover",
    title,
    text,
    button,
    buttonText
  } = props;
  const classes = useStyles();
  const variantClass = variant !== "vertical";

  return (
    <div
      className={classNames({
        [classes.card]: true,
        [classes[variant]]: variantClass
      })}
    >
      {featuredImage && (
        <div
          className={classNames({
            [classes.imageContainer]: true,
            [classes[variant]]: variantClass
          })}
        >
          <img
            src={featuredImage}
            className={classNames({
              [classes.image]: true,
              [classes.cover]: imageVariant === "cover",
              [classes.contain]: imageVariant === "contain"
            })}
            alt={featuredImageDescription}
          />
        </div>
      )}
      <div
        className={classNames({
          [classes.detailsContainer]: true,
          [classes[variant]]: variantClass
        })}
      >
        {title && (
          <Typography variant="h4" noTopMargin>
            {title}
          </Typography>
        )}
        {text && (
          <Typography noTopMargin className={classes.text}>
            {text}
          </Typography>
        )}
        {button && (
          <div className={classes.actionsContainer}>
            <Button>{buttonText}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
