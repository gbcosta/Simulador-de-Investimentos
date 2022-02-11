import React, { useEffect, useState, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { buttonColors } from "@utils/utils";
import { BaseControlButton } from "@components/baseControlButton";
import { Api } from "@api/api";
import { SimulationResultContext } from "@contexts/simulationResults";

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

export const SimulationButton = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { simulationResult, setSimulationResult } = React.useContext(
    SimulationResultContext
  );

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

  const handleClick = async () => {
    if (!isActive) return;
    const api = new Api();
    const indexacao = props.formValues.indexingForm.button
      .toLowerCase()
      .replace(/é/, "e");

    const rendimento = props.formValues.incomeForm.button.toLowerCase();
    const simulation = await api.simulacoes(indexacao, rendimento);
    console.log(indexacao, rendimento);
    setSimulationResult(simulation);
  };

  return (
    <ThemeProvider theme={isActive ? activeTheme : disableTheme}>
      <BaseControlButton onClick={handleClick}>Simular</BaseControlButton>
    </ThemeProvider>
  );
};
