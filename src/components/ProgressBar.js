import React, { useEffect } from "react";
import { LinearProgress } from "@material-ui/core";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <LinearProgress variant="determinate" value={progress} />;
};

export default ProgressBar;
