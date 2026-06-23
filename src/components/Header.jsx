import React, { useState } from "react";
import headerIcon from "../assets/icons/headericon.svg";
import headercurrenticon from "../assets/icons/headercurrenticon.svg";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 100px;
  z-index: 20;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  @media (max-width: 440px) {
    padding: 0 10px;

    display: none;
  }
`;
const Home = styled(NavLink)`
  @media (max-width: 1024px) {
    display: none;
  }
`;
const TopLogo = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 30;
  display: none;

  @media (max-width: 440px) {
    display: none;
  }
`;
const BottomNav = styled.div`
  display: none;

  @media (max-width: 440px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 30;
  }
`;

const NavWrap = styled("div", {
  shouldForwardProp: (prop) => prop !== "active",
})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 12px;
    gap: 10px;
  }
  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: center;
    font-size: 8px;
    gap: 10px;

    img {
      width: 20px;
    }
  }

  h2 {
    display: inline-block;
    transform: scaleY(2);
    transform-origin: center;
    color: ${({ active }) => (active ? "#fafafa" : "#d9d9d950")};
    transition: 0.3s;
  }
`;

export default function Header() {
  const homeMenu = { title: "", path: "/" };

  const menus = [
    { title: "RESUME", path: "/resume" },
    { title: "WEB DESIGN", path: "/webdesign" },
    { title: "BANNER DESIGN", path: "/bannerdesign" },
    { title: "GRAPHIC DESIGN", path: "/graphicdesign" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <HeaderContainer>
        <Home to="/">
          {({ isActive }) => (
            <NavWrap active={isActive}>
              <img src={isActive ? headercurrenticon : headerIcon} alt="" />
            </NavWrap>
          )}
        </Home>

        {menus.map((menu) => (
          <NavLink key={menu.path} to={menu.path}>
            {({ isActive }) => (
              <NavWrap active={isActive}>
                <img src={isActive ? headercurrenticon : headerIcon} alt={menu.title} />
                <h2>{menu.title}</h2>
              </NavWrap>
            )}
          </NavLink>
        ))}
      </HeaderContainer>

      <TopLogo>
        <NavLink to="/">
          {({ isActive }) => (
            <NavWrap active={isActive}>
              <img src={isActive ? headercurrenticon : headerIcon} alt="" />
            </NavWrap>
          )}
        </NavLink>
      </TopLogo>

      {/* 모바일 하단 메뉴 */}
      <BottomNav>
        {menus.map((menu) => (
          <NavLink key={menu.path} to={menu.path}>
            {({ isActive }) => (
              <NavWrap active={isActive}>
                <img src={isActive ? headercurrenticon : headerIcon} alt={menu.title} />
                <h2>{menu.title}</h2>
              </NavWrap>
            )}
          </NavLink>
        ))}
      </BottomNav>
    </>
  );
}
