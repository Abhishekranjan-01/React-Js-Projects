export default function RemoteJobsOnly() {
  return (
    <div className="w-full lg:w-fit flex flex-col ssm:gap-[2px]">
      <label
        htmlFor="remote_jobs_only"
        className="font-Kalam_Regular font-semibold text-base llg:text-lg"
      >
        Remote Jobs Only
      </label>
      <select
        name="remote_jobs_only"
        id=""
        defaultValue={""}
        className="font-Roboto_Mono llg:min-w-44 lg:min-w-56 text-center "
      >
        <option value="" disabled hidden>
          Optional
        </option>
        <option value="true">True</option>
        <option value="false">False</option>
      </select>
      <aside className="ssm:w-full text-[10px] ssm:text-xs leading-tight">
        Find remote jobs only (work from home). Default:{" "}
        <span className="bg-blue-950">false</span>.
      </aside>
    </div>
  );
}
