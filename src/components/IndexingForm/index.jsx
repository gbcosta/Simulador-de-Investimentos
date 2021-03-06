import React, { useState, useEffect } from "react";
import { FormHeader } from "@components/formHeader";
import { Box } from "@mui/material";
import { GroupOptionsButtons } from "@components/groupOptionsButtons";
import { FormInput } from "@components/formInput";
import { regex } from "@utils/utils";

export const IndexingForm = (props) => {
  return (
    <Box display={"flex"} justifyContent={{ lg: "center", xs: "left" }}>
      <Box
        display={"flex"}
        width={{ xs: "100%", md: "80%" }}
        flexDirection={"column"}
      >
        <FormHeader tooltipText="Indexadores econômicos são índices que servem como referência para o rendimento de um ativo">
          Tipos de indexação
        </FormHeader>
        <GroupOptionsButtons
          buttonsConfig={[{ name: "PRÉ" }, { name: "POS" }]}
          setFormValues={props.setFormValues}
          formValues={props.formValues}
        />
        <FormInput
          rgx={regex.money}
          message={"Deve ser um número válido"}
          variableName={"aporteMensal"}
          setFormValues={props.setFormValues}
          formValues={props.formValues}
        >
          Aporte Mensal
        </FormInput>
        <FormInput
          rgx={regex.percentage}
          message={"Deve ser uma porcentagem válida"}
          variableName={"rentabilidade"}
          setFormValues={props.setFormValues}
          formValues={props.formValues}
        >
          Rentabilidade
        </FormInput>
        <FormInput
          rgx={regex.percentage}
          message={"Deve ser uma porcentagem válida"}
          variableName={"cdi"}
          setFormValues={props.setFormValues}
          formValues={props.formValues}
          type={"cdi"}
        >
          CDI (ao ano)
        </FormInput>
      </Box>
    </Box>
  );
};
