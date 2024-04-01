import { useRef } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { fetchWord } from "../../Features/dictionarySlice";
import { useDispatch } from "react-redux";

export default function Form() {
  const inputRef = useRef();
  const dispatch = useDispatch();

  return (
    <form
      className="block mx-auto w-11/12 sm:w-1/2 shadow-2xl my-auto "
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(fetchWord(inputRef.current.value));
      }}
    >
      <div className="w-full flex sm:gap-2 rounded-md px-1 sm:px-2 sm:py-1 py-[2px] bg-white">
        <FaSearchengin className="sm:text-3xl text-slate-600" />
        <input
          ref={inputRef}
          className="w-full sm:text-lg rounded-md outline-none"
          type="text"
          name="search"
          placeholder="Enter Word"
        />
        <button
          className="bg-slate-700 text-sm sm:text-base font-semibold text-gray-200 px-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
