import * as React from "react";

import Grid from "../components/Grid";
import InputError from "../components/InputError";
import ListItem from "../components/ListItem";
import Typography from "../components/Typography";
import UnorderedList from "../components/UnorderedList";
import FileUpload from "../components/FileUpload";

const Solid = () => {
  const [fileName, setFileName] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please upload the proper file type", "Second error"];

  const onImageUpload = ({ reader }) => {
    setFileName(null);
    setImagePreview(reader.result);
  };

  const onFileUpload = ({ file }) => {
    setFileName(file.name);
    setImagePreview(null);
  };

  return (
    <Grid spacing={4} alignItems="items-start" direction="column">
      <FileUpload
        id="upload-image-1"
        label="Upload image"
        onChangeAction={onImageUpload}
        required
      />
      <FileUpload
        id="upload-file-1"
        label="Upload file"
        onChangeAction={onFileUpload}
        helperText="Some helper text"
      />
      <div>
        <FileUpload
          disabled={true}
          id="upload-file-1.2"
          label="Disabled"
          onChangeAction={onFileUpload}
        />
        {hasError && (
          <UnorderedList
            noBottomMargin
            noTopMargin
            noLeftMargin
            variant="unstyled"
          >
            {errors.map((error, i) => (
              <ListItem key={i}>
                <InputError>{error}</InputError>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </div>
      <FileUpload
        disabled={true}
        id="upload-file-1.3"
        label="Loading"
        loading
        onChangeAction={onFileUpload}
      />
      {fileName && <Typography>{fileName}</Typography>}
      {imagePreview && (
        <img src={imagePreview} width="35%" height="35%" alt="Preview" />
      )}
    </Grid>
  );
};

const Outlined = () => {
  const [fileName, setFileName] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please upload the proper file type", "Second error"];

  const onImageUpload = ({ reader }) => {
    setFileName(null);
    setImagePreview(reader.result);
  };

  const onFileUpload = ({ file }) => {
    setFileName(file.name);
    setImagePreview(null);
  };

  return (
    <Grid spacing={4} alignItems="items-start" direction="column">
      <FileUpload
        id="upload-image-2"
        label="Upload image"
        variant="outlined"
        onChangeAction={onImageUpload}
        required
      />
      <FileUpload
        id="upload-file-2"
        label="Upload file"
        variant="outlined"
        onChangeAction={onFileUpload}
        helperText="Some helper text"
      />
      <div>
        <FileUpload
          disabled
          id="upload-file-2.2"
          label="Upload file"
          variant="outlined"
          onChangeAction={onFileUpload}
        />
        {hasError && (
          <UnorderedList
            noBottomMargin
            noTopMargin
            noLeftMargin
            variant="unstyled"
          >
            {errors.map((error, i) => (
              <ListItem key={i}>
                <InputError>{error}</InputError>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </div>
      <FileUpload
        loading
        id="upload-file-2.3"
        label="Loading"
        variant="outlined"
        onChangeAction={onFileUpload}
      />
      {fileName && <Typography>{fileName}</Typography>}
      {imagePreview && (
        <img src={imagePreview} width="35%" height="35%" alt="Preview" />
      )}
    </Grid>
  );
};

const Text = () => {
  const [fileName, setFileName] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please upload the proper file type", "Second error"];

  const onImageUpload = ({ reader }) => {
    setFileName(null);
    setImagePreview(reader.result);
  };

  const onFileUpload = ({ file }) => {
    setFileName(file.name);
    setImagePreview(null);
  };

  return (
    <Grid spacing={4} alignItems="items-start" direction="column">
      <FileUpload
        id="upload-image-3"
        label="Upload image"
        variant="text"
        onChangeAction={onImageUpload}
        required
      />
      <FileUpload
        id="upload-file-3"
        label="Upload file"
        variant="text"
        onChangeAction={onFileUpload}
        helperText="Some helper text"
      />
      <div>
        <FileUpload
          disabled
          id="upload-file-3.2"
          label="Upload file"
          variant="text"
          onChangeAction={onFileUpload}
        />
        {hasError && (
          <UnorderedList
            noBottomMargin
            noTopMargin
            noLeftMargin
            variant="unstyled"
          >
            {errors.map((error, i) => (
              <ListItem key={i}>
                <InputError>{error}</InputError>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </div>
      <FileUpload
        loading
        id="upload-file-3.2"
        label="Loading"
        variant="text"
        onChangeAction={onFileUpload}
      />
      {fileName && <Typography>{fileName}</Typography>}
      {imagePreview && (
        <img src={imagePreview} width="35%" height="35%" alt="Preview" />
      )}
    </Grid>
  );
};

const NoBottomMargin = () => {
  const [fileName, setFileName] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);

  const [hasError, setHasError] = React.useState(true);
  const errors = ["Please upload the proper file type", "Second error"];

  const onImageUpload = ({ reader }) => {
    setFileName(null);
    setImagePreview(reader.result);
  };

  const onFileUpload = ({ file }) => {
    setFileName(file.name);
    setImagePreview(null);
  };

  return (
    <Grid spacing={4} alignItems="items-start" direction="column">
      <FileUpload
        id="upload-file-1"
        label="Upload file"
        onChangeAction={onFileUpload}
        helperText="Some helper text"
        noBottomMargin
      />
      <div>
        <FileUpload
          disabled={true}
          id="upload-file-1.2"
          label="Disabled"
          onChangeAction={onFileUpload}
          noBottomMargin
        />
        {hasError && (
          <UnorderedList
            noBottomMargin
            noTopMargin
            noLeftMargin
            variant="unstyled"
          >
            {errors.map((error, i) => (
              <ListItem key={i}>
                <InputError>{error}</InputError>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </div>
    </Grid>
  );
};

const fileUploadStories = {
  Solid,
  Outlined,
  Text,
  NoBottomMargin
};

export default fileUploadStories;
