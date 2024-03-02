import { createContext, useState } from "react";
import FactCard from "./FactCard";

const factContext = createContext(null);

const CardContainer = () => {
  const [fact, setFact] = useState(null);

  return (
    <factContext.Provider value={{ fact, setFact }}>
      <FactCard />
    </factContext.Provider>
  );
};
export { factContext };
export default CardContainer;
