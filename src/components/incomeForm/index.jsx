import React, { useState, useEffect } from "react";
import { FormName } from "@components/formName";
import { Box } from "@mui/material";
import { GroupOptionsButtons } from "@components/groupOptionsButtons";
import { FormInput } from "@components/formInput";
import { regex } from "@utils/utils";

export const IncomeForm = (props) => {
  return (
    <Box
      display={"flex"}
      width={{ xs: "100%", md: "80%" }}
      flexDirection={"column"}
    >
      <FormName>Rendimentos</FormName>
      <GroupOptionsButtons
        buttonsConfig={[{ name: "Bruto" }, { name: "Liquido" }]}
        setFormValues={props.setFormValues}
        formValues={props.formValues}
      />
      <FormInput
        rgx={regex.money}
        message={"Deve ser um número válido"}
        variableName={"aporte"}
        setFormValues={props.setFormValues}
        formValues={props.formValues}
      >
        Aporte Inicial
      </FormInput>
      <FormInput
        rgx={regex.month}
        message={"Deve ser um mês válido"}
        variableName={"prazo"}
        setFormValues={props.setFormValues}
        formValues={props.formValues}
      >
        Prazo (em meses)
      </FormInput>
      <FormInput
        rgx={regex.percentage}
        message={"Deve ser um número válido"}
        variableName={"ipca"}
        setFormValues={props.setFormValues}
        formValues={props.formValues}
        type={"ipca"}
      >
        IPCA (ao ano)
      </FormInput>
    </Box>
  );
};
