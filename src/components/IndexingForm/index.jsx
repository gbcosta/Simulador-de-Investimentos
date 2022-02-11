import React, { useState, useEffect } from "react";
import { FormName } from "@components/formName";
import { Box } from "@mui/material";
import { GroupOptionsButtons } from "@components/groupOptionsButtons";
import { FormInput } from "@components/formInput";
import { regex } from "../../utils/utils";

export const IndexingForm = (props) => {
  const [inputValues, setInputValues] = useState({
    aporteMensal: null,
    rentabilidade: null,
    cdi: null,
    button: null,
  });

  useEffect(() => {
    props.setFormValues({ ...props.formValues, indexingForm: inputValues });
  }, [inputValues]);

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box display={"flex"} width="80%" flexDirection={"column"}>
        <FormName>Tipos de indexação</FormName>
        <GroupOptionsButtons
          buttonsConfig={[{ name: "PRÉ" }, { name: "POS" }]}
          setContextState={setInputValues}
          contextState={inputValues}
        />
        <FormInput
          rgx={regex.money}
          message={"Deve ser um número válido"}
          variableName={"aporteMensal"}
          contextSetState={setInputValues}
          contextState={inputValues}
        >
          Aporte Mensal
        </FormInput>
        <FormInput
          rgx={regex.percentage}
          message={"Deve ser uma porcentagem válido"}
          variableName={"rentabilidade"}
          contextSetState={setInputValues}
          contextState={inputValues}
        >
          Rentabilidade
        </FormInput>
        <FormInput
          rgx={regex.percentage}
          message={"Deve ser uma porcentagem válido"}
          variableName={"cdi"}
          contextSetState={setInputValues}
          contextState={inputValues}
        >
          CDI (ao ano)
        </FormInput>
      </Box>
    </Box>
  );
};
