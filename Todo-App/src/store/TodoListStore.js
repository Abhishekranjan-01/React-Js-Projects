const completedTodoList = [];
const addTodo = (todoList, action) => {
  return [action.payload, ...todoList];
};
const completedTodo = (todoList, action) => {
  let newTodoList = todoList;

  todoList.forEach((item) => {
    if (item.UNIQUE_TODO_ID === action.UNIQUE_TODO_ID) {
      item.todoStatus = "COMPLETED";
    }
  });

  return [...newTodoList];
};
const countActiveTodo = (todoList) => {
  let count = 0;
  todoList.forEach((item) => {
    if (item.todoStatus === "ACTIVE") {
      count++;
    }
  });
  return count;
};
export { completedTodo, countActiveTodo };
export default addTodo;
