import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import LoginForm from './LoginForm';

import { login } from  '../../actions';
import { authErrors, isAuthenticated, isAuthenticating } from '../../reducers';

const Login = (props) => {
  console.log(props.isAuthenticated);
  return props.isAuthenticated ?
    <Redirect to='/' /> :
    <LoginForm {...props}/>
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticating: isAuthenticating(state),
  isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(login(username, password))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);