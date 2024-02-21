import { useContext } from "react";
import { TodoContext } from "./CrudContainer";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <ul>
      {todoList.map((item, i) => {
        return <TodoItem item={item} i={i} />;
      })}
    </ul>
  );
};

export default TodoList;
