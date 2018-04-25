import React, {Component} from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  Badge
} from 'reactstrap';

class AuthHeader extends Component {

  render() {
    return (
      <header className="app-header navbar">
        <NavbarBrand></NavbarBrand>
      </header>
    );
  }
}

export default AuthHeader;
