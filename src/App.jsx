import "./App.css";
import { GridApp } from "@components/gridApp";
import { SimulationResultContextProvider } from "@contexts/simulationResults";
import React from "react";
function App() {
  return (
    <div className="App">
      <SimulationResultContextProvider>
        <GridApp />
      </SimulationResultContextProvider>
    </div>
  );
}

export default App;
