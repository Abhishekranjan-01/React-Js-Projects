const completedTodoList = [];
const addTodo = (todoList, action) => {
  return [action, ...todoList];
};
const completedTodo = (todoList, action) => {
  todoList.map((item, i) => {
    if (item.payload.UNIQUE_TODO_ID === action.payload.UNIQUE_TODO_ID) {
      item.payload = action.payload;
      completedTodoList.push(item);
    }
  });
  return [...todoList];
};
const countActiveTodo = (todoList) => {
  let count = 0;
  todoList.forEach((item) => {
    if (item.payload.todoStatus === "ACTIVE") {
      count++;
    }
  });
  return count;
};
export { completedTodo, countActiveTodo };
export default addTodo;
