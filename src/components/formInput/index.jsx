import React, { useState } from "react";
import { InputBase, Box, Typography } from "@mui/material";

export const FormInput = (props) => {
  const [validField, setValidField] = useState(false);
  const fieldColor = validField ? "black" : "red";

  const checkField = (event) => {
    event.target.value.match(props.rgx)
      ? setContext(true, event.target.value)
      : setContext(false, null);
  };

  const setContext = (isValidField, inputValue) => {
    setValidField(isValidField);
    props.contextSetState({
      ...props.contextState,
      [props.variableName]: inputValue,
    });
  };

  return (
    <Box mt={6} position={"relative"}>
      <Typography mb={1} sx={{ color: fieldColor }}>
        {props.children}
      </Typography>
      <InputBase
        sx={{
          borderBottom: ` 2px solid ${fieldColor}`,
          fontSize: "1.25rem",
          width: "100%",
        }}
        onChange={checkField}
      ></InputBase>
      <Typography
        sx={{
          color: "red",
          display: validField ? "none" : "block",
          position: "absolute",
          mt: 1,
        }}
      >
        {props.message}
      </Typography>
    </Box>
  );
};
