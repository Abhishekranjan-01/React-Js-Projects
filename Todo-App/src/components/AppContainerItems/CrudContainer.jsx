import { createContext, useReducer, useState } from "react";
import InputTodo from "./InputTodo";
import addTodo, { completedTodo } from "../../store/TodoListStore";
import AllTodoList from "./TodoList";
import Summary from "./TodoSummary";

function reducer(todoList, action) {
  let newTodoList = todoList;

  if (action.name === "ADD_TODO") {
    newTodoList = addTodo(todoList, action);
  } else if (action.name === "COMPLETED_TODO") {
    newTodoList = completedTodo(todoList, action);
  } else if (action.name === "CLEAR_ALL") {
    newTodoList = [];
  }

  return newTodoList;
}

let todoList = null;
let dispatchTodoList = null;

const TodoContext = createContext(todoList, dispatchTodoList);

const CrudContainer = () => {
  const [TodoList, DispatchTodoList] = useReducer(reducer, []);
  const [currentDisplay, setCurrentDisplay] = useState("ALL");
  todoList = TodoList;
  dispatchTodoList = DispatchTodoList;

  return (
    <TodoContext.Provider value={{ todoList, dispatchTodoList }}>
      <div className="relative flex flex-col gap-4 md:gap-10">
        <InputTodo />

        {TodoList.length != 0 && (
          <>
            <AllTodoList currentDisplay={currentDisplay} />{" "}
            <Summary setCurrentDisplay={setCurrentDisplay} />
          </>
        )}
      </div>
    </TodoContext.Provider>
  );
};
export { TodoContext };
export default CrudContainer;
