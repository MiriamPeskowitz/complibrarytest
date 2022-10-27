import React from "react";
import { createPortal } from "react-dom";
import ButtonIcon from "../ButtonIcon";
import Typography from "../Typography";
import IconClose from "../../shared/icons/icon-close.svg";
import { getUseStyles } from "../../shared/helpers";
import styles from "./Modal.jss.js";
import classNames from "classnames";

const useStyles = getUseStyles(styles, "bdt-Modal");

const ESCAPE_KEY_CODE = 27;

export interface PortalProps {
  children: any;
  wrapperId?: string;
}

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  close: () => void;
  closeOnBackdropClick?: boolean;
  hasBodyScroll?: boolean;
  title?: string;
  width?: number;
  fullWidth?: boolean;
  zIndex?: number;
  cta?: React.ReactNode;
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const Portal: React.FC<PortalProps> = props => {
  /* Portal component adapted from https://blog.logrocket.com/build-modal-with-react-portals/ */
  const { children, wrapperId = "react-portal-wrapper" } = props;
  const [wrapperElement, setWrapperElement] = React.useState(null);
  React.useEffect(() => () => (document.activeElement as HTMLElement)?.focus());
  React.useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on very first render.
  if (wrapperElement === null) return null;
  /* eslint-disable  @typescript-eslint/no-unsafe-return */
  return createPortal(children, wrapperElement);
  /* eslint-enable  @typescript-eslint/no-unsafe-return */
};

const Modal: React.FC<ModalProps> = props => {
  const {
    children,
    close,
    closeOnBackdropClick = true,
    cta,
    hasBodyScroll = false,
    open = false,
    title,
    width = 528,
    fullWidth = false,
    zIndex = 1000
  } = props;
  const classes = useStyles();
  const modalWidth = fullWidth ? "100%" : width;
  const focusRefEl = React.useRef<HTMLDivElement>(null);

  const escFunction = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === ESCAPE_KEY_CODE) {
        close();
        document.removeEventListener("keydown", escFunction);
      }
    },
    [close]
  );

  React.useEffect(() => {
    if (open) {
      document.addEventListener("keydown", escFunction);
    }
  }, [open, escFunction]);

  return (
    open && (
      <Portal>
        <div
          className={classNames({
            [classes.container]: true,
            [classes.containerScroll]: !hasBodyScroll,
            [classes.open]: open
          })}
          style={{ width: modalWidth, zIndex }}
          role="dialog"
          aria-labelledby={title ? "bdt-dialog-title" : undefined}
          ref={focusRefEl}
          tabIndex={0}
        >
          <div className={classes.header}>
            {title && (
              <Typography
                variant="h3"
                noTopMargin
                noBottomMargin
                id="bdt-dialog-title"
              >
                {title}
              </Typography>
            )}
            <ButtonIcon
              variant="ghost"
              shape="square"
              size="small"
              label="Close"
              icon={<IconClose is="svg" />}
              onClick={close}
              className={classes.close}
              classOverrides={{
                size: classes.closeIcon
              }}
            />
          </div>
          <div
            className={classNames({
              [classes.body]: true,
              [classes.bodyScroll]: hasBodyScroll
            })}
          >
            {children}
          </div>
          {cta && <div className={classes.actions}>{cta}</div>}
        </div>
        <div
          className={classNames({
            [classes.backdrop]: true,
            open
          })}
          style={{ zIndex: zIndex - 1 }}
          onClick={closeOnBackdropClick ? close : undefined}
        />
      </Portal>
    )
  );
};

export default Modal;
