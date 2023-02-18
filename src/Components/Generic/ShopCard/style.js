import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`
  0%{
    transform: translateX(20px);
  }
  100%{
    transform: translateX(0px)
  }
`;

const Wrapper = styled.div`
  width: 258px;
  height: 340px;
  position: relative;
`;
Wrapper.ImgSide = styled.div`
  width: 258px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
Wrapper.Img = styled.img`
  width: 250px;
  height: 250px;
  background-color: #fff;
`;
Wrapper.Buttons = styled.div`
  width: 150px;
  height: 30px;
  float: right;
  animation-name: ${({ hover }) => hover && appearAnimation};
  animation-iteration-count: 1;
  animation-duration: 1s;
  display: ${({ hover }) => (hover ? "flex" : "none")};
  gap: 10px;
  position: absolute;
  bottom: 70px;
  right: 0;
`;
Wrapper.Button = styled.button`
  width: 35px;
  height: 35px;
  left: 838px;
  top: 898px;
  border: none;
  background: #ffffff;
  border-radius: 4px;
  font-size: 18px;
  transition: all 0.5s;
  :hover {
    color: #46a358;
  }
`;
Wrapper.TextSide = styled.div`
  background-color: #fff;
  padding-top: 20px;
  height: 50px;
  width: 250px;
`;
Wrapper.Title = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #3d3d3d;
`;
Wrapper.Price = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  color: #46a358;
  margin-top: 6px;
`;
export { Wrapper };
