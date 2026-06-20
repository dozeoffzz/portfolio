import React from "react";
import styled from "@emotion/styled";
import background from "../assets/imgs/background.webp";

const Section = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100vh;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export default function WebDesignPage() {
  return (
    <Section>
      <div></div>
    </Section>
  );
}
