import React, { Component } from "react";
import styled from "styled-components";
import "styled-components/macro";
import image from "./icons-sprite-with-name.png";
import star from "./star.png";
import TopUserInfo from "./topUserInfo";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      currentReview: 0,
      current: []
    };
    this.nextReview = this.nextReview.bind(this);
    this.lastReview = this.lastReview.bind(this);
  }
  componentDidMount() {
    fetch(process.env.REACT_APP_SECRET_CODE, {
      headers: { Accept: "application/json" }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          data,
          current: data[this.state.currentReview]
        })
      );
  }

  nextReview() {
    const { currentReview, data } = this.state;
    this.setState(
      {
        current: data[currentReview + 1]
      },
      () => this.setState({ currentReview: currentReview + 1 })
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
    const { current } = this.state;
    return (
      <>
        <Wrapper>
          {/* {console.log(current.reviewer.firstName)} */}
          <TopUserInfo reviewer={current.reviewer} date={current.reviewDate} />
          <Container>
            <RatingBox>
              <Rating>
                <h5>5.0</h5>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
              </Rating>

              <ReviewSource />
            </RatingBox>
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
        {/* <div dangerouslySetInnerHTML={this.createMarkup()} /> */}

        {/* <div>{data[0].reviewId}</div> */}
      </>
    );
  }
}

export default App;
