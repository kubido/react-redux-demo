import axios from 'axios'

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

export const fetchNews = (newsList) => {
  return {
    type: 'FETCH_NEWS',
    payload: {
      news: newsList
    }
  }
}

export const fetchNewsAsync = () => {
  return (dispatch, getState) => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(apiUrl)
      .then( (resp) => {
        dispatch(fetchNews(resp.data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}


