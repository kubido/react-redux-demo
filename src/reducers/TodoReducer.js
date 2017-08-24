const initialState = {
  todos: [
    {name: "Ngoding"},
    {name: "Makan"}
  ]
}

const TodoReducer = (state=initialState, action) => {
  switch (action.type) {
    
    case "ADD_TODO":
      const todo = action.payload.todo
      const newTodos = state.todos.concat(todo)      
      return {...state, todos: newTodos  }
    
    case "REMOVE_TODO":
      const newTodosForRemove = state.todos
      newTodosForRemove.splice(action.payload.idx, 1)
      return {...state, todos: newTodosForRemove}

    default:
      return state
  }
  
}

export default TodoReducer