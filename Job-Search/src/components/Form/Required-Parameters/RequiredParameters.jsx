import { PiPaperPlaneRightFill } from "react-icons/pi";
export default function RequiredParameters() {
  return (
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
  );
}
