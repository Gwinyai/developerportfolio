import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import { sections } from "../config/sections";
import { blogSettings } from "../config/blogSection";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9.6rem;
  padding: 0 4.8rem;
  position: relative;
`;

const MainNav = styled.nav`
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const MainNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  .navCta:link,
  .navCta:visited {
    padding: 1.2rem 2.4rem;
    border-radius: 9px;
    color: ${({ theme }) => theme.textSecondary};
    background-color: ${({ theme }) => theme.background};
  }
  .navCta:hover,
  .navCta:active {
    background-color: ${({ theme }) => theme.background};
  }
  
`;

const MainNavLink = styled.a`
  &:link,
  &:visited {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    color: ${({ theme }) => theme.headerText};
    font-weight: 600;
    font-size: 1.8rem;
    transition: all 0.3s;
  }
  &:hover,
  &:active {
    color: #27ae60;
  }
  
`;

const MobileNavButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  display: none;
  
`;

export default function Navigation() {
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <Header>
        <MainNav className={classNames({ navOpen: true })}>
          <MainNavList>
            {sections.about && (
              <li>
                <MainNavLink href="#about">About</MainNavLink>
              </li>
            )}
            {sections.portfolio && (
              <li>
                <MainNavLink href="#portfolio">Portfolio</MainNavLink>
              </li>
            )}
            {sections.blog && (
              <li>
                <MainNavLink href={blogSettings.blogUrl}>Blog</MainNavLink>
              </li>
            )}
            {sections.contact && (
              <li>
                <MainNavLink href="#contact">Contact</MainNavLink>
              </li>
            )}
          </MainNavList>
        </MainNav>
        <MobileNavButton>
          <FontAwesomeIcon
            name="closedMenu"
            icon={faXmarkCircle}
            size="2x"
            className={classNames(
              { iconNoDisplay: !isNavOpen },
              "closeNavMenuIcon"
            )}
            onClick={() => {
              setNavOpen(false);
            }}
          />
          <FontAwesomeIcon
            name="openMenu"
            icon={faBars}
            className={classNames(
              { iconNoDisplay: isNavOpen },
              "openNavMenuIcon"
            )}
            size="2x"
            onClick={() => {
              setNavOpen(true);
            }}
          ></FontAwesomeIcon>
        </MobileNavButton>
      </Header>
    </>
  );
}
