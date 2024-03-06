import { createContext, useState } from "react";
import FactCard from "./FactCard";

const factContext = createContext(null);

const CardContainer = () => {
  return (
    <factContext.Provider value={{ fact, setFact }}>
      <FactCard />
    </factContext.Provider>
  );
};
export { factContext };
export default CardContainer;
