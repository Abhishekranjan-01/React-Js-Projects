import { IoVolumeHigh } from "react-icons/io5";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
export default function Main() {
  const wordInfo = useSelector((state) => state.wordInfo);
  console.log(wordInfo);
  return (
    <main className="min-w-full min-h-full bg-slate-950 text-gray-200">
      <div className="flex justify-center items-center gap-2">
        <h1 className="font-semibold sm:text-4xl text-center capitalize">
          {wordInfo[0].word}
        </h1>

        <span
          onClick={(e) => {
            document.querySelector("audio").play();
          }}
        >
          <IoVolumeHigh className="text-3xl"></IoVolumeHigh>
          <audio
            className="block text-lg bg-transparent "
            src={wordInfo[0].phonetics[0].audio}
          ></audio>
        </span>
      </div>
      {wordInfo[0].meanings.map((info) => {
        return (
          <>
            <h2 className="sm:text-3xl capitalize">{info.partOfSpeech}</h2>
            <h2 className="sm:text-2xl font-semibold">Definations:</h2>
            {info.definitions.map((definition, i) => {
              return (
                <section>
                  <div className="flex flex-col gap-2">
                    <h3 className="sm:text-xl">
                      <span className="text-xl">{i + 1}</span>{" "}
                      {definition.definition}
                    </h3>
                  </div>
                  {definition.example && (
                    <h2 className="sm:text-base font-semibold">Example:</h2>
                  )}
                  {definition.example && (
                    <article className="sm:text-base">
                      {definition.example}
                    </article>
                  )}
                </section>
              );
            })}
            <h2 className="sm:text-xl">Antonyms:-</h2>

            {!info.antonyms.length && <p>Antonyms Not Available</p>}
            <div className="flex justify-evenly">
              {info.antonyms.map((antonym) => (
                <h3>{antonym}</h3>
              ))}
            </div>

            <h2 className="sm:text-xl">Synonyms:-</h2>
            {!info.synonyms.length && <p>Synonyms Not Available</p>}
            <div className="flex justify-evenly">
              {info.synonyms.map((synonym) => (
                <h3>{synonym}</h3>
              ))}
            </div>
          </>
        );
      })}
    </main>
  );
}
