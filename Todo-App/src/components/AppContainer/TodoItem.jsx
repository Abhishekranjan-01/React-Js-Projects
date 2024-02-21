const TodoItem = ({ item, i }) => {
  return (
    <li className="list-none bg-white rounded-md" id="i" key={i}>
      <input
        type="text"
        readOnly
        value={item}
        className="block mx-auto w-[95%] rounded-md text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400"
      />
    </li>
  );
};

export default TodoItem;
