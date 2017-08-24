export const add_todo = (value) => ({
  type: "ADD_TODO",
  payload: {
    todo: {name: value}
  }
})


export const remove_todo = (idx) => ({
  type: "REMOVE_TODO",
  payload: {
    idx: idx
  }
})