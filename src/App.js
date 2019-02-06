import React, { Component } from "react";
import styled from "styled-components";
import "styled-components/macro";
import image from "./icons-sprite-with-name.png";
import star from "./star.png";
import TopUserInfo from "./topUserInfo";
import StartRating from "./StartRating";

const Chevorn = styled.i`
  ::before {
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
`;
const Wrapper = styled.div`
  max-width: 270px;
  border: 2px solid #f8f8f8;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
`;
const Rating = styled.div`
  display: flex;
  color: gold;
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  padding-top: 5px;
  h5 {
    padding-right: 20px;
    margin: 0;
    padding-left: 5px;
  }
`;

const ReviewSource = styled.div`
  background-image: url(${image});
  background-position: -814px -661px;
  vertical-align: middle;
  transform: scale(0.7);
  width: 44px;
  height: 46px;
  margin-top: -6px;
`;
const Star = styled.img`
  width: 20px;
  vertical-align: middle;
  height: 20px;
`;
const RatingBox = styled.div`
  display: flex;
  padding: 0px;
  margin: 0;
  justify-content: space-between;
`;

const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 5px;
  font-size: 0.9rem;
  color: gray;
`;
const sourceName = ["Google", "Facebook", "BBB"];
const source = ["-814px -661px", "-96px -734px", "-1px -514px"];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
    const { currentReview, data } = this.state;
    this.setState(
      {
        current: data[currentReview + 1]
      },
      () =>
        this.setState({ currentReview: currentReview + 1 }, () =>
          this.setState({
            backgroundPos: this.state.source[
              this.state.sourceName.indexOf(this.state.current.sourceType)
            ]
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
    const { current, currentReview } = this.state;
    return (
      <>
        {/* {console.log(this.state.data)} */}
        {/* {this.state.data.length > 0 &&
          console.log(this.state.data[2].reviewer.lastName)}
        {this.state.data[0] &&
          console.log(this.state.data[2].reviewer.lastName)}
        {console.log("undefined when render() first runs:")}
        {console.log(this.state.data[0])}
        {this.state.current.reviewer &&
          console.log(this.state.data[2].reviewer.firstName)} */}
        <Wrapper>
          {/* {console.log(
            current[currentReview] && current[currentReview].sourceType
          )} */}
          <TopUserInfo reviewer={current.reviewer} date={current.reviewDate} />
          <Container>
            <StartRating
              sourceType={current.sourceType}
              backgroundPos={this.state.backgroundPos}
              rating={current.rating}
            />
            <Body>
              <button onClick={this.lastReview}>
                <Chevorn left />
              </button>
              <Text>{current.comments}</Text>
              <button onClick={this.nextReview}>
                <Chevorn />
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
