import React, { Component } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";
import CarouselPage from "../src/containers/CarouselPage/index";
import "styled-components/macro";
import star from "./star.png";

import TopUserInfo from "./topUserInfo";
import StartRating from "./StartRating";
import Certified from "./badge.png";
import Car from "./Carousel";
// import { Carousel } from "./tester";
import Newer from "./New";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
.carousel.carousel-slider .control-arrow,.carousel .control-arrow{-webkit-transition:all .25s ease-in;-o-transition:all .25s ease-in;transition:all .25s ease-in;opacity:.4;position:absolute;z-index:2;top:20px;background:0 0;border:0;font-size:32px;cursor:pointer}.carousel .control-arrow:hover{opacity:1}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{margin:0 5px;display:inline-block;border-top:8px solid transparent;border-bottom:8px solid transparent;content:""}.carousel .control-disabled.control-arrow{opacity:0;cursor:inherit;display:none}.carousel .control-prev.control-arrow{left:0}.carousel .control-prev.control-arrow:before{border-right:8px solid #fff}.carousel .control-next.control-arrow{right:0}.carousel .control-next.control-arrow:before{border-left:8px solid #fff}.carousel{position:relative;width:100%}.carousel *{-webkit-box-sizing:border-box;box-sizing:border-box}.carousel button{outline:0;border:0;background:0 0}.carousel img{width:100%;display:inline-block;pointer-events:none}.carousel .carousel{position:relative}.carousel .control-arrow{top:50%;margin-top:-13px;font-size:18px}.carousel .thumbs-wrapper{margin:20px;overflow:hidden}.carousel .thumbs{-webkit-transition:all .15s ease-in;-o-transition:all .15s ease-in;transition:all .15s ease-in;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);position:relative;list-style:none;white-space:nowrap}.carousel .thumb{-webkit-transition:border .15s ease-in;-o-transition:border .15s ease-in;transition:border .15s ease-in;display:inline-block;width:80px;margin-right:6px;white-space:nowrap;overflow:hidden;border:3px solid #fff;padding:2px}.carousel .thumb.selected,.carousel .thumb:hover{border:3px solid #333;padding:2px}.carousel .thumb img{vertical-align:top}.carousel.carousel-slider{position:relative;margin:0;overflow:hidden}.carousel.carousel-slider .control-arrow{top:0;color:#fff;font-size:26px;bottom:0;margin-top:0;padding:5px}.carousel.carousel-slider .control-arrow:hover{background:rgba(0,0,0,.2)}.carousel .slider-wrapper{overflow:hidden;margin:auto;width:100%;-webkit-transition:height .15s ease-in;-o-transition:height .15s ease-in;transition:height .15s ease-in}.carousel .slider-wrapper.axis-horizontal .slider{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-horizontal .slider .slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-flow:column;flex-flow:column}.carousel .slider-wrapper.axis-vertical{-ms-box-orient:horizontal;display:-ms-flexbox;display:-moz-flex;display:flex}.carousel .slider-wrapper.axis-vertical .slider{-ms-flex-direction:column;flex-direction:column}.carousel .slider{margin:0;padding:0;position:relative;list-style:none;width:100%}.carousel .slider.animated{-webkit-transition:all .35s ease-in-out;-o-transition:all .35s ease-in-out;transition:all .35s ease-in-out}.carousel .slide{min-width:100%;margin:0;position:relative;text-align:center;background:#000}.carousel .slide img{width:100%;vertical-align:top;border:0}.carousel .slide iframe{display:inline-block;width:calc(100% - 80px);margin:0 40px 40px;border:0}.carousel .slide .legend{-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;position:absolute;bottom:40px;left:50%;margin-left:-45%;width:90%;border-radius:10px;background:#000;color:#fff;padding:10px;font-size:12px;text-align:center;opacity:.25;-webkit-transition:opacity .35s ease-in-out;-o-transition:opacity .35s ease-in-out;transition:opacity .35s ease-in-out}.carousel .control-dots{position:absolute;bottom:0;margin:10px 0;text-align:center;width:100%}@media (min-width:960px){.carousel .control-dots{bottom:0}}.carousel .control-dots .dot{-webkit-transition:opacity .25s ease-in;-o-transition:opacity .25s ease-in;transition:opacity .25s ease-in;opacity:.3;-webkit-box-shadow:1px 1px 2px rgba(0,0,0,.9);box-shadow:1px 1px 2px rgba(0,0,0,.9);background:#fff;border-radius:50%;width:8px;height:8px;cursor:pointer;display:inline-block;margin:0 8px}.carousel .control-dots .dot.selected,.carousel .control-dots .dot:hover{opacity:1}.carousel .carousel-status{position:absolute;top:0;right:0;padding:5px;font-size:10px;text-shadow:1px 1px 1px rgba(0,0,0,.9);color:#fff}.carousel:hover .slide .legend{opacity:1}.slide{margin-bottom:0!important;margin-top:0!important;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}.carousel .slide{background:#fff;margin:auto}.control-prev{width:50px!important;font-size:2rem}.control-next{width:50px}@media(min-width:1100px){.control-next{width:70px}.control-prev{width:70px!important;font-size:2rem}}.carousel.carousel-slider .control-arrow:before,.carousel .control-arrow:before{border-top:20px solid transparent;border-bottom:20px solid transparent}.carousel .control-next.control-arrow:before{border-left:20px solid #fff}.carousel .control-prev.control-arrow:before{border-right:20px solid #fff}
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700');
`;

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
        <GlobalStyle />

        {/* <CertReview>
          <div>
            <h4>{data.length}</h4>
            <h4>Certified</h4>
            <h4>Reviews</h4>
            <img src={star} />
          </div>
          <img src={Certified} />
        </CertReview>
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
        </Wrapper> */}
        <Newer data={data} />
        {/* <CarouselPage /> */}
        {/* <Car data={data} /> */}
      </>
    );
  }
}

export default App;
