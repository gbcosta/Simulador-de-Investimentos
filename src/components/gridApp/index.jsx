import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { IncomeForm } from "@components/incomeForm";
import { ClearButton } from "@components/clearButton";
import { IndexingForm } from "@components/IndexingForm";
import { SimulationButton } from "@components/simulationButton";
import { SimulationResponseCard } from "@components/simulationResponseCard";
import { SimulationResultContext } from "@contexts/simulationResults";
export const GridApp = () => {
  const [formValues, setFormValues] = useState({
    incomeForm: {},
    IndexingForm: {},
  });
  const { simulationResult } = useContext(SimulationResultContext);
  return (
    <Grid
      container
      sx={{
        background: "#eeeeee",
        padding: "40px 40px 100px 40px",
      }}
      spacing={2}
    >
      <Grid item xs={12}>
        <Box display={"flex"} justifyContent={"center"}>
          <Typography
            variant="h1"
            component="h1"
            fontSize={40}
            fontWeight={700}
          >
            Simulador de Investimentos
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Grid container columnSpacing={2}>
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
          <Grid item xs={6}>
            <IncomeForm setFormValues={setFormValues} formValues={formValues} />
            <ClearButton />
          </Grid>
          <Grid item xs={6}>
            <IndexingForm
              setFormValues={setFormValues}
              formValues={formValues}
            />
            <SimulationButton formValues={formValues} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={7}>
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
          <Grid item xs={12}>
            <Grid
              container
              columnSpacing={12}
              rowSpacing={6}
              sx={{ display: simulationResult != 0 ? "" : "none" }}
            >
              <Grid item xs={4}>
                <SimulationResponseCard title={"Valor Final Bruto"}>
                  R$ {simulationResult.valorFinalBruto}
                </SimulationResponseCard>
              </Grid>
              <Grid item xs={4}>
                <SimulationResponseCard title={"Aliquota do IR"}>
                  {simulationResult.aliquotaIR}%
                </SimulationResponseCard>
              </Grid>
              <Grid item xs={4}>
                <SimulationResponseCard title={"Valor Pago em IR"}>
                  R$ {simulationResult.valorPagoIR}
                </SimulationResponseCard>
              </Grid>
              <Grid item xs={4}>
                <SimulationResponseCard title={"Valor Final Liquido"}>
                  R$ {simulationResult.valorFinalLiquido}
                </SimulationResponseCard>
              </Grid>
              <Grid item xs={4}>
                <SimulationResponseCard title={"Valor Total Investido"}>
                  R$ {simulationResult.valorTotalInvestido}
                </SimulationResponseCard>
              </Grid>
              <Grid item xs={4}>
                <SimulationResponseCard title={"Ganho Liquido"}>
                  R$ {simulationResult.ganhoLiquido}
                </SimulationResponseCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
