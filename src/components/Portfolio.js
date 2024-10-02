import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import LightenDarkenColor from "../utility/LightenDarken";
import blob from "../img/blob.svg";
import { portfolioSection } from "../config/portfolioSection";

const SliderWrapper = styled.div`
  overflow: hidden;
  border-radius: 30px;
`;

const ArrowLeft = styled.div`
    display: flex;
    align-items: center;
`;

const ArrowRight = styled.div`
    display: flex;
    align-items: center;
`;

const ArrowButton = styled.a`
    &,
    &:link,
    &:visited {
      display: inline-block;
      background-color: #000;
      padding: 2rem;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
    }
    &:hover,
    &:active {
      background-color: ${({ theme }) =>
        LightenDarkenColor(theme.primary, -30)};
    }
`;

  const PhoneMockup = styled.div`
    background-image: url(${blob});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    padding: 3.2rem 3.2rem;
  `;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const OverlayText = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  text-align: center;
`;

const OverlayButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CarouselBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 2.6rem;
    @media (max-width: 40em) {
      display: none;
    }
`;

  const SectionWrapper = styled.div`
    position: relative;
    background: linear-gradient(
      ${({ theme }) => theme.primary},
      ${({ theme }) => LightenDarkenColor(theme.secondary, -20)}
    );
  `;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 140rem;
    padding: 0 3.2rem;
    margin: 0 auto;
    @media (max-width: 71em) {
      grid-template-columns: 1fr;
    }
  `;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  padding: 20px;
  width: 100%; 
  @media (max-width: 71em) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
  @media (max-width: 59em) {
    grid-template-columns: repeat(1, 1fr);
    width: 80%; 
  }
`;

const GridItem = styled.div`
  position: relative;
  padding-bottom: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
  cursor: pointer; 
  &:hover .overlay {
    opacity: 1;
    visibility: visible;
  }
`;

const GridImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

const PortfolioBox = styled.div`
  display: block;
  @media (max-width: 71em) {
    
    margin-top: 10.2rem;
    justify-content: center;
    padding: 1.2rem;
    margin-bottom: 4.2rem;
  }
   
`;

const PortfolioTitle = styled.h2`
  color: #000;
  font-weight: 700;
  letter-spacing: -0.5px;
  font-size: 4.8rem;
  line-height: 1.05;
  margin-bottom: 6rem;
  text-align: center;
`;

export default function Portfolio() {
  const slider = React.createRef();

  const demoSlides = portfolioSection.carousel.slides;

  const portfolio = portfolioSection.portfolio.projects;

  const settings = {
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrow: false,
  };

  return (
    <>
      <SectionWrapper id="portfolio">
        <PortfolioTitle>
            Portfolio
        </PortfolioTitle>
        <Grid>
          <PortfolioBox>
            <div>
              <GridContainer>
              {portfolio.map((portfolio) => (
                <GridItem key={portfolio.name}>
                  <GridImage src={portfolio.src} />
                  <Overlay className="overlay">
                  <OverlayText>{portfolio.name}</OverlayText>
                  {portfolio.link && (
                    <a href={portfolio.link} target="_blank" rel="noopener noreferrer">
                    <OverlayButton>View Details</OverlayButton>
                  </a>
                  )}
                </Overlay>
                </GridItem>
              ))}
            </GridContainer>
            </div>
          </PortfolioBox>
          <CarouselBox>
            <ArrowLeft>
              <ArrowButton onClick={() => slider.current.slickPrev()}>
                <FontAwesomeIcon color="#FFF" icon={faArrowLeft} size="2x" />
              </ArrowButton>
            </ArrowLeft>
            <PhoneMockup>
              <div className="device device-iphone-x">
                <div className="device-frame">
                  <SliderWrapper>
                    <Slider {...settings} ref={slider}>
                      {demoSlides.map((slide) => (
                        <div key={slide.name}>
                          <img src={slide.src} />
                        </div>
                      ))}
                    </Slider>
                  </SliderWrapper>
                </div>
                <div className="device-stripe"></div>
                <div className="device-header"></div>
                <div className="device-sensors"></div>
                <div className="device-btns"></div>
                <div className="device-power"></div>
              </div>
            </PhoneMockup>
            <ArrowRight>
              <ArrowButton onClick={() => slider.current.slickNext()}>
                <FontAwesomeIcon color="#FFF" icon={faArrowRight} size="2x" />
              </ArrowButton>
            </ArrowRight>
          </CarouselBox>
        </Grid>
      </SectionWrapper>
    </>
  );
}
