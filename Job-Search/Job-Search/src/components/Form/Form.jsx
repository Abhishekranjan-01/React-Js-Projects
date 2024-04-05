import AccordionU from "./Optional Parameters/AccordionU";
// import OptionalParameters from "./Optional Parameters/OptionalParameters";
import RequiredParameters from "./Required-Parameters/RequiredParameters";
export default function Form() {
  return (
    <form className="border mx-auto  shadow-2xl flex flex-col gap-4 llg:gap-6 justify-evenly items-center min-h-72 max-h-full  py-4">
      <div className="flex flex-col gap-4 w-full h-full justify-evenly items-center ">
        <h1 className="font-pacifico_regula text-center text-2xl xm:text-3xl ssm:text-4xl md:text-6xl llg:text-7xl xl:text-8xl">
          Search For Jobs/Internsips
        </h1>
        <RequiredParameters />
      </div>
      {/* OptionalParameters  */}
      <AccordionU />
    </form>
  );
}
