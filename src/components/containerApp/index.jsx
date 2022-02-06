import { Box, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { IncomeForm } from "@components/incomeForm";
import { ClearButton } from "@components/clearButton";
import { SimulateButton } from "@components/simulateButton";
import { IndexingForm } from "@components/IndexingForm";

export const ContainerApp = () => {
  const [formValues, setFormValues] = useState({
    incomeForm: {},
    IndexingForm: {},
  });

  return (
    <Grid
      container
      sx={{
        background: "#dfdfdf",
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
            mb={2}
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
      <Grid item xs={7}></Grid>
      <Grid item xs={2.5}>
        <IncomeForm setFormValues={setFormValues} formValues={formValues} />
        <ClearButton />
      </Grid>
      <Grid item xs={2.5}>
        <IndexingForm setFormValues={setFormValues} formValues={formValues} />
        <SimulateButton formValues={formValues} />
      </Grid>
    </Grid>
  );
};
