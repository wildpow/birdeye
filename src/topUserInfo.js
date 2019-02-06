import React from "react";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  padding-left: 10px;
  flex-direction: column;
  color: white;
  h4 {
    padding-top: 5px;
    margin: 0;
    font-weight: 200;
  }
  span {
    font-size: 0.7em;
    font-weight: 700;
  }
`;

const Header = styled.header`
  background-color: blue;
  display: flex;
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 5px;
`;
const UserPic = styled.img`
  transform: scale(0.9);
  height: 47px;
  width: 47px;
  border-radius: 50%;
`;

const TopUserInfo = props => {
  const { ...rest } = props.reviewer;
  return (
    <>
      <Header>
        <div>
          <UserPic src={rest.thumbnailUrl} />
        </div>
        <Title>
          <h4>
            {`${rest.firstName} 
                
                ${rest.lastName}
                `}
          </h4>
          <span>{props.date}</span>
        </Title>
      </Header>
    </>
  );
};

export default TopUserInfo;
