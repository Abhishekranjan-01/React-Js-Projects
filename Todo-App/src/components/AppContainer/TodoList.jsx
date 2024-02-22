import { useState, useContext } from "react";
import { TodoContext } from "./CrudContainer";
import { FaCheckCircle } from "react-icons/fa";
import { TfiCheck } from "react-icons/tfi";

const TodoList = () => {
  const { todoList, dispatchTodoList } = useContext(TodoContext);

  return (
    <ul className="bg-white rounded-md">
      {todoList.map((item, i) => {
        {
          console.log(item);
        }
        return (
          <li
            id={item.payload.UNIQUE_TODO_ID}
            key={item.payload.UNIQUE_TODO_ID}
            className="list-none bg-white rounded-md flex justify-evenly items-center"
          >
            {item.payload.todoStatus === "COMPLETED" && (
              <span className="text-green-500">
                <FaCheckCircle />
              </span>
            )}

            <input
              type="text"
              readOnly
              value={item.payload.todoName}
              className="block w-[95%] text-sm sm:text-xl px-1 sm:px-2 py-0 sm:py-1 outline-none border-b border-b-gray-400"
            />
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
              {item.payload.todoStatus === "ACTIVE" && <TfiCheck />}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
