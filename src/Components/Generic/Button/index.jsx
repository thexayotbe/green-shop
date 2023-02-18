import React from "react";
import { Wrapper } from "./style";
const Button = ({ widthBtn, children, heightBtn }) => {
  return (
    <Wrapper widthBtn={widthBtn} heightBtn={heightBtn}>
      {children}
    </Wrapper>
  );
};

export default Button;
