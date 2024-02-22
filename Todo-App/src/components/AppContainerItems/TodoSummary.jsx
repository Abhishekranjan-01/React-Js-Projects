import { useContext } from "react";
import { TodoContext } from "./CrudContainer";
import { countActiveTodo } from "../../store/TodoListStore";

const Summary = ({ setCurrentDisplay }) => {
  const { todoList, dispatchTodoList } = useContext(TodoContext);
  const activeTodos = countActiveTodo(todoList);
  return (
    <li className="relative -top-4 sm:-top-8 list-none bg-white rounded-md flex justify-between w-full text-[10px] sm:text-sm text-gray-600 font-bold px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400">
      <div className="">{activeTodos} items left</div>
      <div className="flex justify-center gap-2 sm:gap-8">
        <button
          type="button"
          onClick={() => {
            setCurrentDisplay("ALL");
          }}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentDisplay("ACTIVE");
          }}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentDisplay("COMPLETED");
          }}
        >
          Completed
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatchTodoList({ name: "CLEAR_ALL" });
            setCurrentDisplay("ALL");
          }}
        >
          Reset All
        </button>
      </div>
    </li>
  );
};

export default Summary;
