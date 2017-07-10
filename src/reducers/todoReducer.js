const initialState = {
  todos: [{id: 1, taskName: 'coding'}]
}

export default (state=initialState, action) =>{
  console.log('-----------------'+ action.type)
  switch(action.type){
    case 'ADD_TODO':
      console.log('--------------------2')
      const lastTodo = state.todos[state.todos.length - 1];
      const lastId   = lastTodo.id + 1;
      const newTodo  = {id: id, taskName: action.payload.taskName};
      console.log('--------------------3')
      return {...state.todos, todos: state.todos.concat(newTodo)}

  }

  return state

}
