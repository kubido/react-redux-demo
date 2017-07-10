import React from 'react';
import redux from 'redux';
import {connect} from 'react-redux'
import {
  TextInput,
  Button,
  View
} from 'react-native'
import NavigationActions from 'react-navigation';

import store from '../stores';
import { addTodo } from '../actions';

class CreateCard extends React.Component{

  constructor(){
    super();

    this.state = {
      taskName: ''
    }
  }

  addTodo(taskName, navigate){
    this.props.addTodo(taskName)
    NavigationActions.navigate({routeName: 'Home' })
  }


  render(){
    const navigate = this.props.navigation;
    return (
      <View>
          <TextInput
            style={{height: 40}}
            placeholder="Task name"
            onChangeText={ (text) => this.setState({taskName: text}) }
            />

					<Button
						onPress={ () => this.addTodo() }
						title="Add Todo"
						color="#841584"
						accessibilityLabel="Add new todo"
					/>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  addTodo: (taskName) => { dispatch.addTodo(taskName) }
}

export default connect(null, mapDispatchToProps)(CreateCard)
