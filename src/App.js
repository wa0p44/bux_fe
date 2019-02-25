import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './bootstrap.min.css';
import store from './store';
import Search from './components/Search';
import CompanyFavorites from './components/CompanyFavorites';
import CompanyDetails from './components/CompanyDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <main className="container">
          <h1>BUX Frontend developer home assignment</h1>
          <p className="text-muted">by Miguel Tjon-Kon-Fat</p>
          <Search />
          <CompanyFavorites />
          <CompanyDetails />
        </main>
      </Provider>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
