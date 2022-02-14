import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { buttonColors } from "@utils/utils";
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

export const ClearButton = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BaseControlButton
        onClick={() => {
          //find inputs and reset
          const inputs = Array.from(document.querySelectorAll("input"));
          inputs.map((input) => {
            input.value = "";
          });

          //clear button and fields
          props.setIncomeValues({
            aporte: null,
            prazo: null,
            ipca: null,
            button: null,
          });

          props.setIndexingValues({
            aporteMensal: null,
            rentabilidade: null,
            cdi: null,
            button: null,
          });
        }}
      >
        Limpar Campos
      </BaseControlButton>
    </ThemeProvider>
  );
};
