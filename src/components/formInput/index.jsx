import React from "react";
import { InputBase, Box, Typography } from "@mui/material";

export const FormInput = (props) => {
  return (
    <Box mt={6}>
      <Typography mb={1}>{props.children}</Typography>
      <InputBase
        sx={{
          borderBottom: "2px solid black",
          fontSize: "1.25rem",
          width: "100%",
        }}
      ></InputBase>
    </Box>
  );
};
