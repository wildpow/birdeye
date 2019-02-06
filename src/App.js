import React, { Component } from "react";
import styled, { css } from "styled-components";
import "styled-components/macro";

import TopUserInfo from "./topUserInfo";
import StartRating from "./StartRating";

const Chevorn = styled.i`
  ::before {
    transition: all 0.25s ease-in;
    ${props => props.newBc};
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: "";
    display: inline-block;
    height: 0.45em;
    left: 0.15em;
    position: relative;
    top: 0.15em;
    transform: rotate(-45deg);
    vertical-align: top;
    width: 0.45em;

    left: ${props => (props.left ? "0.25em" : "0")};
    transform: ${props => (props.left ? "rotate(-135deg)" : "rotate(45deg)")};
  }
`;
const Body = styled.div`
  display: flex;
  /* padding-left: 16px; */
  height: 150px;
  button {
    height: 150px;
    border: none;
    padding: 5px;
    outline: none;
  }
`;
const Wrapper = styled.div`
  max-width: 270px;
  border: 2px solid #f8f8f8;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-left: 16px; */
`;

const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 5px;
  font-size: 0.9rem;
  color: gray;
  height: 150px;
  width: 350px;
  overflow: hidden;
  font-weight: 100;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      bc: "white",
      currentReview: 0,
      current: [],
      source: ["-814px -661px", "-96px -734px", "-1px -514px"],
      sourceName: ["Google", "Facebook", "BBB"],
      backgroundPos: ""
    };
    this.nextReview = this.nextReview.bind(this);
    this.lastReview = this.lastReview.bind(this);
  }
  componentWillMount() {
    fetch(process.env.REACT_APP_SECRET_CODE, {
      headers: { Accept: "application/json" }
    })
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            data,
            current: data[this.state.currentReview]
          },
          () =>
            this.setState({
              backgroundPos: this.state.source[
                this.state.sourceName.indexOf(this.state.current.sourceType)
              ]
            })
        )
      );
  }

  nextReview() {
    const { currentReview, data, sourceName, current, source } = this.state;
    this.setState(
      {
        current: data[currentReview + 1]
      },
      () =>
        this.setState({ currentReview: currentReview + 1 }, () =>
          this.setState({
            backgroundPos: source[sourceName.indexOf(current.sourceType)]
          })
        )
    );
  }

  lastReview() {
    const { currentReview, data } = this.state;
    if (currentReview === 0) {
      this.setState(
        {
          current: data[-1]
        },
        this.setState({ currentReview: data.length })
      );
    } else {
      this.setState(
        {
          current: data[currentReview - 1]
        },
        () => this.setState({ currentReview: currentReview - 1 })
      );
    }
  }
  render() {
    const { current, bc } = this.state;
    const newBc = css`
      border-color: ${bc};
    `;
    return (
      <>
        <Wrapper>
          <TopUserInfo reviewer={current.reviewer} date={current.reviewDate} />
          <Container>
            <StartRating
              sourceType={current.sourceType}
              backgroundPos={this.state.backgroundPos}
              rating={current.rating}
            />
            <Body>
              <button
                onClick={this.lastReview}
                onMouseEnter={() => this.setState({ bc: "blue" })}
                onMouseLeave={() => this.setState({ bc: "white" })}
              >
                <Chevorn left newBc={newBc} />
              </button>
              <Text>{current.comments}</Text>
              <button
                onClick={this.nextReview}
                onMouseEnter={() => this.setState({ bc: "blue" })}
                onMouseLeave={() => this.setState({ bc: "white" })}
              >
                <Chevorn newBc={newBc} />
              </button>
            </Body>
          </Container>
          {/* <img src={image} /> */}
        </Wrapper>
      </>
    );
  }
}

export default App;
