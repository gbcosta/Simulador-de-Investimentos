import React, { useEffect } from "react";
import { OptionButton } from "./optionButton";
import { Box } from "@mui/material";

export const GroupOptionsButtons = (props) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      borderRadius={2}
      sx={{
        background: "#fff",
        overflow: "hidden",
        border: "1px solid black",
      }}
      width={"100%"}
      height={"50px"}
      mt={2}
    >
      {props.buttonsConfig.map((config, key) => {
        const isLast = key == props.buttonsConfig.length - 1;
        return (
          <OptionButton
            key={key}
            formValues={props.formValues}
            setFormValues={props.setFormValues}
            last={isLast}
          >
            {config.name}
          </OptionButton>
        );
      })}
    </Box>
  );
};
