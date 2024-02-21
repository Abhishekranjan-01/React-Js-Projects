const { useState, createContext } = require("react");

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const todoListContext = createContext(todoList);
};
