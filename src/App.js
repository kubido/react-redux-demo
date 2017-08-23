import React, { Component } from 'react';
import store from './stores'
import { Provider } from 'react-redux'

import './App.css';
import Button from './components/Button'

class App extends Component {
  constructor(){
    super()
    this.state ={
      counter: store.getState().counterStore.counter, // 0
      users: store.getState().userStore.users
    }
  }

  render() {
    /*store.subscribe(() => {
      this.setState({
        counter: store.getState().counterStore.counter // +5
      })
    })*/

    return (
      <Provider store={store}>
        <div>
          <hr/>
          <div style={{width: '640px', margin: '0 auto'}} >
            <h1>Counter</h1>
            <h2>{this.state.counter}</h2>
            <Button/>
            <hr/>
            <h1>List User</h1>
            <ul>
              { this.state.users.map( (user,idx) => <li key={idx}>{user.name}, {user.age}</li> )}
            </ul>
          </div>
        </div>
      </Provider>


    );
  }
}



export default App;
