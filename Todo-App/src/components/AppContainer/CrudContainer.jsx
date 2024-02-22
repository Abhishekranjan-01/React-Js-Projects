import { createContext, useReducer } from "react";
import InputTodo from "./InputTodo";
import addTodo, { completedTodo } from "../../store/TodoListStore";
import TodoLists from "./TodoList";
import TodoItem from "./TodoItem";
import Summary from "./Summary";
// import TodoContext from "../../store/TodoList";

function reducer(todoList, action) {
  let newTodoList = todoList;

  if (action.name === "ADD_TODO") {
    newTodoList = addTodo(todoList, action);
  } else if (action.name === "COMPLETED_TODO") {
    newTodoList = completedTodo(todoList, action);
  } else {
    return newTodoList;
  }
  console.log(newTodoList);
  return newTodoList;
}

let todoList = null;
let dispatchTodoList = null;

const TodoContext = createContext(todoList, dispatchTodoList);

const CrudContainer = () => {
  const [TodoList, DispatchTodoList] = useReducer(reducer, []);
  todoList = TodoList;
  dispatchTodoList = DispatchTodoList;

  return (
    <TodoContext.Provider value={{ todoList, dispatchTodoList }}>
      <div className="flex flex-col gap-10">
        <InputTodo />
        <TodoLists />
        {TodoList.length != 0 && <Summary />}
      </div>
    </TodoContext.Provider>
  );
};
export { TodoContext };
export default CrudContainer;
