import React, { useState } from "react";
import UploadForm from "../components/UploadForm";
import ImageGrid from "../components/ImageGrid";
import ImageModal from "../components/ImageModal";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState("");

  return (
    <div>
      <h1>Gallery</h1>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <ImageModal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
    </div>
  );
};

export default Gallery;
