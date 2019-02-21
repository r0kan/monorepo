import React, { Component } from "react";
import ReactDom from "react-dom";

// package
import { Button } from '@app/lib';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }))
  }
  
  render() {
    const { counter } = this.state;
    return (
      <>
        <h1>MONOREPO EXAMPLE</h1>
        <Button onClick={this.handleClick} />
        <h4>You are clicked: {counter}</h4>
      </>
    );
  }
}

const container = document.querySelector("#app");
ReactDom.render(<App />, container);
