import React from "react";
import useFirestore from "../hooks/useFirestore";
import {
  withStyles,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
} from "@material-ui/core";

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
    opacity: "0.8",
  },
  image: {
    minWidth: "100%",
    minHeight: "100%",
    maxWidth: "150%",
    position: "absolute",
    top: "0",
    left: "0",
  },
  spinnerWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
});

const ImageGrid = (props) => {
  const { classes } = props;

  const { docs, loading } = useFirestore("images");

  return (
    <React.Fragment>
      {!loading ? (
        <div className={classes.root}>
          {docs &&
            docs.map((doc) => (
              <Card key={doc.id} className={classes.card}>
                <img className={classes.image} src={doc.url} alt="travel" />
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
