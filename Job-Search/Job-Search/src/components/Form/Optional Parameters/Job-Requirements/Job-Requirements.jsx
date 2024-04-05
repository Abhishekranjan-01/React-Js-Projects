export default function JobRequirements() {
  return (
    <div className="w-full lg:w-fit flex flex-col ssm:gap-[2px]">
      <label
        htmlFor="job_requirements"
        className="font-Kalam_Regular font-semibold text-base md:text-lg"
      >
        Job Requirements
      </label>
      <select
        className="font-Roboto_Mono llg:min-w-44 lg:min-w-56 text-center "
        name="job-requirements"
        id=""
        defaultValue={""}
      >
        <option value="" disabled hidden>
          Optional
        </option>
        <option value="under_3_years_experience">
          Under_3_years_experience
        </option>
        <option value="more_than_3_years_experience">
          more_than_3_years_experience
        </option>
        <option value="no_experience">no_experience</option>
        <option value="no_degree">no_degree</option>
      </select>
      <aside className="ssm:w-full text-[10px] ssm:text-xs leading-tight">
        Find jobs with specific requirements, specified as a comma delimited
        list of the following values:{" "}
        <span className="bg-blue-950">under_3_years_experience</span>,
        <span className="bg-blue-950">more_than_3_years_experience</span>,{" "}
        <span className="bg-blue-950">no_experience</span>,{" "}
        <span className="bg-blue-950">no_degree</span>.
      </aside>
    </div>
  );
}
