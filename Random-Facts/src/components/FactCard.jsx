import axios from "axios";
import { useContext, useState } from "react";
import { factContext } from "./CardContainer";
import RingLoader from "react-spinners/RingLoader";
const FactCard = () => {
  const { fact, setFact } = useContext(factContext);
  const [isFetched, setIsFetched] = useState(false);
  {
    isFetched == false &&
      axios
        .get("https://api.api-ninjas.com/v1/facts?limit=1", {
          headers: { "X-Api-Key": "kzMswFghBRV9VjS48Kvs7xkhSzNrO3WJC113h6Uq" },
        })
        .then(({ data }) => {
          console.log(data);
          setFact(data);
          setIsFetched(true);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("Axios Executed");
        });
  }

  return (
    <section className="min-w-80 min-h-64 bg-slate-400">
      {fact == null ? (
        <RingLoader color="#c31432" size={60} />
      ) : (
        fact.map((item) => {
          return (
            <>
              <h1>{item.fact}</h1>
              <button
                type="button"
                onClick={() => {
                  setFact(null);
                  setIsFetched(false);
                }}
              >
                Load New Fact
              </button>
            </>
          );
        })
      )}
    </section>
  );
};
export default FactCard;
