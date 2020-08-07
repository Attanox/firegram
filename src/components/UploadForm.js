import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const allowedTypes = ["image/png", "image/jpeg"];

  const handleOnChange = (e) => {
    const {
      target: { files },
    } = e;
    const selected = files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please, select file of a type .jpeg or .png");
    }
  };

  return (
    <React.Fragment>
      <input type="file" onChange={handleOnChange} />

      <Typography variant="caption" display="block" gutterBottom>
        {error && <span>{error}</span>}
        {file && <span>{file.name}</span>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </Typography>
    </React.Fragment>
  );
};

export default UploadForm;
