import "./App.css";
import { GridApp } from "@components/gridApp";
import { Box } from "@mui/material";
import { SimulationResultContextProvider } from "@contexts/simulationResults";
import React from "react";
function App() {
  return (
    <div className="App">
      <SimulationResultContextProvider>
        <Box sx={{ margin: { xs: "1rem", sm: "2rem" } }}>
          <GridApp />
        </Box>
      </SimulationResultContextProvider>
    </div>
  );
}

export default App;
