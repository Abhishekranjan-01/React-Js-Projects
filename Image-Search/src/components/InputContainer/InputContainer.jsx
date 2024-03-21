import { useRef } from "react";
import { useContext } from "react";
import fethImages from "../../API/fetchImages";
import { APIdataProvider } from "../Home/Home";

export default function inputContainer() {
  const { dataFromAPI, setDataFromAPI } = useContext(APIdataProvider);
  const inputRef = useRef("");
  console.log(dataFromAPI);
  return (
    <form
      className="block mx-auto w-4/5 sm:w-1/2 shadow-2xl"
      action=""
      onSubmit={(e) => {
        e.preventDefault();

        fethImages(inputRef.current.value, setDataFromAPI, dataFromAPI);
      }}
    >
      <div className="w-full flex rounded-md px-2 py-1 bg-white">
        <input
          ref={inputRef}
          className="w-full sm:text-lg rounded-md outline-none"
          type="text"
          name="search"
          placeholder="Search For Image"
        />
        <button
          className="bg-orange-600 font-semibold text-gray-200 px-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
