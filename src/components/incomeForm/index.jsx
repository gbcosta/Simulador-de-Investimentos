import React, { useState, useEffect } from "react";
import { FormName } from "@components/formName";
import { Box } from "@mui/material";
import { GroupOptionsButtons } from "@components/groupOptionsButtons";
import { FormInput } from "@components/formInput";
import { regex } from "../../utils/utils";

export const IncomeForm = (props) => {
  const [inputValues, setInputValues] = useState({
    aporte: null,
    prazo: null,
    ipca: null,
    button: null,
  });

  useEffect(() => {
    props.setFormValues({ ...props.formValues, incomeForm: inputValues });
  }, [inputValues]);

  return (
    <Box display={"flex"} width="80%" flexDirection={"column"} mt={3}>
      <FormName>Rendimentos</FormName>
      <GroupOptionsButtons
        buttonsConfig={[{ name: "Bruto" }, { name: "Liquido" }]}
        setContextState={setInputValues}
        contextState={inputValues}
      />
      <FormInput
        rgx={regex.money}
        message={"Deve ser um número válido"}
        variableName={"aporte"}
        contextSetState={setInputValues}
        contextState={inputValues}
      >
        Aporte Inicial
      </FormInput>
      <FormInput
        rgx={regex.month}
        message={"Deve ser um mês válido"}
        variableName={"prazo"}
        contextSetState={setInputValues}
        contextState={inputValues}
      >
        Prazo (em meses)
      </FormInput>
      <FormInput
        rgx={regex.percentage}
        message={"Deve ser um número válido"}
        variableName={"ipca"}
        contextSetState={setInputValues}
        contextState={inputValues}
      >
        IPCA (ao ano)
      </FormInput>
    </Box>
  );
};
