import { useContext } from "react";
import { TodoContext } from "./CrudContainer";
import { countActiveTodo } from "../../store/TodoListStore";

const Summary = () => {
  const { todoList } = useContext(TodoContext);
  const activeTodos = countActiveTodo(todoList);
  return (
    <li className="list-none bg-white rounded-md flex justify-between w-full text-xs sm:text-sm text-gray-600 font-bold px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400">
      <div className="">{activeTodos} items left</div>
      <div className="flex justify-center gap-2 sm:gap-8">
        <button type="button">All</button>
        <button type="button">Active</button>
        <button type="button">Completed</button>
      </div>
      <div>
        <button type="button">Reset All</button>
      </div>
    </li>
  );
};

export default Summary;
