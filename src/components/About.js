import styled from "styled-components";
import { Container } from "../styles/base";
import { aboutSection } from "../config/aboutSection";

const AboutSection = styled.section`
  padding: 9.6rem 0 9.6rem 0;
`;

const AboutSubtitle = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 4.8rem;
  line-height: 1.05;
  margin-bottom: 3rem;
  text-align: center;
`;

const AboutBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 4.2rem;
  font-size: 2rem;
  line-height: 1.5;
  @media (max-width: 71em) {
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
    margin: 2.1rem;
  }
`;

export default function About() {
  return (
    <Container>
      <AboutSection id="experience">
        <AboutSubtitle>About</AboutSubtitle>
        <AboutBox>
          {aboutSection.description}
        </AboutBox>
      </AboutSection>
    </Container>
  );
}
