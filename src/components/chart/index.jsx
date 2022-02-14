import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { buttonColors } from "@utils/utils";
import { SimulationResultContext } from "@contexts/simulationResults";

function mergeObjectsToArray(objectA, objectB) {
  if (objectA == undefined || objectB == undefined) return [];

  const arrayResult = [];

  const arrayA = Object.values(objectA);
  const arrayB = Object.values(objectB);

  for (let i = 0; i < arrayA.length; i++) {
    const elementA = arrayA[i];
    const elementB = arrayB[i];

    arrayResult.push({ a: elementA, b: elementB });
  }

  return arrayResult;
}

export const Chart = () => {
  const { simulationResult } = useContext(SimulationResultContext);
  const [chartValues, setChartValues] = useState([]);
  //merge objects and convert to array
  useEffect(() => {
    setChartValues(
      mergeObjectsToArray(
        simulationResult.graficoValores?.comAporte,
        simulationResult.graficoValores?.semAporte
      )
    );
  }, [simulationResult]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "inline-flex",
          height: "100%",
          minHeight: 300,
          mt: 6,
        }}
      >
        <Typography
          sx={{
            alignSelf: "center",
            fontWeight: "500",
            fontSize: "0.8rem",
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
          }}
        >
          Valor(R$)
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            ml: 0.5,
            overflow: "auto",
          }}
        >
          {chartValues.map((value, key) => {
            return (
              <Quads
                key={key}
                number={key}
                withContribution={value.a}
                noContribution={value.b}
              ></Quads>
            );
          })}
        </Box>
      </Box>
      <Typography
        sx={{
          alignSelf: "center",
          fontWeight: "500",
          fontSize: "0.8rem",
        }}
      >
        Tempo(meses)
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 6, mt: 1 }}>
        <ChartBottomText color={buttonColors.secondary.main}>
          Com aporte
        </ChartBottomText>
        <ChartBottomText color={"black"}>Sem Aporte</ChartBottomText>
      </Box>
    </Box>
  );
};

const ChartBottomText = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <Box
        sx={{
          borderRadius: "100%",
          width: 15,
          height: 15,
          backgroundColor: props.color,
        }}
      ></Box>
      <Typography>{props.children}</Typography>
    </Box>
  );
};

const Quads = (props) => {
  const maxHeight = 125;
  const maxValue = 2050;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
        alignSelf: "flex-end",
      }}
    >
      <Box
        sx={{
          backgroundColor: buttonColors.secondary.main,
          width: "30px",
          height: ((props.withContribution * 100) / maxValue / 100) * maxHeight,
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "black",
          width: "30px",
          height: ((props.noContribution * 100) / maxValue / 100) * maxHeight,
        }}
      ></Box>
      <Typography sx={{ textAlign: "center" }}>{props.number}</Typography>
    </Box>
  );
};
