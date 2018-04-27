import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../reducers'

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
  return <Route {...rest} render={props => (
    isAuthenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
    )} />
};

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state)
})

export default connect(mapStateToProps, null)(PrivateRoute);
