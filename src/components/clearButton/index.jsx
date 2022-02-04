import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { buttonColors } from "@utils/palette";
import { BaseControlButton } from "@components/baseControlButton";

const theme = createTheme({
  palette: {
    primary: {
      main: buttonColors.primary.main,
      dark: "none",
      contrastText: buttonColors.primary.text,
    },
  },
});

export const ClearButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseControlButton>Limpar Campos</BaseControlButton>
    </ThemeProvider>
  );
};
