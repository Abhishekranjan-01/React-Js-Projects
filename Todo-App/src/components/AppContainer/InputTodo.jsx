const InputTodo = () => {
  return (
    <form action="">
      <div className="relative">
        <input
          type="text"
          placeholder="Start Typing... "
          className="w-full rounded-md text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none"
        />
        <button
          type="submit"
          className="absolute right-1 sm:right-3 top-1 sm:top-1 px-2 bg-[#c31431ef] text-xs sm:text-lg text-gray-200 font-semibold w-fit rounded sm:rounded-md"
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default InputTodo;
