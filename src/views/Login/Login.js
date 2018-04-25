import React, {Component} from 'react';
import {connect} from 'react-redux'

import {Form, Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';

import {authActions} from '../../actions';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  constructor(props) {
    super(props);

    this.props.logout();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    const { loggingIn } = this.props;
    const { username, password } = this.state;

    return (
      <div className="animated fadeIn flex-row align-items-center">
          <Row className="justify-content-center">
            <Col xs="12" style={{paddingTop:10,maxWidth:500}}>
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    { loggingIn ? this.renderSpinner() : this.renderLoginForm(username, password) }
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
      </div>
    );
  }

  renderLoginForm(username, password) {
    return (
      <Form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <p className="text-muted">Sign In to your account</p>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-user"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input name="username" type="text" placeholder="Username" value={username} onChange={this.handleInputChange}/>
        </InputGroup>
        <InputGroup className="mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-lock"></i>
            </InputGroupText>
          </InputGroupAddon>
          <Input name="password" type="password" placeholder="Password" value={password} onChange={this.handleInputChange}/>
        </InputGroup>
        <Row>
          <Col xs="6">
            <Button color="link" className="px-0">Forgot password?</Button>
          </Col>
          <Col xs="6" className="text-right">
            <Button color="primary" className="px-4" onClick={this.onSubmit}>Login</Button>
          </Col>
        </Row>
      </Form>
    );
  }

  renderSpinner() {
    return (
      <div>
        <Row className="justify-content-center">
          <i className="fa fa-circle-o-notch fa-spin fa-3x"></i>
        </Row>
        <Row className="justify-content-center" style={{paddingTop:10}}>
          <strong>Please wait while we sign you in...</strong>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggingIn: state.auth.loggingIn
});

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(authActions.login(username, password))
  },
  logout: () => {
    dispatch(authActions.logout())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
