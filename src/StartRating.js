import React from "react";
import styled, { css } from "styled-components";
import star from "./star.png";
import image from "./icons-sprite-with-name.png";

const ReviewSource = styled.div`
  background-image: url(${image});
  ${props => props.newBP};
  vertical-align: middle;
  transform: scale(0.7);
  width: 44px; //44
  height: 46px; //46
  margin-top: -6px;
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

const StarRating = props => {
  let numRating = props.rating;
  if (props.rating % 1 === 0 && props.rating !== 0) {
    numRating = `${props.rating}.0`;
  } else {
    numRating = " ";
  }
  const { backgroundPos } = props;
  const newBP = css`
    background-position: ${backgroundPos};
  `;
  return (
    <RatingBox>
      {console.log(props)}
      <Rating>
        <h5>{numRating}</h5>
        {Array(props.rating).fill(<Star src={star} />)}
      </Rating>
      <ReviewSource newBP={newBP} />
    </RatingBox>
  );
};

export default StarRating;
