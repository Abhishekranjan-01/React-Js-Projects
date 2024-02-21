import { useContext, useRef } from "react";
import { TodoContext } from "./CrudContainer";

const InputTodo = () => {
  const todoNameRef = useRef("");
  const { dispatchTodoList } = useContext(TodoContext);
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        dispatchTodoList({
          name: "ADD_TODO",
          payload: todoNameRef.current.value,
        });
        todoNameRef.current.value = "";
      }}
    >
      <div className="relative">
        <input
          ref={todoNameRef}
          onChange={(e) => {
            todoNameRef.current.value = e.target.value;
          }}
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
