import { useContext } from "react";
import { TodoContext } from "./CrudContainer";
import { FaCheckCircle } from "react-icons/fa";
import { TfiCheck } from "react-icons/tfi";

const TodoList = ({ currentDisplay }) => {
  const { todoList, dispatchTodoList } = useContext(TodoContext);

  return (
    <ul className="bg-white rounded-md overflow-y-scroll max-h-52 sm:max-h-[300px] md:max-h-[400px] py-2">
      {todoList.map((item, i) => {
        return (
          <li
            id={item.UNIQUE_TODO_ID}
            key={item.UNIQUE_TODO_ID}
            className="list-none relative px-4 bg-white rounded-md flex flex-row flex-wrap justify-between items-center"
          >
            {(currentDisplay === "COMPLETED" || currentDisplay === "ALL") &&
              item.todoStatus === "COMPLETED" && (
                <span className="text-green-500 absolute left-1">
                  <FaCheckCircle />
                </span>
              )}

            {currentDisplay === "ALL" && (
              <div className="block text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400 min-w-64 w-full text-wrap">
                <p className="text-wrap">{item.todoName}</p>
              </div>
            )}

            {currentDisplay === "ACTIVE" && item.todoStatus === "ACTIVE" && (
              <div className="block text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400 min-w-64 w-full text-wrap">
                <p className="text-wrap">{item.todoName}</p>
              </div>
            )}

            {currentDisplay === "COMPLETED" &&
              item.todoStatus === "COMPLETED" && (
                <div className="block text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400 min-w-64 w-full text-wrap">
                  <p className="text-wrap">{item.todoName}</p>
                </div>
              )}
            <span
              className="text-xs sm:text-base h-fit w-fit absolute right-2"
              onClick={(e) => {
                dispatchTodoList({
                  name: "COMPLETED_TODO",
                  payload: {
                    todoName: item.todoName,
                    todoStatus: "COMPLETED",
                    UNIQUE_TODO_ID: item.UNIQUE_TODO_ID,
                  },
                });
              }}
            >
              {(currentDisplay === "ACTIVE" || currentDisplay === "ALL") &&
                item.todoStatus === "ACTIVE" && <TfiCheck />}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
