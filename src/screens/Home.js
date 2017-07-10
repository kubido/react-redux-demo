/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
	ListView,
  TextInput
} from 'react-native';

import {
  Container,
  Header,
  Title,
  Body,
  Left,
  Right,
  Content,
  Footer,
  FooterTab,
  Icon,
  Button,
  Drawer
} from 'native-base';


export default class App extends Component {
  constructor(){
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const initialState = [{id: 1, task: "Coding"}]
    this.state = {
      inputText: "",
      dataSource: ds.cloneWithRows(initialState),
      todos: initialState
		}
  }


  render() {
    closeDrawer = () => {
      this.drawer._root.close();
    }

    openDrawer = () => {
      this.drawer._root.open();
    }


    const { navigate }  = this.props.navigation;

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>Todo App</Title>
          </Body>
          <Right />
        </Header>

        <Content>

          <Button
            onPress={() => {navigate('CreateCard') }}
            title="Add Todo"
            color="#841584"
            accessibilityLabel="Add new todo"
          />

          <ListView
            dataSource={this.state.dataSource}
            renderRow={ (todo) => <Text>{todo.task}</Text> }
           />

        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>

    );
  }
}
