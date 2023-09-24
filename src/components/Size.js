import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';

const options = [
  {
    id: "XS", 
  },
  {
    id: "SM"
  },
  {
    id: "M"
  },{
    id: "L"
  },{
    id: "XXL"
  },
];

export default function RadioButtonsGroup() {
 const [select,setSlected]=React.useState("SM")
  
  return (
    <FormControl component="fieldset">
      <Box component="div" >
          <Box component="span" sx={{
            fontWeight:'600'
          }}>
            SIZE 
          </Box>
          <Box component="span" m={1}>
              {select}
          </Box>
      </Box>
      {/* <FormLabel component="legend">SIZE {select}</FormLabel> */}

      <div
        style={{
        display: "flex",
       flexDirection: "row",
       marginTop: "14px",
      marginBottom: "29px",
     }}
     >
      {/* <RadioGroup
        defaultValue={options[0]}
        onChange={(e, value) => {
          const id = parseInt(value, 10);
          const option = options.find((o) => o.id === id);
          setSlected(option);
        }}
        
      > */}


        {
//         options.map((o) => (
//           <FormControlLabel
//             value={o.id}
//             control={<Radio />}
//             xs={{
//               borderRadius: "100px",
// border: "1px solid var(--Light-Grey, #E5E5E5)",
// background: "var(--White, #FFF)"
//             }}
//           />
//         ))

            options.map((o) => (
            <span style={
                      { 
                        borderRadius: "94px",
    border: "1px solid var(--Light-Grey, #E5E5E5)",
    background: "var(--White, #FFF)",
    width: "33px",
    height: "12px",
    padding: "6px 8px 7px 11px",
    width: "32px",
    height: "16px",
    flexShrink: "0",
    display: "flex",
    textAlign: "center",
    margin: "0px 4px 0px 2px",
     
                      }

                    }
                    >
                        {o.id}
            </span>
        ))
        }

        
      </div>
    </FormControl>
  );
}
