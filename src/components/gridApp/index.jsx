import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { IncomeForm } from "@components/incomeForm";
import { ClearButton } from "@components/clearButton";
import { IndexingForm } from "@components/IndexingForm";
import { SimulationButton } from "@components/simulationButton";
import { SimulationResponseCard } from "@components/simulationResponseCard";
import { SimulationResultContext } from "@contexts/simulationResults";
import { Chart } from "@components/chart";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    keys: ["xs", "sm", "up", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      up: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const GridApp = () => {
  const [incomeValues, setIncomeValues] = useState({
    aporte: null,
    prazo: null,
    ipca: null,
    button: null,
  });

  const [indexingValues, setIndexingValues] = useState({
    aporteMensal: null,
    rentabilidade: null,
    cdi: null,
    button: null,
  });

  const { simulationResult } = useContext(SimulationResultContext);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        sx={{
          background: "#eeeeee",
          padding: {
            md: "2.5rem 2.5rem 5rem 2.5rem",
            xs: "1rem 1rem 2rem 1rem",
          },
        }}
      >
        <Grid item xs={12}>
          <Box
            display={"flex"}
            sx={{ textAlign: "center", justifyContent: "center", mb: 6 }}
          >
            <Typography
              variant="h1"
              component="h1"
              fontSize={{ xs: 30, md: 40 }}
              fontWeight={700}
              textAlign={"center"}
            >
              Simulador de Investimentos
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} up={5}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                fontSize={25}
                fontWeight={700}
                mb={4}
              >
                Simulador
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <IncomeForm
                setFormValues={setIncomeValues}
                formValues={incomeValues}
              />
            </Grid>
            <Grid item xs={12} lg={6} sx={{ mt: { lg: 0, xs: 4 } }}>
              <IndexingForm
                setFormValues={setIndexingValues}
                formValues={indexingValues}
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                display={"flex"}
                flexDirection={{ lg: "row", xs: "column" }}
                sx={{ mt: 5, gap: 2 }}
              >
                <ClearButton
                  setIncomeValues={setIncomeValues}
                  setIndexingValues={setIndexingValues}
                />
                <SimulationButton
                  incomeValues={incomeValues}
                  indexingValues={indexingValues}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} up={7} mt={{ xs: 6, up: 0 }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h1"
                component="h1"
                fontSize={25}
                fontWeight={700}
                mb={8}
              >
                Resultado da Simulação
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: simulationResult != 0 ? "" : "none",
              }}
            >
              <Grid container columnSpacing={{ xl: 10, xs: 4 }} rowSpacing={6}>
                <Grid item lg={4} md={6} xs={12}>
                  <SimulationResponseCard title={"Valor Final Bruto"}>
                    R$ {simulationResult.valorFinalBruto}
                  </SimulationResponseCard>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SimulationResponseCard title={"Aliquota do IR"}>
                    {simulationResult.aliquotaIR}%
                  </SimulationResponseCard>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SimulationResponseCard title={"Valor Pago em IR"}>
                    R$ {simulationResult.valorPagoIR}
                  </SimulationResponseCard>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SimulationResponseCard
                    title={"Valor Final Liquido"}
                    color={"#53e040"}
                  >
                    R$ {simulationResult.valorFinalLiquido}
                  </SimulationResponseCard>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SimulationResponseCard title={"Valor Total Investido"}>
                    R$ {simulationResult.valorTotalInvestido}
                  </SimulationResponseCard>
                </Grid>
                <Grid item lg={4} md={6} xs={12}>
                  <SimulationResponseCard
                    title={"Ganho Liquido"}
                    color={"#53e040"}
                  >
                    R$ {simulationResult.ganhoLiquido}
                  </SimulationResponseCard>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: simulationResult != 0 ? "" : "none",
              }}
            >
              <Chart></Chart>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
