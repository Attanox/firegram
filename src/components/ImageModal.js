import React from "react";
import { withStyles, Fade, Modal } from "@material-ui/core";

const styles = () => ({
  modalImg: {
    position: "fixed",
    maxHeight: "70%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const ImageModal = (props) => {
  const { classes, setSelectedImg, selectedImg } = props;

  let isModalOpen = Boolean(selectedImg);

  const handleClose = () => setSelectedImg("");

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Fade in={isModalOpen}>
        <img className={`${classes.modalImg}`} src={selectedImg} alt="travel" />
      </Fade>
    </Modal>
  );
};

export default withStyles(styles)(ImageModal);
