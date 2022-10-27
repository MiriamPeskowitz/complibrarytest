import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";
import InputLabel from "../components/InputLabel";
import TextArea from "../components/TextArea";
import Typography from "../components/Typography";

import Modal from "../components/Modal";

export default {
  title: "ComponentLibrary/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

// const Template: ComponentStory<typeof Modal> = (args) => <Modal  {...args} />;

export const DefaultModal = () => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const Submit = () => <Button onClick={closeModal}>Submit</Button>;

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        open={open}
        close={closeModal}
        title="Modal Title"
        cta={<Submit />}
      >
        <Typography variant="p" noTopMargin>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
      </Modal>
    </>
  );
};

export const ModalBodyScroll = () => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const Submit = () => <Button onClick={closeModal}>Submit</Button>;

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        open={open}
        close={closeModal}
        title="Modal Title"
        hasBodyScroll
        cta={<Submit />}
      >
        <Typography variant="p" noTopMargin>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
      </Modal>
    </>
  );
};

export const ModalBodyScrollNoCTA = () => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal open={open} close={closeModal} title="Modal Title" hasBodyScroll>
        <Typography variant="p" noTopMargin>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
      </Modal>
    </>
  );
};

export const ModalContainerScroll = () => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const Submit = () => <Button onClick={closeModal}>Submit</Button>;

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        open={open}
        close={closeModal}
        title="Modal Title"
        cta={<Submit />}
      >
        <Typography variant="p" noTopMargin>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
      </Modal>
    </>
  );
};

export const FullWidthModal = () => {
  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const Submit = () => <Button onClick={closeModal}>Submit</Button>;

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        open={open}
        close={closeModal}
        title="Modal Title"
        fullWidth
        cta={<Submit />}
      >
        <Typography variant="p" noTopMargin>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Typography variant="p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </Typography>
      </Modal>
    </>
  );
};

export const ModalWithInput = () => {
  const [textAreaData, setTextAreaData] = React.useState("");
  const textAreaOnChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setTextAreaData(e.currentTarget.value);
  };
  const maxLength = 255;

  const [open, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const Submit = () => <Button onClick={closeModal}>Submit</Button>;

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal
        open={open}
        close={closeModal}
        title="Modal Title"
        hasBodyScroll
        cta={<Submit />}
      >
        <InputLabel label="Character Count" htmlFor="text-area" required />
        <TextArea
          id="text-area"
          placeholder="Placeholder"
          showCharacterCount
          maxLength={maxLength}
          onChange={textAreaOnChange}
          value={textAreaData}
          hasError={textAreaData.length > maxLength}
        />
      </Modal>
    </>
  );
};

// const modalStories = {
//   DefaultModal,
//   ModalBodyScroll,
//   ModalBodyScrollNoCTA,
//   ModalContainerScroll,
//   FullWidthModal,
//   ModalWithInput
// };

