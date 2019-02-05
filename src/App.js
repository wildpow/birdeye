import React, { Component } from "react";
import styled from "styled-components";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_SECRET_CODE, {
      headers: { Accept: "application/json" }
    })
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
    return <div />;
  }
}

export default App;
