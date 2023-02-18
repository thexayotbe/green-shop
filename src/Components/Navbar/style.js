import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
`;

Wrapper.Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
`;
Wrapper.Logo = styled.img``;
Wrapper.Links = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
`;

Wrapper.Link = styled.li`
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  color: #3d3d3d;
  :hover {
    color: #46a358;
  }
`;
Wrapper.Btns = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  gap: 30px;
`;
Wrapper.Icon = styled.img``;
Wrapper.LoginBtn = styled.button`
  width: 100px;
  height: 35px;
  background: #46a358;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  font-weight: 500;
`;
export { Wrapper };
