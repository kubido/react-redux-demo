import axios from 'axios'

export const add_user = (_user) => (
  {
    type: "ADD_USER",
    payload: {
      user: _user
    }
  }
)

export const add_bulk_users = (_users) => {
  return {
    type: "ADD_BULK_USERS",
    payload: {
      users: _users
    }
  }
}

export const wrapped_add_user = () => {

  return(dispatch, getState) => {
    const usersApi = 'https://jsonplaceholder.typicode.com/users'

    axios.get(usersApi).then( resp => {
      dispatch(add_bulk_users(resp.data))
    })
  }








}
