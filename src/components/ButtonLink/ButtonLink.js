import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class ButtonLink extends Component {
  render() {
    const {href, ...otherProps} = this.props;
    if (href == undefined) {
      return <Button {...otherProps}>{this.props.children}</Button>;
    }

    return <Link to={href}><Button {...otherProps}>{this.props.children}</Button></Link>
  }
}

export default ButtonLink;