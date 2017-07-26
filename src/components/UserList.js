import React from 'react'
import { connect } from 'react-redux'
import { addUser } from '../actions'

// const UserList = (props) => {
class UserList extends React.Component{
  constructor(){
    super()
    this.state = {
      name: ""
    }
  }

  handleChange(value){
    console.log('-------', value)
    this.setState({name: value})
  }

  render(){
    return(
      <div>
        <ul>
          { this.props.listUsers.map( (user, idx) => {
            return (
              <li key={idx}>
                ID: {user.id}, Name: {user.name}
              </li>
            )

          })}
        </ul>
      <input type="text" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button onClick={(e) => this.props.tambahUser(this.state.name)} >Add </button>
      </div>
    )
  }
}

// store = store.getState()
const mapStateToProps = (state) => {
  return{
    listUsers: state.userList.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tambahUser: (name) =>  dispatch(addUser(name))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList)


