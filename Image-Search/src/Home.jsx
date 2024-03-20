import { useState } from "react";
import BackgroundContainer from "./HeaderContainer/BackgroundContainer";

function Home() {
  const [isAPIfetched, setIsAPIfetched] = useState(false);

  return (
    <>
      <BackgroundContainer />{" "}
    </>
  );
}

export default Home;
