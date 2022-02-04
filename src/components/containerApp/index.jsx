import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { IncomeForm } from "@components/incomeForm";
import { ClearButton } from "@components/clearButton";
import { SimulateButton } from "@components/simulateButton";
import { IndexingForm } from "@components/IndexingForm";

export const ContainerApp = () => {
  return (
    <Grid
      container
      sx={{
        background: "#efefef",
      }}
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
      <Grid item xs={4}>
        <Typography variant="h1" component="h1" fontSize={25} fontWeight={700}>
          Simulador
        </Typography>
      </Grid>
      <Grid item xs={8}></Grid>
      <Grid item xs={2}>
        <IncomeForm />
        <ClearButton />
      </Grid>
      <Grid item xs={2}>
        <IndexingForm />
        <SimulateButton />
      </Grid>
    </Grid>
  );
};
