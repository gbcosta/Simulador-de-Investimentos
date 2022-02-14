import React, { useState, useEffect, useRef } from "react";
import { InputBase, Box, Typography } from "@mui/material";
import { Api } from "@api/api";

export const FormInput = (props) => {
  const [validField, setValidField] = useState(false);
  const fieldColor = validField ? "black" : "red";
  const ref = useRef(null);

  useEffect(() => {
    const api = new Api();
    if (props.type == undefined) return;

    api.indicadores().then((data) => {
      let strInputValue = "";
      const getDefaultValue = (key) => {
        strInputValue = data[key].valor + "%";
        strInputValue = strInputValue.replace(".", ",");
        ref.current.querySelector("input").value = strInputValue;
      };
      if (props.type == "cdi") {
        getDefaultValue(0);
      } else if (props.type == "ipca") {
        getDefaultValue(1);
      }

      setContext(true, strInputValue);
    });
  }, []);

  //verifiies if is valid when the form is cleared
  useEffect(() => {
    const value = ref.current.querySelector("input").value;
    checkField(value);
  }, [props.formValues]);

  //check if the field is valid and set the state setValidField
  const checkField = (value) => {
    const strNospaces = value.replace(/^\s+|\s+$/gm, "");
    if (strNospaces.match(props.rgx)) {
      setValidField(true);
      return true;
    }
    setValidField(false);
    return false;
  };

  const handleChange = (event) => {
    checkField(event.target.value)
      ? setContext(true, event.target.value)
      : setContext(false, null);
  };

  // set the formValues
  const setContext = (inputValue) => {
    props.setFormValues({
      ...props.formValues,
      [props.variableName]: inputValue,
    });
  };

  return (
    <Box mt={6} position={"relative"}>
      <Typography mb={1} sx={{ color: fieldColor }}>
        {props.children}
      </Typography>
      <InputBase
        sx={{
          borderBottom: ` 2px solid ${fieldColor}`,
          fontSize: "1.25rem",
          width: "100%",
        }}
        onChange={handleChange}
        ref={ref}
      ></InputBase>
      <Typography
        sx={{
          color: "red",
          display: validField ? "none" : "block",
          position: "absolute",
          mt: 1,
        }}
      >
        {props.message}
      </Typography>
    </Box>
  );
};
