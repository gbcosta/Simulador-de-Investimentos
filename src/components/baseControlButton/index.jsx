import React from "react";
import { Button } from "@mui/material";

export const BaseControlButton = (props) => {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        padding: "15px",
        borderRadius: "10px",
        fontSize: "1.25rem",
        fontWeight: "bold",
        border: "1px solid black",
        mt: "30px",
      }}
      {...props}
    >
      Simular
    </Button>
  );
};
