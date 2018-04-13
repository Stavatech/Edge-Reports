import React, { Component } from 'react';

class ButtonWrapper extends Component {
  render() {
    return <section style={{textAlign: "right", paddingBottom: "10px", width: "100%"}}>
      {this.props.children}
    </section>
  }
}

export default ButtonWrapper;