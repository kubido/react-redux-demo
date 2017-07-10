import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { AppRegistry } from 'react-native';

import Home  from '../screens/Home'
import Cards  from '../screens/Cards'
import CreateCard  from '../screens/CreateCard'

export default AppNavigator = StackNavigator({
  Home: {screen: Home},
  Cards: {screen: Cards},
  CreateCard: {screen: CreateCard}
})
