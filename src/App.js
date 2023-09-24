import Header from "./components/Header";
import "fontsource-roboto";
import { useMediaQuery } from "@material-ui/core";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import './styles.css';
import LeftBar from './components/LeftBar';
import CenterBar from './components/CenterBar';
import RightBar from './components/RightBar';
import { ScrollContext} from "./context/";
import { useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@mui/material";

const theme = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: '#19857b',
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
        }
      }
    }
  }
});

function App() {
  const [isScroll,setScroll] = useState("");
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
       <BrowserRouter> 
        <Stack spacing={2} direction="column">
          <ScrollContext.Provider value={{ isScroll,setScroll}}>
            <Header />
            <div
            style={{
              marginTop:'60px',
              display:'flex',
            }}
            >
              {
                !isMobile &&
                <LeftBar/>
              }
              <div style={{
                display:'flex',
                flexDirection:isMobile ? 'column':'row'
              }}>
                <CenterBar/>
                <RightBar/>
              </div>
            </div>
            {
            isScroll && (
              <Footer />
              )
            }
        </ScrollContext.Provider>
      </Stack>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
