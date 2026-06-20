import React from "react";
import styled from "@emotion/styled";
import myblog from "../assets/imgs/myblog.webp";
import myblog1728 from "../assets/imgs/myblog1728.webp";
import mainprofile from "../assets/imgs/mainprofile.webp";
import { NavLink } from "react-router-dom";

const Section = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${myblog});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const LineDown = styled.div`
  position: absolute;

  left: 51%;
  top: 61%;

  width: 2px;
  height: 0;

  background: #00ff03;

  animation: drawDown 0.5s forwards;

  @keyframes drawDown {
    to {
      height: 100px;
    }
  }

  @media (max-width: 1728px) {
    left: 51%;
    top: 51%;
  }
`;

const LineLeft = styled.div`
  position: absolute;

  left: calc(51% - 100px);
  top: calc(61% + 100px);

  width: 102px;
  height: 2px;

  background: #00ff03;

  transform: scaleX(0);
  transform-origin: right center;

  animation: drawLeft 0.5s forwards;
  animation-delay: 0.5s;

  @keyframes drawLeft {
    to {
      transform: scaleX(1);
    }
  }
  @media (max-width: 1728px) {
    left: calc(51% - 100px);
    top: calc(51% + 100px);
  }
`;

const LineUp = styled.div`
  position: absolute;

  left: calc(51% - 100px);
  top: calc(61% + 100px);

  width: 2px;
  height: 0;

  background: #00ff03;

  transform-origin: bottom;

  animation: drawUp 0.5s forwards;
  animation-delay: 1s;

  @keyframes drawUp {
    to {
      height: 100px;
      transform: translateY(-100px);
    }
  }
  @media (max-width: 1728px) {
    left: calc(51% - 100px);
    top: calc(51% + 100px);
  }
`;

const LineRight = styled.div`
  position: absolute;

  left: calc(51% - 100px);
  top: 61%;

  width: 0;
  height: 2px;

  background: #00ff03;

  animation: drawRight 0.8s forwards;
  animation-delay: 1.5s;

  @keyframes drawRight {
    to {
      width: 200px;
    }
  }
  @media (max-width: 1728px) {
    left: calc(51% - 100px);
    top: 51%;
  }
`;

const ProfileArea = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 300px;

  left: calc(51% + 100px);
  top: calc(61% - 70px);

  opacity: 0;

  animation: showProfile 0.5s forwards;
  animation-delay: 2.3s;

  @keyframes showProfile {
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1728px) {
    left: calc(51% + 100px);
    top: calc(51% - 100px);
  }
`;
const ProfileName = styled.h1`
  padding: 10px;
  font-size: 18px;
  font-family: "Pretendard";
  background-color: #00ff03;
  height: 30px;
  display: flex;
  align-items: center;
`;

const ProfileImgWrap = styled.div`
  position: relative;
`;
const ProfileGender = styled(ProfileName)`
  font-weight: 500;
`;
const ProfileAge = styled(ProfileGender)``;
const ProfileProject = styled(ProfileGender)``;

const ClickHere = styled.p`
  padding: 10px 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #0c0c0c20;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00ff03;
  font-size: 20px;
  font-family: "Pretendard";

  opacity: 0;

  animation: showClickHere 0.5s forwards;
  animation-delay: 2.8s;

  @keyframes showClickHere {
    to {
      opacity: 1;
    }
  }
`;

export default function MainPage() {
  return (
    <Section>
      <LineDown />
      <LineLeft />
      <LineUp />
      <LineRight />
      <NavLink to="/resume">
        <ProfileArea>
          <ProfileName>CHOI</ProfileName>
          <ProfileImgWrap>
            <img src={mainprofile} alt="" />
            <ClickHere>Click Here</ClickHere>
          </ProfileImgWrap>
          <ProfileGender>Gender : male</ProfileGender>
          <ProfileAge>Age : 27</ProfileAge>
          <ProfileProject>Project : Web Design Portfolio</ProfileProject>
        </ProfileArea>
      </NavLink>
    </Section>
  );
}
