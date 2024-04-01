import { useSelector } from "react-redux";
import Header from "./Components/Header/Header";
import ProgressDemo from "./Components/Progress/Progress";
import Main from "./Components/Main/Main";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  const wordInfo = useSelector((state) => state.wordInfo);
  return (
    <>
      <Header />
      {isLoading && <ProgressDemo />}
      {wordInfo.length !== 0 && <Main />}
    </>
  );
}

export default App;
