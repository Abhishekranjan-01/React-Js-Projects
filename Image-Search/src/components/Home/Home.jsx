import { createContext, useState } from "react";
import BackgroundContainer from "../HeaderContainer/BackgroundContainer";
import ImageContainer from "../ImageContainer/ImageContainer";

const APIdataProvider = createContext(null);

function Home() {
  const [dataFromAPI, setDataFromAPI] = useState(false);
  // alert("Wait");
  return (
    <APIdataProvider.Provider value={{ dataFromAPI, setDataFromAPI }}>
      <BackgroundContainer />
      {dataFromAPI && <ImageContainer />}
    </APIdataProvider.Provider>
  );
}
export default Home;
export { APIdataProvider };
