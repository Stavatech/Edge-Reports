import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import AuthHeader from '../../components/AuthHeader/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Login from '../../views/Login/';
import Logout from '../Logout';

class Auth extends Component {
  render() {
    return (
      <div className="app">
        <AuthHeader />
        <div className="app-body">
          <main className="main" style={{marginLeft:0}}>
            <Container fluid>
              <Switch>
                <Route path="/auth/login" name="Login" component={Login}/>
                <Route path="/auth/logout" name="Logout" component={Logout}/>
                <Redirect from="/auth" to="/auth/login"/>
              </Switch>
            </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default Auth;
