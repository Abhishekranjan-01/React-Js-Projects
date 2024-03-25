import { createContext, useEffect, useState } from "react";
import BackgroundContainer from "../HeaderContainer/BackgroundContainer";
import ImageContainer from "../ImageContainer/ImageContainer";

const APIdataProvider = createContext(null);

function Home() {
  const [dataFromAPI, setDataFromAPI] = useState(false);
  // alert("Wait");
  useEffect(() => {
    if (localStorage.getItem("DATA_FROM_API_IMAGE_RESULTS") != null) {
      setDataFromAPI(
        JSON.parse(localStorage.getItem("DATA_FROM_API_IMAGE_RESULTS"))
      );
    }
  }, []);

  return (
    <APIdataProvider.Provider value={{ dataFromAPI, setDataFromAPI }}>
      <BackgroundContainer />
      {dataFromAPI && <ImageContainer />}
    </APIdataProvider.Provider>
  );
}
export default Home;
export { APIdataProvider };
