import { useSelector } from "react-redux";
import Audio from "./Audio/Audio";
import Meanings from "./Meanings/Meanings";
export default function Main() {
  const wordInfo = useSelector((state) => state.wordInfo);

  return (
    <main className="flex flex-col gap-4 py-2 min-w-full min-h-full bg-slate-900 text-gray-200 ">
      <div className="flex justify-center items-end gap-1">
        <h1 className="font-semibold text-lg sm:text-4xl text-center capitalize">
          {wordInfo[0].word}
        </h1>

        <Audio />
      </div>
      <Meanings />
    </main>
  );
}
