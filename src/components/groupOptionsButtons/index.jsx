import React from "react";
import { OptionButton } from "@components/optionButton";
import { Box } from "@mui/material";

export const GroupOptionsButtons = (props) => {
  const [activeButton, setActiveButton] = React.useState();

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
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            last={isLast}
          >
            {config.name}
          </OptionButton>
        );
      })}
    </Box>
  );
};
