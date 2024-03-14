import axios from "axios";
import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const FactCard = ({
  isBgImgFetched,
  setIsBgImgFetched,
  holdBgUrl,
  setCurrBgImg,
}) => {
  const [isFactFetched, setIsFactFetched] = useState(false);
  const [fact, setFact] = useState(null);

  {
    isFactFetched == false &&
      isBgImgFetched &&
      axios
        .get("https://api.api-ninjas.com/v1/facts?limit=1", {
          headers: { "X-Api-Key": "kzMswFghBRV9VjS48Kvs7xkhSzNrO3WJC113h6Uq" },
        })
        .then(({ data }) => {
          setFact(data);
          setIsFactFetched(true);
        })
        .catch((err) => {
          alert(err);
        });
  }

  return (
    <section className=" max-w-72 lg:max-w-80 h-48 lg:min-h-56 backdrop-blur-lg font-semibold text-gray-950 text-sm sm:text-base rounded-lg p-2 list-none">
      {(isFactFetched && isBgImgFetched) == false ? (
        <RingLoader color="#c31432" size={60} />
      ) : (
        <>
          {fact.map((item, i) => {
            return (
              <li
                key={i}
                className="flex flex-col justify-between items-center w-full h-full"
              >
                <h1 className="text-center">{item.fact}</h1>
                <button
                  className="border p-1 rounded-md"
                  type="button"
                  onClick={() => {
                    setIsFactFetched(false);
                    setIsBgImgFetched(false);
                  }}
                >
                  Load New Fact
                </button>
              </li>
            );
          })}
          {setCurrBgImg(`url(${holdBgUrl})`)}
        </>
      )}
    </section>
  );
};
export default FactCard;
