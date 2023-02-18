import React from "react";
import { Wrapper } from "./style";
import logo from "../../assets/icons/logoFull.svg";
import shop from "../../assets/icons/shop.svg";
import login from "../../assets/icons/login.svg";
import search from "../../assets/icons/search.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../Generic/styles";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Wrapper.Navbar>
          <Wrapper.Logo src={logo} />
          <Wrapper.Links>
            <Wrapper.Link onClick={() => navigate("/")}>Home</Wrapper.Link>
            <Wrapper.Link onClick={() => navigate("/shop")}>Shop</Wrapper.Link>
            <Wrapper.Link>Plant Care</Wrapper.Link>
            <Wrapper.Link>Blogs</Wrapper.Link>
          </Wrapper.Links>
          <Wrapper.Btns>
            <Wrapper.Icon src={search} />
            <Wrapper.Icon src={shop} />
            <Wrapper.LoginBtn>
              <Wrapper.Icon src={login} /> Login
            </Wrapper.LoginBtn>
          </Wrapper.Btns>
        </Wrapper.Navbar>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
