import React, { Component } from "react";
import styled, { css } from "styled-components";
import "styled-components/macro";
import star from "./star.png";

import TopUserInfo from "./topUserInfo";
import StartRating from "./StartRating";
import Certified from "./badge.png";

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

const CertReview = styled.div`
  width: 145px;
  height: 75px;
  font-family: Arial, Helvetica, sans-serif;

  background-color: blue;
  display: flex;
  color: white;
  justify-content: space-between;
  div {
    padding: 7px 0 0 9px;
    display: flex;
    flex-direction: column;
    img {
      width: 20px;
      height: 20px;
    }
    h4 {
      margin: 0;
      padding: 0;
      font-size: 0.9rem;
    }
  }

  img {
    margin-top: -2px;
    margin-right: 7px;
    width: 45px;
    justify-self: start;
    height: 70px;
    transform: scale(0.9);
  }
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
    const { current, bc, data } = this.state;
    const newBc = css`
      border-color: ${bc};
    `;
    return (
      <>
        <CertReview>
          <div>
            <h4>{data.length}</h4>
            <h4>Certified</h4>
            <h4>Reviews</h4>
            <img src={star} />
          </div>
          <img src={Certified} />
        </CertReview>
        {console.log(data)}
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
