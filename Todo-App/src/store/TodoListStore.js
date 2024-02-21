const addTodo = (todoList, action) => {
  return [action.payload, ...todoList];
};

export default addTodo;
