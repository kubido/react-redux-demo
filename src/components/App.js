import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../stores'

import '../App.css';
import logo from '../logo.svg';
import ListNews from './ListNews';
import NewsDetail from './NewsDetail';
import Home from './Home';
import ReduxDemo from './ReduxDemo';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>

            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
              </div>
            </div>
            <div style={styles.container} >
              <ul>
                <li style={styles.menuLi}><Link style={styles.button} to="/"> Home </Link> </li>
                <li style={styles.menuLi}><Link style={styles.button} to="/news"> News </Link> </li>
                <li style={styles.menuLi}><Link style={styles.button} to="/redux"> Redux </Link> </li>
              </ul>

              <Route exact path="/" component={Home} />
              <Route exact path="/news" component={ListNews} />
              <Route path="/news/:id" component={NewsDetail} />
              <Route path="/redux" component={ReduxDemo} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

const styles = {
  container: {
    width: '720px',
    margin: '0 auto'
  },
  menuLi: {
    display: 'inline-block',
    marginRight: '10px'
  },
  button: {
    background: 'aliceblue',
    border: '1px solid cadetblue',
    padding: '10px 15px'
  }
}
export default App;
