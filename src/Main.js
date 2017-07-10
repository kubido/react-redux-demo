import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store  from './stores';
import Navigator from './Navigator';

export default class Main extends Component {
  render() {
    return(
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
