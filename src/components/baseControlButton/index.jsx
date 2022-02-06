import React from "react";
import { Button } from "@mui/material";

export const BaseControlButton = (props) => {
  return (
    <Button
      variant="contained"
      fullWidth
      disableRipple
      sx={{
        padding: "15px",
        borderRadius: "10px",
        fontSize: "1.25rem",
        fontWeight: "bold",
        border: "1px solid black",
        mt: 10,
        boxShadow: 0,
        "&:hover": {
          boxShadow: 0,
        },
      }}
      {...props}
    ></Button>
  );
};
