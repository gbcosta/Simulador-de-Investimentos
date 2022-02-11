import React from "react";

export const SimulationResultContext = React.createContext(0);

export const SimulationResultContextProvider = (props) => {
  const [simulationResult, setSimulationResult] = React.useState(0);

  return (
    <SimulationResultContext.Provider
      value={{ simulationResult, setSimulationResult }}
    >
      {props.children}
    </SimulationResultContext.Provider>
  );
};
