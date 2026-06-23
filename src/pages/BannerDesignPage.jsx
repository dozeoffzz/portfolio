import React, { useState } from "react";
import styled from "@emotion/styled";
import background from "../assets/imgs/background.webp";
import backgroundtablet from "../assets/imgs/backgroundtablet.webp";
import backgroundphone from "../assets/imgs/backgroundphone.webp";
import { AllBanner } from "../apis/Banner";
import BannerModal from "../components/BannerModal";

const Section = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 50px;

  @media (max-width: 1024px) {
    background-image: url(${backgroundtablet});
  }
  @media (max-width: 440px) {
    background-image: url(${backgroundphone});
  }
`;

const BannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  max-height: 100vh;

  @media (max-width: 1728px) {
    max-width: 900px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 800px;
  }
  @media (max-width: 440px) {
    max-width: 350px;
  }
`;

const BannerWrap = styled.div`
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
  width: 85%;
  transition: transform 0.3s ease;
  cursor: pointer;

  transform: ${({ position }) => (position === "center" ? "translateX(-50%)" : "none")};

  left: ${({ position }) => (position === "left" ? "0" : position === "center" ? "50%" : "auto")};

  right: ${({ position }) => (position === "right" ? "0" : "auto")};

  &:hover {
    transform: ${({ position }) => (position === "center" ? "translateX(-50%) scale(1.1)" : "scale(1.1)")};
  }
`;
export default function BannerDesignPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Section>
      <BannerContainer>
        {AllBanner.map((item, index) => (
          <BannerWrap
            key={item.id}
            onClick={() => {
              setSelectedItem(item);
              setIsModalOpen(true);
              setSelectedIndex(index);
            }}
          >
            <BackImg src={item.backimg} />
            <FrontImg src={item.img} position={item.position} />
          </BannerWrap>
        ))}
      </BannerContainer>
      <BannerModal
        isOpen={isModalOpen}
        item={selectedItem}
        onClose={() => setIsModalOpen(false)}
        index={selectedIndex}
        data={AllBanner}
      />
    </Section>
  );
}
