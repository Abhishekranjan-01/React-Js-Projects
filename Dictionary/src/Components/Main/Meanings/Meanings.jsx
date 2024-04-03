import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import Definitions from "./Definitions/Definitions";
export default function Meanings() {
  const wordInfo = useSelector((state) => state.wordInfo);
  return wordInfo[0].meanings.map((info, i) => (
    <section key={i + 1000} className="flex flex-col sm:gap-4">
      <div className="flex flex-row justify-center items-center">
        <h2 className="sm:text-xl">Part Of Speech =&#8811;</h2>
        <h2 className="text-lg sm:text-3xl capitalize text-center">
          "{info.partOfSpeech}"
        </h2>
      </div>

      <Definitions info={info} />
      <div className="flex flex-col justify-center items-center">
        <h2 className="sm:text-xl font-semibold">Antonyms:-</h2>

        {!info.antonyms.length && <p>Antonyms Not Available</p>}

        <ol className="list-[lower-roman] my-2 sm:my-0 w-full flex items-center sm:flex-row flex-col justify-center gap-1 sm:gap-10">
          {info.antonyms.map((antonym, i) => (
            <li key={Date.now()}>{antonym}</li>
          ))}
        </ol>

        <h2 className="sm:text-xl font-semibold">Synonyms:-</h2>
        {!info.synonyms.length && <p>Synonyms Not Available</p>}
        <ol className="list-[lower-roman] my-2 sm:my-0 w-full flex items-center sm:flex-row flex-col justify-center gap-1 sm:gap-10">
          {info.synonyms.map((synonym, i) => (
            <li key={`${i + 800}`}>{synonym}</li>
          ))}
        </ol>
      </div>
    </section>
  ));
}
