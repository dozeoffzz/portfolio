import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AllGraphic, ModalGraphic } from "../apis/Graphic";
import styled from "@emotion/styled";
import close from "../assets/icons/close.svg";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0c0c0cf8;
  z-index: 20;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1920px;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 1728px) {
    max-width: 1720px;
  }
  @media (max-width: 1024px) {
    max-width: 1024px;
  }
  @media (max-width: 440px) {
    max-width: 440px;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 50px;
  right: 100px;
  cursor: pointer;
  z-index: 30;

  img {
    width: 36px;
  }

  @media (max-width: 1024px) {
    top: 200px;
    right: 50px;
  }
  @media (max-width: 440px) {
    width: 30px;
    right: 10px;
    top: 150px;
  }
`;

const ImgTrack = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100px;
  overflow: hidden;
`;

const CenterImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 600px;

  @media (max-width: 1024px) {
    width: 600px;
  }
  @media (max-width: 440px) {
    width: 300px;
  }
`;

const PrevImg = styled.img`
  position: absolute;
  left: -500px;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  opacity: 0.5;
  cursor: pointer;

  @media (max-width: 1024px) {
    left: -550px;
    width: 600px;
  }
  @media (max-width: 440px) {
    left: -260px;
    width: 300px;
  }
`;

const NextImg = styled.img`
  position: absolute;
  right: -500px;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  opacity: 0.5;
  cursor: pointer;

  @media (max-width: 1024px) {
    right: -550px;
    width: 600px;
  }
  @media (max-width: 440px) {
    right: -260px;
    width: 300px;
  }
`;

const ImgWrap = styled.div`
  width: 600px;
  height: 600px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    object-fit: cover;
  }
`;
const AlbumInfo = styled.div`
  position: absolute;
  left: 150px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  color: #fafafa;
  z-index: 10;

  @media (max-width: 1024px) {
    left: 50px;
    bottom: 100px;
  }
  @media (max-width: 440px) {
    left: 30px;
    bottom: 130px;
  }
`;

const AlbumDesign = styled.h2`
  font-size: 44px;
  @media (max-width: 440px) {
    font-size: 24px;
  }
`;
const AlbumName = styled.p`
  font-size: 28px;
  font-weight: 500;
  font-family: "Pretendard";
  @media (max-width: 440px) {
    font-size: 20px;
  }
`;
const AlbumStyle = styled.p`
  font-family: "Pretendard";
  font-size: 14px;
  color: #696969;
`;
const AlbumInfoText = styled.p`
  font-size: 24px;
  font-family: "Pretendard";
  @media (max-width: 440px) {
    font-size: 16px;
  }
`;

export default function GraphicModal({ isOpen, onClose, item, data, index }) {
  if (!isOpen || index === null || !data?.length) {
    return null;
  }
  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);
  const [currentIndex, setCurrentIndex] = useState(index);

  const prevIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;

  const nextIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;

  const prev = data[prevIndex];
  const current = data[currentIndex];
  const next = data[nextIndex];
  return createPortal(
    <Overlay onClick={onClose}>
      <ImgContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <img src={close} alt="close" />
        </CloseBtn>

        <ImgTrack>
          <ImgWrap>
            <PrevImg src={prev.img} onClick={() => setCurrentIndex(prevIndex)} />
            <CenterImg src={current.img} alt={current.name} />
            <NextImg src={next.img} onClick={() => setCurrentIndex(nextIndex)} />
          </ImgWrap>
        </ImgTrack>

        <AlbumInfo>
          <AlbumDesign>Album Cover Design</AlbumDesign>
          <AlbumName>{current.name}</AlbumName>
          <AlbumStyle>*곡을 듣고 곡의 어울리는 분위기를 생각해 디자인 하였습니다.</AlbumStyle>
          <AlbumInfoText>{current.info}</AlbumInfoText>
        </AlbumInfo>
      </ImgContainer>
    </Overlay>,
    document.getElementById("modal-root"),
  );
}
