export default function DatePosted() {
  return (
    <div className="w-full lg:w-1/4 flex flex-col ssm:gap-[2px]">
      <label
        htmlFor="data-posted"
        className="font-Kalam_Regular font-semibold text-base llg:text-lg"
      >
        Date Posted
      </label>
      <select
        className="font-Roboto_Mono llg:min-w-44 lg:min-w-56 text-center "
        name="data-posted"
        defaultValue={""}
      >
        <option value="" disabled hidden>
          Optional
        </option>
        <option value="all">All</option>
        <option value="today">Today</option>
        <option value="3days">3 Days</option>
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>

      <aside className="ssm:w-full text-[10px] ssm:text-xs leading-tight">
        Find jobs posted within the time you specify. Allowed values:{"   "}
        <span className="bg-blue-950">all</span>,{" "}
        <span className="bg-blue-950">today</span>,{" "}
        <span className="bg-blue-950">3days</span>,
        <span className="bg-blue-950"> week</span>,
        <span className="bg-blue-950">month</span>. Default:{" "}
        <span className="bg-blue-950">all</span>.
      </aside>
    </div>
  );
}