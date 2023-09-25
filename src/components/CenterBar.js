import * as React from "react";
import Box from "@mui/material/Box";
import { Icon, makeStyles, useMediaQuery } from "@material-ui/core";
import { ScrollContext } from "../context";
import Carousel from "./Carousel";
import { useTheme } from "@emotion/react";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "675px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    overflowY: "scroll",
    marginTop: "30px",
  },
  hearIcon: {
    position: "fixed",
    top: "100px",
    left: "62%",
    float: "right",
    [theme.breakpoints.down(600)]: {
      left: "90%",
    },
  },
}));

export default function CenterBar(props) {
  const { isScroll, setScroll } = React.useContext(ScrollContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  return (
    <Box className={classes.root} onScroll={handleScroll}>
      {isMobile ? (
        <Carousel />
      ) : (
        <>
          <Icon classes={{ root: classes.hearIcon }}>
            <img src="../assets/Heart.svg" />
          </Icon>
          <Box component="div">
            <Icon>
              <img width="100%" src="../assets/image 409.png" />
            </Icon>
          </Box>
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "50%",
                  height: "342px",
                }}
                alt="The house from the offer."
                src="../assets/image 410.png"
              />
              <Box
                component="img"
                sx={{
                  width: "50%",
                  height: "342px",
                }}
                alt="The house from the offer."
                src="../assets/image 410 (1).png"
              />
            </Box>

            <Box
              component="img"
              sx={{
                height: "675px",
                flexShrink: 0,
              }}
              alt="The house from the offer."
              src="../assets/image 409 (1).png"
            />
            <Box
              component="img"
              sx={{
                height: "675px",
                flexShrink: 0,
              }}
              alt="The house from the offer."
              src="../assets/image 410 (2).png"
            />
          </>
        </>
      )}
    </Box>
  );
}
