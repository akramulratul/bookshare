import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  paper: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginLeft: "0px",
    marginRight: "0px",
    overflow: "none",
    width: "100%",
    zIndex: "-1",
    transform: "translateY(10%,0%)",
    "@media (max-width : 700px)": {
      height: "600px",
    },
  },
  content: {
    textAlign: "center",
    zIndex: "10",
    fontSize: "20px",
    fontWeight: "400",
    fontFamily: "'Source Code Pro', monospace",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "#eae7dc",
    "@media (max-width : 700px)": {
      fontSize: "30px",
    },
  },

  text: {
    "@media (max-width : 700px)": {
      fontSize: "25px",
    },
  },

  smallText: {
    "@media (max-width : 700px)": {
      fontSize: "12px",
    },
  },

  contentBold: {
    background: "-webkit-linear-gradient(#e73426, #e85a4f)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "30%",
      left: "50%",
      fontSize: "30px",
    },
  },
  parent: {
    width: "100%",
  },
}));

export default styles;
