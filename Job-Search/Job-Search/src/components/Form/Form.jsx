import { PiPaperPlaneRightFill } from "react-icons/pi";
export default function Form() {
  return (
    <form className="border mx-auto  shadow-2xl flex flex-col items-center h-72 justify-evenly">
      <div className="flex flex-col w-full h-full justify-evenly items-center ">
        <h1 className="font-pacifico_regula text-center text-2xl xm:text-3xl ssm:text-4xl md:text-6xl llg:text-7xl xl:text-8xl">
          Search For Jobs/Internsips
        </h1>
        <div className="w-11/12 sm:w-3/4 md:w-3/4 llg:w-3/5 lg:w-1/2 xl:w-3/5 flex gap-2 ssm:gap-4 rounded-md px-1 sm:px-2 sm:py-1 py-[2px] bg-gray-200">
          <input
            // ref={inputRef}
            className="w-full text-slate-900 text-base xm:text-lg ssm:text-xl md:text-2xl rounded-md outline-none bg-gray-200"
            type="text"
            name="search"
            placeholder="Ex- Frontend developer/intern India"
          />
          <button
            className="bg-sky-500 text-sm sm:text-base font-semibold text-gray-200 px-2 sm:py-1 rounded-md"
            type="submit"
          >
            <PiPaperPlaneRightFill className="text-xl sm:text-3xl 2xl:text-4xl " />
          </button>
        </div>
      </div>

      <div>
        <section>
          <div>
            <label htmlFor=""></label>
            <select name="data-posted" defaultValue={""}>
              <option value="" disabled hidden></option>
              <option value="all">All</option>
              <option value="today">today</option>
              <option value="3days">3 days</option>
              <option value="Month">Month</option>
            </select>
          </div>
          <div>
            <select name="employment-types" defaultValue={""}>
              <option value="" disabled hidden></option>
              <option value="FULLTIME">FULLTIME</option>
              <option value="CONTRACTOR">CONTRACTOR</option>
              <option value="PARTTIME">PARTTIMES</option>
              <option value="INTERN">INTERN</option>
              {/* <option value="">Do not include</option> */}
            </select>
          </div>
        </section>
        <section>
          <div>
            <select name="job-requirements" id="">
              <option value="" selected disabled hidden></option>
              <option value="under_3_years_experience">
                Under_3_years_experience
              </option>
              <option value="more_than_3_years_experience">
                more_than_3_years_experience
              </option>
              <option value="no_experience">no_experience</option>
              <option value="">Do not include</option>
            </select>
          </div>
        </section>
      </div>
    </form>
  );
}
