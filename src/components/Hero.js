import avatar from "../img/avatar.png";
import styled from "styled-components";
import blob from "../img/blob.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { heroSection } from "../config/heroSection";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = styled.section`
  padding: 9.6rem 0 9.6rem 0;
  position: relative;
`;

const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.headerText};
  font-weight: 600;
  letter-spacing: -0.5px;
  font-size: 7.2rem;
  line-height: 1.05;
  margin-bottom: 2.4rem;
  span {
    color: ${({ theme }) => theme.tertiary};
  }
`;

const HeroWave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
  }
  .shapeFill {
    fill: ${({ theme }) => theme.body};
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.4rem;
  @media (max-width: 71em) {
    justify-content: center; 
    padding: 0;
    margin: 0 auto;
  }
`;

const SocialLink = styled.a`
  &:link,
  &:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #fff;
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    color: #27ae60;
  }
`;

const HeroBox = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  padding: 4.8rem 3.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 8rem;
  @media (max-width: 71em) {
    grid-template-columns: 1fr;
    padding: 0 8rem;
    gap: 6.4rem;
    text-align: center;
  }
`;

const HeroTextBox = styled.div`
  color: ${({ theme }) => theme.headerText};
  @media (max-width: 71em) {
    margin-top: 6rem;
    text-align: center;
  }
`;

const HeroDescription = styled.p`
  color: ${({ theme }) => theme.headerText};
  font-size: 2.2rem;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 4.8rem;
`;

const HeroImage = styled.img`
  width: 100%;
  @media (max-width: 71em) {
    width: 80%;
  }
`;

const HeroImageBox = styled.div`
  background-image: url(${blob});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroBox>
        <HeroTextBox>
          <HeroTitle>{heroSection.headingText}</HeroTitle>
          <HeroDescription>{heroSection.descriptionText}</HeroDescription>
          <SocialLinks>
              {heroSection.instagramLink.include && (
                <SocialLink href={heroSection.instagramLink.url}>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                  ></FontAwesomeIcon>
                </SocialLink>
              )}
              {heroSection.facebookLink.include && (
                <SocialLink href={heroSection.facebookLink.url}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2x"
                  ></FontAwesomeIcon>
                </SocialLink>
              )}
              {heroSection.twitterLink.include && (
                <SocialLink href={heroSection.twitterLink.url}>
                  <FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon>
                </SocialLink>
              )}
              {heroSection.linkedinLink.include && (
                <SocialLink href={heroSection.linkedinLink.url}>
                  <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
                </SocialLink>
              )}
              {heroSection.githubLink.include && (
                <SocialLink href={heroSection.githubLink.url}>
                  <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
                </SocialLink>
              )}
              {heroSection.stackoverflowLink.include && (
                <SocialLink href={heroSection.stackoverflowLink.url}>
                  <FontAwesomeIcon icon={faStackOverflow} size="2x"></FontAwesomeIcon>
                </SocialLink>
              )}
            </SocialLinks>
        </HeroTextBox>
        <HeroImageBox>
          <HeroImage src={avatar} alt="Avatar" />
        </HeroImageBox>
      </HeroBox>
      <HeroWave>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shapeFill"
          ></path>
        </svg>
      </HeroWave>
    </HeroSection>
  );
}
