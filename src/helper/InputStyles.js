import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      color: "#515151",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      width: "100%",
      margin: "0px",
      "&::placeholder": {
        textOverflow: "ellipsis !important",
        color: "blue",
      },
    },
  },
}));

export const useHelperTextStyles = makeStyles((theme) => ({
  root: {
    fontSize: "12px",
    lineHeight: "20px",
  },
}));

