import React from "react";
import { Card, Box, Typography } from "@mui/material";

export const SimulationResponseCard = (props) => {
  return (
    <Box height={80}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0px 0px 14px 1px rgba(0,0,0,0.2)",
        }}
      >
        <Typography mt={1} sx={{ fontWeight: 600 }}>
          {props.title}
        </Typography>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Typography mb={1} sx={{ fontWeight: 500 }}>
          {props.children}
        </Typography>
      </Card>
    </Box>
  );
};
