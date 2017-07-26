export const increment = {
  type: 'INC',
  payload: {
    langkah: 20
  }
}

export const decrement = {
  type: 'DEC',
  payload: {
    langkah: 10
  }
}


export const addUser = (user_name) => {
  return {
    type: 'ADD_USER',
    payload: {
      userName: user_name
    }
  }
}
