import React from "react";
import { FormName } from "@components/formName";
import { Box } from "@mui/material";
import { GroupOptionsButtons } from "@components/groupOptionsButtons";
import { FormInput } from "@components/formInput";

export const IndexingForm = () => {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box display={"flex"} width="80%" flexDirection={"column"} mt={3}>
        <FormName>Tipos de indexação</FormName>
        <GroupOptionsButtons
          buttonsConfig={[{ name: "PRÉ" }, { name: "POS" }, { name: "FIXADO" }]}
        />
        <FormInput>Aporte Mensal</FormInput>
        <FormInput>Rentabilidade</FormInput>
        <FormInput>CDI (ao ano)</FormInput>
      </Box>
    </Box>
  );
};
