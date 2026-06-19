import React from "react";
import background from "../assets/imgs/background.webp";
import styled from "@emotion/styled";

const Section = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100vh;
`;
export default function ResumePage() {
  return (
    <Section>
      <div></div>
    </Section>
  );
}
