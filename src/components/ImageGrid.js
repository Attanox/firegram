import React from "react";
import useFirestore from "../hooks/useFirestore";
import { withStyles, Card, CircularProgress } from "@material-ui/core";

const styles = () => ({
  root: {
    display: "grid",
    gridGap: "40px",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  card: {
    overflow: "hidden",
    height: "0",
    padding: "50% 0",
    /* padding controls height, will always be perfectly square regardless of width */
    position: "relative",
    transition: "all 0.3s ease-in-out",
    opacity: "0.8",
    "&:hover": {
      opacity: "1",
    },
  },
  image: {
    minWidth: "100%",
    minHeight: "100%",
    maxWidth: "150%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transition: "all 0.3s ease-in-out",
    transform: "translate(-50%, -50%) scale(1)",
    "&:hover": {
      transform: "translate(-50%, -50%) scale(0.8)",
    },
  },
  spinnerWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

const ImageGrid = (props) => {
  const { classes, setSelectedImg } = props;
  const { docs, loading } = useFirestore("images");

  return (
    <React.Fragment>
      {!loading ? (
        <div className={classes.root}>
          {docs &&
            docs.map((doc) => (
              <Card
                key={doc.id}
                className={`${classes.card}`}
                onClick={(e) => setSelectedImg(doc.url)}
              >
                <img
                  className={`${classes.image}`}
                  src={doc.url}
                  alt="travel"
                />
              </Card>
            ))}
        </div>
      ) : (
        <div className={classes.spinnerWrapper}>
          <CircularProgress />
        </div>
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(ImageGrid);
