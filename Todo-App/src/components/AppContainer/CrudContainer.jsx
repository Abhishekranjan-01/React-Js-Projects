import { createContext, useReducer } from "react";
import InputTodo from "./InputTodo";
import addTodo from "../../store/TodoListStore";
import TodoLists from "./TodoList";
import TodoItem from "./TodoItem";
// import TodoContext from "../../store/TodoList";

function reducer(todoList, action) {
  let newTodoList = todoList;

  const deleteItem = () => {};

  if (action.name == "ADD_TODO") {
    newTodoList = addTodo(todoList, action);
    console.log(newTodoList);
    return newTodoList;
  } else if (action.name == "DELETE_TODO") {
  } else {
    return newTodoList;
  }
}

let todoList = null;
let dispatchTodoList = null;

const TodoContext = createContext(todoList, dispatchTodoList);

const CrudContainer = () => {
  const [TodoList, DispatchTodoList] = useReducer(reducer, []);
  todoList = TodoList;
  dispatchTodoList = DispatchTodoList;

  return (
    <>
      <TodoContext.Provider value={{ todoList, dispatchTodoList }}>
        <div className="flex flex-col gap-10">
          <InputTodo />
          <TodoLists />
          {/* <TodoItem /> */}
        </div>
      </TodoContext.Provider>
    </>
  );
};
export { TodoContext };
export default CrudContainer;
