import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import close from "../assets/icons/close.svg";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0c0c0c;
  z-index: 20;
`;

const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 1720px;
  height: 100vh;
  overflow: hidden;
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
  width: 1100px;
`;

const PrevImg = styled.img`
  position: absolute;
  left: -1000px;
  top: 50%;
  transform: translateY(-50%);
  width: 1100px;
  opacity: 0.5;
  cursor: pointer;
`;

const NextImg = styled.img`
  position: absolute;
  right: -1000px;
  top: 50%;
  transform: translateY(-50%);
  width: 1100px;
  opacity: 0.5;
  cursor: pointer;
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

export default function BannerModal({ isOpen, onClose, item, data, index }) {
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
      </ImgContainer>
    </Overlay>,
    document.getElementById("modal-root"),
  );
}
