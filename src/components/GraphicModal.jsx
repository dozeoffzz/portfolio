import React, { useState } from "react";
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgWrap = styled.div`
  width: 600px;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const AlbumInfo = styled.div`
  position: absolute;
  left: 100px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  color: #fafafa;
`;

export default function GraphicModal({ isOpen, onClose, item, data, index }) {
  if (!isOpen || index === null) return null;

  const prev = data[index - 1] || data[data.length - 1];
  const current = data[index];
  const next = data[index + 1] || data[0];

  const getOffset = (index) => {
    return `translateX(calc(50% - ${index * 700}px))`;
  };

  return createPortal(
    <Overlay onClick={onClose}>
      <ImgContainer onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>
          <img src={close} alt="close" />
        </CloseBtn>

        <ImgTrack>
          <ImgWrap>
            <img src={item.img} alt={item.name} />
          </ImgWrap>
        </ImgTrack>

        <AlbumInfo>
          <h2>Album Cover Design</h2>
          <p>{item.name}</p>
          <p>{item.info}</p>
        </AlbumInfo>
      </ImgContainer>
    </Overlay>,
    document.getElementById("modal-root"),
  );
}
