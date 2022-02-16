import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { buttonColors } from "@utils/utils.js";

const disableTheme = createTheme({
  palette: {
    primary: {
      main: buttonColors.primary.main,
      dark: "none",
      contrastText: buttonColors.primary.text,
    },
  },
});

const activeTheme = createTheme({
  palette: {
    primary: {
      main: buttonColors.secondary.main,
      dark: "none",
      contrastText: buttonColors.secondary.text,
    },
  },
});

export const OptionButton = (props) => {
  const [active, setActive] = useState(false);

  //  check when the field of the formValues button is changed, if the button is not the same as the formValues, disable the button
  useEffect(() => {
    if (props.formValues.button != props.children) {
      setActive(false);
    }
  }, [props.formValues.button]);

  // when clicked active and set the formValues field button with its name
  const handleClick = () => {
    setActive(true);
    props.setFormValues({ ...props.formValues, button: props.children });
  };

  return (
    <ThemeProvider theme={active ? activeTheme : disableTheme}>
      <Button
        sx={{
          fontSize: "1rem",
          width: "100%",
          borderRight: !props.last ? "1px solid black" : "none",
          borderRadius: 0,
        }}
        disableRipple
        onClick={handleClick}
        variant="contained"
      >
        <DoneIcon
          fontSize="0.5rem"
          sx={{ display: active ? "block" : "none" }}
        />
        {props.children}
      </Button>
    </ThemeProvider>
  );
};
