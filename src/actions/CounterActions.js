/*export const increment = {
  type: 'TAMBAH',
  payload: {
    step: 5
  }
}


export const decrement = {
  type: 'KURANG'
}
*/


export const  increment = (_step) => {
  return {
    type: 'TAMBAH',
    payload: {
      step: _step
    }
  }
}


export const decrement = (_step) => {
  return {
    type: 'KURANG',
    payload: {
      step: _step
    }
  }
}

export const update_step = (_step) => {
  return {
    type: "UPDATE_STEP",
    payload: {
      step: +_step
    }
  }
}
