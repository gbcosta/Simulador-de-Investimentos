import React from "react";
import { Typography, Box, Tooltip } from "@mui/material";
import Infooutlinedicon from "@mui/icons-material/InfoOutlined";

export const FormHeader = (props) => {
  return (
    <Box display={"flex"} width={"100%"}>
      <Typography fontWeight={500}>{props.children}</Typography>
      <Box sx={{ flexGrow: 1 }}></Box>
      <Tooltip title={props.tooltipText} placement="top">
        <Infooutlinedicon />
      </Tooltip>
    </Box>
  );
};

("");
