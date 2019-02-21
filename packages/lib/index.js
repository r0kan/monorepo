import React, { Component } from "react";
import { startCase } from "lodash";

export class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>{startCase(this.props.text)}</button>;
  }
}

Button.defaultProps = {
  text: 'Click right now',
  onClick: () => { console.log('click') }
};