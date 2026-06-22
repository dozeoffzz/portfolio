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

  h2 {
    display: inline-block;
    transform: scaleY(2);
    transform-origin: center;
    color: ${({ active }) => (active ? "#fafafa" : "#d9d9d950")};
    transition: 0.3s;
  }
`;

export default function Header() {
  const menus = [
    { title: "-", path: "/" },
    { title: "RESUME", path: "/resume" },
    { title: "WEB DESIGN", path: "/webdesign" },
    { title: "BANNER DESIGN", path: "/bannerdesign" },
    { title: "GRAPHIC DESIGN", path: "/graphicdesign" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <HeaderContainer>
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
  );
}
