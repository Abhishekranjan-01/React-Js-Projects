export default function inputContainer() {
  return (
    <form className="block mx-auto w-4/5 sm:w-1/2 shadow-2xl" action="">
      <div className="w-full flex rounded-md px-2 py-1 bg-white">
        <input
          className="w-full sm:text-lg rounded-md outline-none"
          type="text"
          name="search"
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
