import React, { useState } from "react";
import styled from "@emotion/styled";
import background from "../assets/imgs/background.webp";
import backgroundtablet from "../assets/imgs/backgroundtablet.webp";
import backgroundphone from "../assets/imgs/backgroundphone.webp";
import { AllGraphic } from "../apis/Graphic";
import GraphicModal from "../components/GraphicModal";

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  width: 100%;
  min-height: 100vh;
  padding: 100px 0 0 0;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    background-image: url(${backgroundtablet});
  }
  @media (max-width: 440px) {
    background-image: url(${backgroundphone});
    padding: 0;
  }
`;
const GraphicContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  max-height: 100vh;
  gap: 10px;

  @media (max-width: 1728px) {
    max-width: 800px;
  }
`;

const GraphicWrap = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackImg = styled.img`
  display: flex;
`;

const FrontImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 80%;
  transition: transform 0.3s ease;
  cursor: pointer;

  transform: ${({ position }) => (position === "center" ? "translateX(-50%)" : "none")};

  left: ${({ position }) => (position === "left" ? "0" : position === "center" ? "50%" : "auto")};

  right: ${({ position }) => (position === "right" ? "0" : "auto")};

  &:hover {
    transform: ${({ position }) => (position === "center" ? "translateX(-50%) scale(1.1)" : "scale(1.1)")};
  }
`;

export default function GraphicDesignPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Section>
      <GraphicContainer>
        {AllGraphic.map((item, index) => (
          <GraphicWrap
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
              setIsModalOpen(true);
              setSelectedIndex(index);
            }}
          >
            <BackImg src={item.backimg} />
            <FrontImg src={item.img} position={item.position} />
          </GraphicWrap>
        ))}
      </GraphicContainer>
      <GraphicModal
        isOpen={isModalOpen}
        item={selectedItem}
        onClose={() => setIsModalOpen(false)}
        index={selectedIndex}
        data={AllGraphic}
      />
    </Section>
  );
}
