import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const UserList = (props) => (
  <div>
    <ul>
      { props.users.map( (user, idx) => {
        return <h3 key={idx}>{user.name}</h3>
      })}
    </ul>
  </div>
)

const  mapStateToProps = (state) => {
  return {
    users: state.userStore.users
  }
}

export default connect(mapStateToProps)(UserList)
