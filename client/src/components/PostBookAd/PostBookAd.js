import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import useStyles from "./styles.js";

const PostBookAd = () => {
  const { modal, paper, options, button } = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{
          padding: " 10px",
          margin: "5px",
          color: "white",
          backgroundColor: "#e98074",
          fontStyle: "roboto 700",
        }}
        onClick={handleOpen}
      >
        Add Your Book
      </button>
      <Modal
        className={modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={paper}>
            <div className={options}>
              <h2>Select Which You want to Do</h2>
              <div className={options}>
                <a href="/add">
                  <button className={button} href="/add">
                    Sell Your Book
                  </button>
                </a>
                <button className={button} href="/share">
                  Share Your Book
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PostBookAd;
