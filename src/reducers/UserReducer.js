const  initialState = {
  users: [
    {name: "John", age: 20}
  ]
}

const UserReducer = (state=initialState,action) =>{
  switch(action.type){
    case "ADD_USER":
      const newUser = action.payload.user
      return {...state, users: state.users.concat(newUser)}
    default:
      return state
  }
}

export default UserReducer
