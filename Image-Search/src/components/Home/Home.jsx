import { createContext, useState } from "react";
import BackgroundContainer from "../HeaderContainer/BackgroundContainer";
import ImageContainer from "../ImageContainer/ImageContainer";

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
      {dataFromAPI && <ImageContainer />}
    </APIdataProvider.Provider>
  );
}
export default Home;
export { setDataFromAPIRef, APIdataProvider };
