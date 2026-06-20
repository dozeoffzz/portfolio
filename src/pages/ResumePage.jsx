import React from "react";
import background from "../assets/imgs/background.webp";
import styled from "@emotion/styled";

const Section = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export default function ResumePage() {
  return (
    <Section>
      <div></div>
    </Section>
  );
}
