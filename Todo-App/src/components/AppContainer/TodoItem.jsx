import { FaCheckCircle } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BsFillDashCircleFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { TodoContext } from "./CrudContainer";
const TodoItem = ({ item, i }) => {
  const { dispatchTodoList } = useContext(TodoContext);
  const [todoStatus, setTodoStatus] = useState("ACTIVE");
  return (
    <li
      className="list-none bg-white rounded-md flex justify-evenly items-center"
      id={i}
      key={i}
    >
      {todoStatus === "COMPLETED" && (
        <span className="text-green-500">
          <FaCheckCircle />
        </span>
      )}

      <input
        type="text"
        readOnly
        value={item}
        className="block w-[95%] text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400"
      />
      {todoStatus === "ACTIVE" && (
        <span
          className="text-xs sm:text-base "
          onClick={() => {
            dispatchTodoList({ name: "COMPLETED_TODO", todoId: i });
            setTodoStatus("COMPLETED");
          }}
        >
          <FaCheck />
        </span>
      )}
    </li>
  );
};

export default TodoItem;
