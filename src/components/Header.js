import React from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  Link,
  useScrollTrigger,
  Slide,
  Icon,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import { Box } from "@mui/material";
// LOCAL-STYLING

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuLink: {
    marginRight: theme.spacing(2),
  },
  leftBar: {
    flexGrow: 1,
    fontFamily: "Roboto",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
    color: "#000000",
    width: "20%",
  },
  centerBar: {
    [theme.breakpoints.up(900)]: {
      width: "70%",
    },
  },
  rightBar: {
    width: "10%",
    justifyContent: "flex-end",
    display: "flex",
  },
  imageIcon: {
    height: "100%",
    width: "19.83px",
    borderRadius: "1px",
    angle: "-45 deg",
  },
  iconRoot: {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 400,
    fontFamily: "Roboto",
  },
  headerMenu: {
    display: "flex",
  },
  main: {
    flexDirection: "row",
    display: "flex",
    width: "100%",
    [theme.breakpoints.up(480)]: {
      width: "100%",
    },
  },
  menuList: {
    fontFamily: "Helvetica Now Text",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0em",
    textAlign: "left",
  },
  link: {
    color: "#000000",
    padding: "2px 3px 2px 2px",
    fontFamily: "Helvetica",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
    letterSpacing: "0em",
    textAlign: "left",
    textTransform: "uppercase",
  },
  
}));
function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1050"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
      <AppBar 
      position="fixed" 
      color="textSecondary" 
      elevation={2}>
        <Toolbar>
            <Box  className={classes.leftBar}>
              <Link
                variant="text"
                className={classes.link}
                to="/"
                color="default"
              >
                MY COMPANY.COM
              </Link>
            </Box>
              {!isMobile && (
                <Box className={classes.centerBar}>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/"
                    color="default"
                  >
                    The Edit
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/College"
                    color="default"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/New Arrivals"
                    color="default"
                  >
                    Designers
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/Clothing"
                    color="default"
                  >
                    Clothing
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/Clothing"
                    color="default"
                  >
                    Shoes
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/Clothing"
                    color="default"
                  >
                    Bags
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/Clothing"
                    color="default"
                  >
                    Accessories
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/Clothing"
                    color="default"
                  >
                    Jewelry
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/Clothing"
                    color="default"
                  >
                    Beauty
                  </Link>
                  <Link
                    variant="text"
                    className={classes.link}
                    to="/Clothing"
                    color="default"
                  >
                    Home
                  </Link>
                </Box>
              )}
            <box className={classes.rightBar}>
              <Icon classes={{ root: classes.iconRoot }}>
                <img className={classes.imageIcon} src="../assets/Search.svg" />
              </Icon>
              <Icon classes={{ root: classes.iconRoot }}>
                <img
                  className={classes.imageIcon}
                  src="../assets/icon-bag.svg"
                />
              </Icon>
              {!isMobile ? (
                <Icon classes={{ root: classes.iconRoot }}>
                  <img
                    className={classes.imageIcon}
                    src="../assets/Account.svg"
                  />
                </Icon>
              ) : (
                <Icon
                  color="textPrimary"
                  className={classes.menuLink}
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </Icon>
              )}
            </box>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
