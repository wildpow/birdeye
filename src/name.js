import React from "react";

const Name = props => {
  const { ...rest } = props.reviewer;
  return (
    <>
      {console.log(rest)}
      {`${rest.firstName} ${rest.lastName}`}
    </>
  );
};

export default Name;
