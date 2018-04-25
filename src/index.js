import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute'

// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss';

// Containers
import Full from './containers/Full/';
import Auth from './containers/Auth/';

import { store, history } from './helpers';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
        <Switch>
          <Route path="/auth/" name="Login" component={Auth}/>
          <PrivateRoute path="/" name="Home" component={Full}/>
        </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
