import React, { useState } from "react";
import background from "../assets/imgs/background.webp";
import styled from "@emotion/styled";
import choiwonhee from "../assets/imgs/choiwonhee.webp";
import ResumeImg from "../assets/imgs/resumeimg.webp";

const Section = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  font-family: "Pretendard";

  position: relative;
  overflow: hidden;
`;

const ResumeImgWrap = styled.img`
  padding: 100px 50px 50px 50px;
  position: absolute;
  display: flex;
  justify-self: center;
  align-self: center;
  z-index: 10;

  opacity: ${(props) => (props.hide ? 0 : 1)};
  transition: opacity 0.8s ease;
  pointer-events: ${(props) => (props.hide ? "none" : "auto")};
`;

const ResumeCenterContainer = styled.div`
  padding: 20px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  z-index: 14;
  background-color: #fafafa;
  border-radius: 30px;
  border: 1px solid #0c0c0c;
  width: 860px;
  left: 50%;
  transform: translateX(-50%);

  opacity: ${(props) => (props.hide ? 0 : 1)};
  transition: opacity 0.8s ease;
  pointer-events: ${(props) => (props.hide ? "none" : "auto")};
`;

const ImacIcon = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #0c0c0c;
  display: flex;
  gap: 20px;
`;
const ResumeCenterText = styled.p`
  padding: 20px 0 10px 0;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: 600;
`;
const MoreAboutMe = styled.button`
  padding: 10px;
  position: absolute;
  bottom: -25px;
  right: -25px;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 15px;
  border: 1px solid #0c0c0c;
  z-index: 18;
`;
const MoreAboutMeText = styled.p`
  font-size: 20px;
  color: blue;
  text-decoration: underline;
  font-weight: 500;
`;

const ImacIconRed = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff3b32;
`;
const ImacIconYellow = styled(ImacIconRed)`
  background-color: #ffcd00;
`;
const ImacIconGreen = styled(ImacIconRed)`
  background-color: #65d83d;
`;

const ResumeLeft = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;
  padding-left: 50px;
`;
const ResumeLeftWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const ResumeProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const ProfileName = styled.h2`
  padding: 10px;
  background-color: #00ff03;
  font-size: 18px;
`;

const ProfileGender = styled.p`
  padding: 10px;
  width: 300px;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #00ff03;
  font-size: 16px;
`;
const ProfileAge = styled(ProfileGender)``;
const ProfileSchool = styled(ProfileGender)``;
const ProfileCamp = styled(ProfileGender)``;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Introduce = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00ff03;
  padding: 20px;
`;
const SkillLisence = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-left: 20px;
`;
const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const Lisence = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const SkillLisenceText = styled.h3`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #00ff03;
  font-size: 18px;
  width: 270px;
`;

const SkillText = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 270px;
  height: 30px;
  background-color: #fafafa;
  font-size: 16px;
`;
const LisenceText = styled(SkillText)``;

const ResumeRight = styled.div`
  position: relative;
  display: flex;
  padding-top: 100px;
  width: 100%;
`;
const Experience = styled.h3`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #00ff03;
  width: 100%;
  height: 30px;
`;

const HeightLine = styled.div`
  position: absolute;
  left: 100px;
  top: 130px;
  bottom: 0;
  width: 2px;
  background-color: #0c0c0c;
