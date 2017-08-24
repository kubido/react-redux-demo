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
    case "ADD_BULK_USERS":
      const users = action.payload.users
      return {...state, users: users}
    default:
      return state
  }
}

export default UserReducer
