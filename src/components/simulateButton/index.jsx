import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { buttonColors } from "@utils/palette";
import { BaseControlButton } from "@components/baseControlButton";
const theme = createTheme({
  palette: {
    primary: {
      main: buttonColors.disable.main,
      dark: "none",
      contrastText: buttonColors.disable.text,
    },
  },
});

export const SimulateButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseControlButton>Simular</BaseControlButton>
    </ThemeProvider>
  );
};
