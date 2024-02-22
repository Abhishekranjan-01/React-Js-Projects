import { useContext } from "react";
import { TodoContext } from "./CrudContainer";
import { FaCheckCircle } from "react-icons/fa";
import { TfiCheck } from "react-icons/tfi";

const TodoList = ({ currentDisplay }) => {
  const { todoList, dispatchTodoList } = useContext(TodoContext);

  return (
    <ul className="bg-white rounded-md overflow-y-scroll max-h-52 sm:max-h-[300px] md:max-h-[400px] py-2">
      {todoList.map((item, i) => {
        {
          console.log(item);
        }
        return (
          <li
            id={item.payload.UNIQUE_TODO_ID}
            key={item.payload.UNIQUE_TODO_ID}
            className="list-none px-2 bg-white rounded-md flex justify-center items-center"
          >
            {(currentDisplay === "COMPLETED" || currentDisplay === "ALL") &&
              item.payload.todoStatus === "COMPLETED" && (
                <span className="text-green-500">
                  <FaCheckCircle />
                </span>
              )}

            {currentDisplay === "ALL" && (
              <div className="block text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400 min-w-64 w-full text-wrap">
                <p className="text-wrap">{item.payload.todoName}</p>
              </div>
            )}

            {currentDisplay === "ACTIVE" &&
              item.payload.todoStatus === "ACTIVE" && (
                <div className="block text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400 min-w-64 w-full text-wrap">
                  <p className="text-wrap">{item.payload.todoName}</p>
                </div>
              )}

            {currentDisplay === "COMPLETED" &&
              item.payload.todoStatus === "COMPLETED" && (
                <div className="block text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400 min-w-64 w-full text-wrap">
                  <p className="text-wrap">{item.payload.todoName}</p>
                </div>
              )}
            <span
              className="text-xs sm:text-base h-fit w-fit"
              onClick={(e) => {
                dispatchTodoList({
                  name: "COMPLETED_TODO",
                  payload: {
                    todoName: item.payload.todoName,
                    todoStatus: "COMPLETED",
                    UNIQUE_TODO_ID: item.payload.UNIQUE_TODO_ID,
                  },
                });
              }}
            >
              {(currentDisplay === "ACTIVE" || currentDisplay === "ALL") &&
                item.payload.todoStatus === "ACTIVE" && <TfiCheck />}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
