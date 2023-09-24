import * as React from "react";
import Box from "@mui/material/Box";
import { Icon, makeStyles } from "@material-ui/core";
import { ScrollContext } from "../context";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "30%",
    [theme.breakpoints.down(600)]: {
      width: "100%",
      height: "100%",
    },
    height: "500px",
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
  const classes = useStyles();
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    console.log(isScroll);
  };
  return (
    <Box className={classes.root} onScroll={handleScroll}>
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
    </Box>
  );
}
