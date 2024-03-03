import { useEffect } from "react";
import BackgroundContainer from "./components/BackgroundContainer";

function App() {
  const deviceScreenData = null;

  // useEffect(() => {window}, []);
  return (
    <section>
      <BackgroundContainer deviceScreenData={deviceScreenData} />
    </section>
  );
}

export default App;
