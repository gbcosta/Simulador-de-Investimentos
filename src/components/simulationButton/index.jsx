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
  const { setSimulationResult } = useContext(SimulationResultContext);

  // checks if the fields of indexingValues e incomeValues are full
  useEffect(() => {
    setIsActive(false);
    for (let key in props.incomeValues) {
      if (!props.incomeValues[key]) return;
    }

    for (let key in props.indexingValues) {
      if (!props.indexingValues[key]) return;
    }

    setIsActive(true);
  }, [props.incomeValues, props.indexingValues]);

  // if is active call the api and send the data to simulationContext then the chart can use
  const handleClick = () => {
    if (!isActive) return;
    const api = new Api();
    const indexacao = props.indexingValues.button
      .toLowerCase()
      .replace(/é/, "e");

    const rendimento = props.incomeValues.button.toLowerCase();

    api.simulacoes(indexacao, rendimento).then((data) => {
      setSimulationResult(data);
    });
  };

  return (
    <ThemeProvider theme={isActive ? activeTheme : disableTheme}>
      <BaseControlButton onClick={handleClick}>Simular</BaseControlButton>
    </ThemeProvider>
  );
};
