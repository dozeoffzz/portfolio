import React, { useState } from "react";
import styled from "@emotion/styled";
import background from "../assets/imgs/background.webp";
import backgroundtablet from "../assets/imgs/backgroundtablet.webp";
import backgroundphone from "../assets/imgs/backgroundphone.webp";
import { AllWeb } from "../apis/Web";
import { NavLink } from "react-router-dom";

const Section = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1024px) {
    background-image: url(${backgroundtablet});
  }
  @media (max-width: 440px) {
    background-image: url(${backgroundphone});
  }
`;

const LeftPanel = styled.div`
  padding: 100px 100px 0 50px;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

const ProjectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;
const ProjectNameKind = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
const ProjectName = styled.h2`
  font-size: 36px;
`;
const ProjectKind = styled.p`
  font-size: 28px;
`;
const ProjectTeam = styled.p`
  font-size: 24px;
`;
const ProjectInfo = styled.p`
  font-size: 16px;
  font-family: "Pretendard";
`;
const Responsiveimg = styled.img`
  display: flex;
  justify-self: center;
  align-self: center;
  width: 700px;

  @media (max-width: 1728px) {
    width: 400px;
  }
`;
const VistSite = styled(NavLink)`
  width: 100%;
  padding: 0 80px;
  background-color: #00ff03;
  text-align: center;
  display: flex;
  justify-self: center;
  align-self: center;
  color: #0c0c0c;
  display: inline-block;
  transform: scaleY(2);
  transform-origin: center;
  font-size: 24px;
  font-weight: 600;
`;
const RightPanel = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StackWrap = styled.div`
  position: absolute;
  left: 0;
  top: 60%;
  transform: translate(-50%, -50%);

  @media (max-width: 1728px) {
    top: 65%;
  }
`;

const ProjectImage = styled.div`
  position: absolute;
  transform: skewY(15deg);
  overflow: hidden;
  width: 500px;

  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-40px) skewY(15deg);
  }

  @media (max-width: 1728px) {
    width: 350px;
  }
`;

export default function WebDesignPage() {
  const [selectedProject, setSelectedProject] = useState(AllWeb[0]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [order, setOrder] = useState(AllWeb);

  const handleClick = (clickedItem) => {
    setSelectedProject(clickedItem);

    setOrder((prev) => [clickedItem, ...prev.filter((item) => item.id !== clickedItem.id)]);
  };
  return (
    <Section>
      <LeftPanel>
        <ProjectWrap>
          <ProjectNameKind>
            <ProjectName>{selectedProject.name}</ProjectName>
            <ProjectKind>{selectedProject.kind}</ProjectKind>
          </ProjectNameKind>
          <ProjectTeam>{selectedProject.team}</ProjectTeam>
          <ProjectInfo>{selectedProject.info}</ProjectInfo>
          <Responsiveimg src={selectedProject.responsiveimg} />
          <VistSite>Visit the Website</VistSite>
        </ProjectWrap>
      </LeftPanel>
      <RightPanel>
        <StackWrap>
          {order.map((item, index) => (
            <ProjectImage
              key={item.id}
              style={{
                left: `${index * 100}px`,
                top: `${-index * 80}px`,
                zIndex: order.length - index,
              }}
              onClick={() => handleClick(item)}
            >
              <img src={item.img} />
            </ProjectImage>
          ))}
        </StackWrap>
      </RightPanel>
    </Section>
  );
}
