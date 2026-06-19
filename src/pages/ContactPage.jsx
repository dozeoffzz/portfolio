import React from "react";
import styled from "@emotion/styled";
import background from "../assets/imgs/background.webp";
import movepage from "../assets/icons/movepage.svg";

const Section = styled.div`
  position: relative;
  padding: 0 50px;
  background-image: url(${background});
  width: 100%;
  height: 100vh;
`;

const WidthLine = styled.div`
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #00ff03;
`;

const HeightLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40%;
  width: 2px;
  background-color: #00ff03;
`;

const ContactContainer = styled.div`
  position: absolute;
  top: 37%;
  left: 42%;
  color: #fafafa;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContactWrap = styled.div`
  padding: 10px;
  display: flex;
  width: 450px;
  justify-content: space-between;
  gap: 40px;
  border: 1px solid #00ff03;
`;

const EndingText = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  color: #fafafa;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  padding-bottom: 55px;
`;

const EndingTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 60px;
  color: #fafafa20;
  transform: scaleY(2);
  transform-origin: center;
`;
const EndingBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const EndingBottomLeft = styled.p`
  font-size: 80px;
  color: #fafafa20;
  transform: scaleY(2);
  transform-origin: center;
`;
const EndingBottomRight = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Time = styled.p`
  font-size: 36px;
`;
const TimeText = styled.p`
  font-size: 24px;
  font-family: "Pretendard";
`;
export default function ContactPage() {
  return (
    <Section>
      <WidthLine />
      <HeightLine />
      <ContactContainer>
        <ContactWrap>
          <p>010-3375-8440</p>
          <img src={movepage} />
        </ContactWrap>
        <ContactWrap>
          <p>coolluck247@gmail.com</p>
          <img src={movepage} />
        </ContactWrap>
        <ContactWrap>
          <p>dozeoffzz</p>
          <img src={movepage} />
        </ContactWrap>
      </ContactContainer>
      <EndingText>
        <EndingTop>
          <p>WEB DESIGNER</p>
          <p>PORTFOLIO</p>
        </EndingTop>
        <EndingBottom>
          <EndingBottomLeft>THANKS FOR WATCHING</EndingBottomLeft>
          <EndingBottomRight>
            <Time>00:07:29</Time>
            <TimeText>
              포트폴리오를 끝까지 봐주셔서 감사합니다.
              <br />
              시간은 제 포트폴리오에 머무르신 시간입니다.
            </TimeText>
          </EndingBottomRight>
        </EndingBottom>
      </EndingText>
    </Section>
  );
}
