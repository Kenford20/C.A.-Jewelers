import React, { Component } from 'react';
import Routes from './pages/routes.js';
import { Provider } from 'react-redux';
import store from './redux-store'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <div className="App">
        <Routes/>
      </div>
      </Provider>
    );
  }
}

export default App;
