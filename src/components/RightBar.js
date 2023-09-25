import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import MuiCheckbox from "./Size";
import CustomizedButtons from "./Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "65px",
    padding: "12px",
    display: "flex",
    flexDirection: "column",
  },
  leftBar: {
    flexGrow: 1,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#000000",
    width: "15%",
    textTransform: "upppercase",
  },
  text: {
    width: "100%",
  },
  pName: {
    fontSize: "48px",
    [theme.breakpoints.down(600)]: {
      fontSize: "32px",
    },
    wordWrap: "break-word",
  },
  pTitle: {
    lineHeight: "120%",
  },
  smallImg: {
    display: "flex",
  },
  info1: {
    color: "#000",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "120%" /* 16.8px */,
    marginTop: "12px",
  },
  info: {
    flexGrow: 1,
    marginTop: "20px",
  },
}));

export default function Right() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box component="div" className={classes.root}>
      <Box component="div">
        <Typography variant="div" component="p" className={classes.pName}>
          JONATHAN SIMKHAI
        </Typography>
      </Box>
      <Box component="div">
        <Typography variant="div" component="div" className={classes.pTitle}>
          Lurex Linen Viscose Jacket in Conchiglia
        </Typography>
      </Box>
      <Box
        component="span"
        sx={{
          fontWeight: "600",
        }}
      >
        $222
      </Box>
      <Box component="div">
        <Box
          component="span"
          sx={{
            fontWeight: "600",
          }}
        >
          Color
        </Box>
        <Box component="span" m={1}>
          <Typography component="span">Conchiglia</Typography>
        </Box>
      </Box>

      <Typography variant="div" component="div" className={classes.smallImg}>
        <Box
          component="img"
          sx={{
            width: "52px",
            height: "63px",
          }}
          alt="The house from the offer."
          src="../assets/image 409.png"
        />

        <Box
          component="img"
          sx={{
            width: "52px",
            height: "63px",
          }}
          alt="The house from the offer."
          src="../assets/image 410.png"
        />
      </Typography>
      <MuiCheckbox />
      <CustomizedButtons />
      <Box className={classes.info}>
        {" "}
        <Typography variant="div" component="div">
          Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
        </Typography>
      </Box>
      <Box className={classes.info}>
        <Typography variant="div" component="div">
          Speak to a Personal Stylist CHAT NOW
        </Typography>
      </Box>
    </Box>
  );
}