`;

const ExperienceSince = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  left: 110px;
  top: 150px;
  color: #fafafa;
`;
const ExperienceText = styled.div`
  padding-left: 20px;
  font-size: 14px;
`;
const Since = styled.h3`
  position: relative;
  color: #00ff03;
  margin-left: 10px;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #00ff03;
    left: -30px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function ResumePage() {
  const [none, isNone] = useState(false);

  const handleView = () => {
    isNone(true);
  };
  return (
    <Section>
      <ResumeImgWrap src={ResumeImg} alt="resumeimg" hide={none} />
      <ResumeCenterContainer hide={none}>
        <ImacIcon>
          <ImacIconRed />
          <ImacIconYellow />
          <ImacIconGreen />
        </ImacIcon>
        <ResumeCenterText>
          안녕하세요. 저는 인테리어 디자인을 전공하며 공간과 디자인의 조화에 대해 배우고,
          <br />
          실무 경험을 통해 다양한 현장을 경험해왔습니다.
          <br />
          현장에서 다양한 경험을 하며 디자인이 단순히 시각적인 요소를 넘어
          <br />
          사용자 경험과 소통의 중요한 역할을 한다는 점에 큰 흥미를 느끼게 되었고,
          <br />
          디자인 결과물이 실시간으로 변동되고, 확인하는 웹디자이너에 흥미를 느끼게 되었습니다.
          <br />내 기준이 아닌 사용자를 생각하고 디자인하는 웹디자이너가 되고자 합니다.
        </ResumeCenterText>
        <MoreAboutMe onClick={handleView}>
          <MoreAboutMeText>More About Me</MoreAboutMeText>
        </MoreAboutMe>
      </ResumeCenterContainer>
      <ResumeLeft>
        <ResumeLeftWrap>
          <ResumeProfile>
            <ProfileName>최원희</ProfileName>
            <img src={choiwonhee} />
            <ProfileGender>Gender : male</ProfileGender>
            <ProfileAge>Age: 27 (2000.03.15)</ProfileAge>
            <ProfileSchool>광주대학교 인테리어 디자인 2019~25</ProfileSchool>
            <ProfileCamp>[이스트캠프] 오르미 프론트엔드 부트캠프</ProfileCamp>
          </ResumeProfile>
          <InfoWrap>
            <Introduce>
              인테리어디자인을 전공하며 다양한 공모전과 외부활동에 참여했고,
              <br /> 그 과정에서 여러 수상 경험을 쌓았습니다.
              <br /> 비록 웹디자인 분야에서의 경험과 수상 경력은 아직 부족할 수 있지만,
              <br /> 새로운 분야에 끊임없이 도전하며 경험을 넓혀가고 있습니다.
              <br /> 앞으로도 다양한 경험과 시도를 통해 넓은 시각으로 사고하고,
              <br /> 사용자 중심의 디자인을 만들어가는 디자이너로 성장하고자 합니다.
            </Introduce>
            <SkillLisence>
              <Skill>
                <SkillLisenceText>SKILLS</SkillLisenceText>
                <SkillText>
                  <img />
                  <p>Adobe Illustrator</p>
                </SkillText>
                <SkillText>
                  <img />
                  <p>Adobe Photoshop</p>
                </SkillText>
                <SkillText>
                  <img />
                  <p>Figma</p>
                </SkillText>
                <SkillText>
                  <img />
                  <p>Visual Studio Code HTML</p>
                </SkillText>
                <SkillText>
                  <img />
                  <p>Visual Studio Code CSS</p>
                </SkillText>
                <SkillText>
                  <img />
                  <p>Visual Studio Code REACT</p>
                </SkillText>
              </Skill>
              <Lisence>
                <SkillLisenceText>LISENCE</SkillLisenceText>
                <LisenceText>
                  <img />
                  <p>GTQ i 1 급</p>
                </LisenceText>
                <LisenceText>
                  <img />
                  <p>GTQ 1 급</p>
                </LisenceText>
                <LisenceText>
                  <img />
                  <p>전산응용건축제도기능사</p>
                </LisenceText>
                <LisenceText>
                  <img />
                  <p>실내건축기사</p>
                </LisenceText>
              </Lisence>
            </SkillLisence>
          </InfoWrap>
        </ResumeLeftWrap>
      </ResumeLeft>
      <ResumeRight>
        <Experience>EXPERIENCE</Experience>
        <HeightLine />
        <ExperienceSince>
          <div>
            <Since>2020</Since>
            <ExperienceText>
              <p>인테리어 디자인 학과 학생회 임원</p>
              <p>대한민국 수공예 문화상품 공모대전 특별상</p>
            </ExperienceText>
          </div>
          <div>
            <Since>2022</Since>
            <ExperienceText>
              <p>제 41회 대한민국디자인문화대전 전국공모전 특선</p>
              <p>제 8회 전국한색 스마트폰 공간사진 공모전 특선</p>
              <p>제 17회 한국공간디자인 전국공모전 입선</p>
            </ExperienceText>
          </div>
          <div>
            <Since>2023</Since>
            <ExperienceText>
              <p>제 18회 한국공간디자인 전국공모전 특선</p>
              <p>제 39회 무등 미술대전 입선</p>
              <p>대학생 아이디어 발굴 캠프 toyo in 장흥 특별상</p>
            </ExperienceText>
          </div>
          <div>
            <Since>2024</Since>
            <ExperienceText>
              <p>1학기 캡스톤디자인 경진대회최 우수상</p>
              <p>로컬 크리에이터 양성 아카데미 대상</p>
              <p>제 16회 실내디자인협회 주제공모전 입선</p>
              <p>2학기 캡스톤디자인 경진대회 장려상</p>
              <p>인테르니앤데코 제 17회 공간디자인대전 AI SPACE CREATION 디자인 특선</p>
            </ExperienceText>
          </div>
          <div>
            <Since>2025</Since>
            <ExperienceText>
              <p>고즈넉디자인 스튜디오 근무 </p>
              <p>[이스트캠프] 오르미 프론트엔드 부트캠프 11기 </p>
            </ExperienceText>
          </div>
        </ExperienceSince>
      </ResumeRight>
    </Section>
  );
}
