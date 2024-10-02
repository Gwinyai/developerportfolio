import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import ContactUs from "../components/Contact";
import styled from "styled-components";
import { sections } from "../config/sections";

const HeaderWrapper = styled.div`
  background: ${({ theme }) => theme.secondary};
`;

export default function HomePage({ theme }) {
  return (
    <>
      <HeaderWrapper>
        <Navigation />
        <Hero />
      </HeaderWrapper>
      {sections.about && <About />}
      {sections.portfolio && (
        <Portfolio />
      )}
      {sections.contact && <ContactUs />}
    </>
  );
}
