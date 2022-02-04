import React from "react";
import { FormName } from "@components/formName";
import { Box } from "@mui/material";
import { GroupOptionsButtons } from "@components/groupOptionsButtons";
import { FormInput } from "@components/formInput";

export const IncomeForm = () => {
  return (
    <Box display={"flex"} width="80%" flexDirection={"column"} mt={3}>
      <FormName>Rendimentos</FormName>
      <GroupOptionsButtons
        buttonsConfig={[{ name: "Bruto" }, { name: "Liquido" }]}
      />
      <FormInput>Aporte Inicial</FormInput>
      <FormInput>Prazo (em meses)</FormInput>
      <FormInput>IPCA (ao ano)</FormInput>
    </Box>
  );
};
