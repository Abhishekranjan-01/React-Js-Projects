import { createContext, useState } from "react";
import BackgroundContainer from "../HeaderContainer/BackgroundContainer";

const APIdataProvider = createContext(null);
let setDataFromAPIRef = null;

function Home() {
  const [dataFromAPI, setDataFromAPI] = useState(false);
  setDataFromAPIRef = setDataFromAPIRef;
  console.log(dataFromAPI);
  // alert("Wait");
  return (
    <APIdataProvider.Provider value={{ dataFromAPI, setDataFromAPI }}>
      <BackgroundContainer />
    </APIdataProvider.Provider>
  );
}
export default Home;
export { setDataFromAPIRef, APIdataProvider };
