import React from "react";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";

const Gallery = () => {
  return (
    <div>
      <h1>Gallery</h1>
      <UploadForm />
      <ImageGrid />
    </div>
  );
};

export default Gallery;
