



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "YELLOW",
    font:'Helvetica',
    width: '30%',
    height: "500px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    overflowY: "scroll",
  }, 
  tabs: {
    "&.MuiTab-root": {
      width:'25%',
      minWidth:'25%',
      padding:'0px'
    }
  },
  content:{
    color: "#000",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140%" /* 19.6px */,
  },
  linkContent:{
    color: "#000",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "140%",
    marginTop:'10px'
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
    className={classes.root}
    >
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab
          component="span"
          label="DETAILS" {...a11yProps(0)} 
          className={classes.tabs}
           />
        <Tab             
          component="span"
          className={classes.tabs}
          label="DELEVERY" {...a11yProps(1)} />
        <Tab             
            component="span"
            className={classes.tabs}
            label="FIT" {...a11yProps(2)} />
             <Tab             
            component="span"
            className={classes.tabs}
            label="SHARE" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      <Box component="div">
        <Typography
          component="p"
          className={classes.pTitle}
        > 
       The Forte Lurex Linen Viscose Jacket in Mother of Pearl 
       features lunar lavishness by night and by day: a blazer in a 
       linen blend shot with lurex for a shimmering surface that shines like a 
       star in the sky. it has a straight fit with well defined shoulders 
       and a shawl collar culminating in a button and has been flawlessly 
       finished with three jet pockets with a sartorial feel. 
       </Typography>
       <Typography
          variant="p"
          component="p"
          color="textSecondary"
          className={classes.linkContent}
        >See the <a>EDITOR’S NOTE</a ></Typography>

        <Typography
          variant="p"
          component="p"
          color="textSecondary"
          className={classes.linkContent}
        >Learn about the <a>DESIGNER</a></Typography>
      </Box>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

        
      


