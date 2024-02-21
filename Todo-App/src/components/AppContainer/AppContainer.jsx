import TodoBanner from "../TodoBanner";
import CrudContainer from "./CrudContainer";

const AppContainer = () => {
  return (
    <section className="mx-auto mt-20 flex flex-col gap-3 z-10 w-11/12 sm:w-4/5 border border-black">
      <TodoBanner />
      <CrudContainer />
    </section>
  );
};

export default AppContainer;
