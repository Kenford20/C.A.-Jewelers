import React, { Component } from 'react';
import Routes from './pages/routes.js';
import store from './redux-store'
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

class App extends Component {
  // purge local storage and reset redux store
  // componentDidMount() {
  //   persistor.purge();
  // }

  render() {
    return (
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <div className="App">
            <Routes/>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
