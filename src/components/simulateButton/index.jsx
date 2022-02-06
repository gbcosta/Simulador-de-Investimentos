import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { buttonColors } from "@utils/utils";
import { BaseControlButton } from "@components/baseControlButton";

const disableTheme = createTheme({
  palette: {
    primary: {
      main: buttonColors.disable.main,
      dark: "none",
      contrastText: buttonColors.disable.text,
    },
  },
});

const activeTheme = createTheme({
  palette: {
    primary: {
      main: buttonColors.secondary.main,
      dark: "none",
      contrastText: buttonColors.disable.text,
    },
  },
});

export const SimulateButton = (props) => {
  const [isActive, setIsActive] = useState(false);

  //check if the forms are filled
  useEffect(() => {
    setIsActive(false);

    for (let key in props.formValues.incomeForm) {
      if (!props.formValues.incomeForm[key]) return;
    }

    for (let key in props.formValues.indexingForm) {
      if (!props.formValues.indexingForm[key]) return;
    }

    setIsActive(true);
  }, [props.formValues]);

  return (
    <ThemeProvider theme={isActive ? activeTheme : disableTheme}>
      <BaseControlButton>Simular</BaseControlButton>
    </ThemeProvider>
  );
};
