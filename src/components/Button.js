import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const BootstrapButton = styled(Button)({
  width: "300px",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#000",
  color: "#FFFFFF",
  borderColor: "#0063cc",
  borderRadius: "100px",
  border: "0.999px solid var(--Bazaar-Black, #000)",
  background: "var(--Bazaar-Black, #000)",
  width: "100%",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export default function CustomizedButtons() {
  return (
    <Stack spacing={2} direction="row">
      <BootstrapButton variant="contained" disableRipple>
        ADD TO BAG
      </BootstrapButton>
    </Stack>
  );
}
