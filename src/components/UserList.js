import React from 'react'
import { Redirect } from 'react-router-dom'

const UserList = (props) => (
  <div>
    <h1>{props.location.state.text}</h1>
    <h1>{props.match.params.id}</h1>
  </div>
)


export default UserList
