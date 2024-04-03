export default function Definitions({ info }) {
  return (
    <section className="flex justify-center flex-col items-center gap-2">
      <h2 className="sm:text-2xl font-semibold ">Definations:</h2>
      <article className="w-full flex flex-col items-center">
        <ol className="list-decimal w-full sm:max-w-[50%] flex flex-col gap-2 items-center max-sm:px-5">
          {info.definitions.map((definition, i) => (
            <li key={i + 200} className="w-full sm:text-lg ">
              <h2>{definition.definition}</h2>
              {definition.example ? (
                <h2 className="sm:text-base font-semibold">Example:</h2>
              ) : (
                ""
              )}
              {definition.example ? (
                <article className="sm:text-base">{definition.example}</article>
              ) : (
                ""
              )}
            </li>
          ))}
        </ol>
      </article>
    </section>
  );
}
