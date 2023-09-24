import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  center: {
    flexGrow: 1,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#000000",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  centerHeading: {
    textAlign: "center",
    color: "var(--Bazaar-Black, #000)",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%" /* 16.8px */,
  },
  link: {
    padding: "15px",
    textTransform: "uppercase",
    color: "#000",
    fontSize: "14px",
    lineHeight: "120%",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box
      component="div"
      sx={{
        height: 233,
        width: "100%",
        marginTop: "130px",
        display: "flex",
        flexDirection: "column",
        textTransform: "uppercase",
      }}
    >
      <Box
        component="div"
        sx={{
          height: 233,
          width: "100%",
          display: "flex",
        }}
      >
        <Typography
          variant="div"
          component="div"
          color="textSecondary"
          className={classes.center}
        >
          <Link href="./" className={classes.link}>
            Jonathan Simkhai
          </Link>
          <Link href="./" className={classes.link}>
            Blazers
          </Link>
          <Link href="./" className={classes.link}>
            Viscose
          </Link>
        </Typography>
      </Box>

      <Box
        component="div"
        sx={{
          height: 233,
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          component="div"
          sx={{
            margin: "auto",
            width: "500px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="p"
            component="p"
            className={classes.centerHeading}
          >
            a note from the editor
          </Typography>

          <Typography component="p" className={classes.center}>
            The Forte Lurex Linen Viscose Jacket in Mother of Pearl features
            lunar lavishness by night and by day: a blazer in a linen blend shot
            with lurex for a shimmering surface that shines like a star in the
            sky.
          </Typography>
          <Typography component="p" className={classes.centerHeading}>
            --By MINNA SHIM, Fashion Editor
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
