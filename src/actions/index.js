export const addTodo = (taskName) => {
  return {
    type: 'ADD_TODO',
    payload: {
      taskName: taskName,
    }
  }
}
