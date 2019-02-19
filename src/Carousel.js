import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import star from "./star.png";
const Slide = styled.div`
  width: 100%;
  border: 4px solid black;
  height: 100%;
`;
const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 800px;
  height: 250px;
  margin: 0 auto !important;
  z-index: 1000;
`;
const Img = styled.img`
  opacity: 0;
  position: absolute;
`;
const poop = [star, star, star];
const Car = props => {
  const { data } = props;
  return (
    <div>
      <Carousel
        width="200px"
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        interval={500}
        centerMode
        centerSlidePercentage={100}
        showStatus={false}
        swipeable
        emulateTouch
        stopOnHover={true}
      >
        {/* {poop.map(i => (
          <div>
            <h1>hello</h1>
            <Img src={i} />
          </div>
        ))} */}
        {data.map(i => (
          <div key={i.reviewId}>
            <p>{i.comments}</p>
            {`${i.reviewer.firstName} ${i.reviewer.lastName}`}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Car;

// infiniteLoop
// autoPlay
// autoPlay={true}

// infiniteLoop={true}
// showThumbs={false}
// showArrows={true}
// showThumbs={false}
// showStatus={false}
// interval={1000}
// autoPlay
// infiniteLoop
// stopOnHover
// interval={000}
// useKeyboardArrows
// swipeable
// emulateTouch
// stopOnHover={true}
// centerMode
// centerSlidePercentage={100}
// showStatus={false}
// showIndicators={false}
