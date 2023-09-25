import Header from "./components/Header";
import "fontsource-roboto";
import { useMediaQuery } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import "./styles.css";
import LeftBar from "./components/LeftBar";
import CenterBar from "./components/CenterBar";
import RightBar from "./components/RightBar";
import { ScrollContext } from "./context/";
import { useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#19857b",
    },
  },
  overrides: {
    MuiTab: {
      root: {
        "&.MuiTab-root": {
          backgroundColor: "black",
          border: 0,
          borderBottom: "2px solid",
          "&:hover": {
            border: 0,
            borderBottom: "2px solid",
          },
        },
        "&.Mui-selected": {
          backgroundColor: "none",
          borderBottom: "2px solid #373985",
          borderColor: "#373985",
        },
      },
    },
    Container: {
      root: {
        "&.MuiContainer-root": {
          backgroundColor: "black",
        },
      },
    },
  },
});

function App() {
  const [isScroll, setScroll] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  console.log("isScroll", isScroll);
  console.log("isMobile", isMobile);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollContext.Provider value={{ isScroll, setScroll }}>
          <Container
            sx={{
              bgcolor: "#cfe8fc",
              height: "100vh",
              paddingLeft: "0px",
            }}
          >
            <Header />
            <Box sx={{ 
              flexGrow: 1,
              marginTop: "60px" ,
              height:'675px'
              }}>
              <Grid container>
                {!isMobile && (
                  <Grid xs={4} md={4}>
                    <LeftBar />
                  </Grid>
                )}
                <Grid
                  item
                  // sx={8}
                  md={8}
                  sx={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    width: isMobile ? "100%" : "66.66%",
                  }}
                >
                  <Grid xs={12} md={6}>
                    <CenterBar />
                  </Grid>
                  <Grid xs={12} md={6}>
                    <RightBar />
                  </Grid>
                </Grid>
              </Grid>
              {
              isMobile || isScroll ?  
              (<Footer />):''
              }
            </Box>
          </Container>
        </ScrollContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
