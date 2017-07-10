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
  TextInput,
  TouchableHighlight
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

import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      inputText: "",
      dataSource: ds.cloneWithRows(this.props.todos),
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
					<ListView
            dataSource={this.state.dataSource}
            renderRow={ (todo) => <Text>{todo.task}</Text> }
           />
           <TouchableHighlight onPress={ () => navigate('CreateCards')}>
            <Text>
              Add new
            </Text>
           </TouchableHighlight>
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

const mapStateToProps = (state) => {
  cards: state.todo.todos
}
export default connect(mapStateToProps, null)(App)
