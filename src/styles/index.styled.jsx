import { Menu } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

// NAVIGATION
const NavWrapper = styled.nav`
  padding: 1.5rem 5rem;
  grid-template-columns: 25% 50% 25%;
  position: relative;
  background-color: #392a16;
  color: #fff;
  z-index: 10;
  position: sticky;
  top: 0;
  display: grid;
  align-items: center;
  @media (max-width: 821px) {
    padding: 1.5rem 2rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;
const Logo = styled.h2`
  display: flex;
  margin: auto;
  color: #e5b861;
  @media (max-width: 821px) {
    font-size: 1.8rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
const Logo2 = styled.img`
  display: none;
  margin: auto 0;

  @media (max-width: 450px) {
    display: block;
    width: 3.25rem;
    height: 3.25rem;
  }
`;
const NavWrapperLink = styled.div`
  display: flex;
  gap: 4rem;
  margin: auto;
  @media (max-width: 821px) {
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    display: ${(props) => (props.active ? "flex" : "none")};
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
  }
`;
const NavWrapperLinkIcon = styled.div`
  display: flex;
  gap: 2rem;
  margin: auto;
  @media (max-width: 821px) {
    gap: 0.5rem;
  }
  @media (max-width: 600px) {
    display: ${(props) => (props.active ? "flex" : "none")};
  }
`;
const StyledNavText = styled(NavLink)`
  color: #fff;
  font-weight: 500;
  transition: 0.2s;
  //   &.${(props) => props.activeclassname} {
  //     color: #e5b861;
  //   }
  &:hover {
    color: #e5b861;
  }
  @media (max-width: 600px) {
    display: block;
    margin-top: 2rem auto;
  }
`;
const StyledNavIcon = styled(NavLink)`
  color: #e5b861;
  transition: 0.2s;
  &:hover {
    color: #fff;
  }
`;

const StyledMenuIcon = styled(Menu)`
  display: none;
  position: absolute;

  cursor: pointer;
  color: #e5b861;
  font-size: 2rem;
  @media (max-width: 600px) {
    display: block;
  }
`;
// \HERO
const HeroMain = styled(motion.div)`
  grid-template-columns: 1fr 1fr;
  @media (max-width: 821px) {
    grid-template-columns: 70% 30%;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const HeroContainer = styled(motion.div)`
  display: grid;
  background-color: #392a16a1;

  padding: 1.5rem 5rem;
  align-items: center;
  @media (max-width: 821px) {
    padding: 1.5rem 2rem;
  }
  @media (max-width: 450px) {
    padding: 1.5rem 1.5rem;
  }
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;
const HeroContainerOverlay = styled(motion.div)`
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
const HeroHeader = styled(motion.h1)`
  margin-bottom: 2rem;
  color: #f5ebde;
  @media (max-width: 821px) {
    font-size: 2.8rem;
  }
  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;
const HeroSmText = styled(motion.h5)`
  margin-bottom: 2rem;
  @media (max-width: 821px) {
    font-size: 1.125rem;
  }
  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;
const HeroButton = styled(motion.button)`
  background-color: #e5b861;
  color: #392a16;
  font-weight: 400;
  display: flex;
  gap: 0.5em;

  @media (max-width: 450px) {
    padding: 0.5rem 1rem;
    margin: auto;
  }
`;

//PRODUCTS
const ProductMain = styled(motion.div)`
  margin: 5rem 0;
  padding: 1.5rem 5rem;
  @media (max-width: 821px) {
    grid-template-columns: 1fr;
    margin: 3.5rem 0;
    padding: 1.5rem 2rem;
    display: block;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 450px) {
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 1.8rem;
  }
`;
const ProductH2 = styled(motion.h2)`
  @media (max-width: 450px) {
    font-size: 1.8rem;
    margin-top: 2rem;
  }
`;
const PROcontentWrapper = styled(motion.div)`
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 4rem;
  height: 35rem;
  @media (max-width: 821px) {
    grid-template-columns: 1fr;
    margin-top: 2.5rem;
    height: 100%;
  }
  @media (max-width: 450px) {
    padding: 1.5rem 0;
    margin: 0;
  }
`;
const PROwigImage = styled(motion.div)`
  width: 100%;
  border-radius: 10px 10px 0 0;
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;
const PROwigText = styled(motion.div)`
  width: 100%;
  padding: 1rem;
  border-radius: 0 0 10px 10px;
  background-color: #e5b861;
  color: #392a16;

  @media (max-width: 450px) {
    width: 100%;
    border-radius: 0;
  }
`;
const PROwigSmText = styled(motion.p)`
  width: 25rem;
  @media (max-width: 450px) {
    font-size: 0.8rem;
    width: fit-content;
  }
`;
const PROwigButton = styled(motion.button)`
  background-color: #e5b861;
  color: #392a16;
  @media (max-width: 450px) {
    padding: 0.5rem 1rem;
  }
`;
const PROwigH2 = styled(motion.h2)`
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;
const PROwig = styled(motion.div)`
  height: 100%;
  width: 100%;
  @media (max-width: 821px) {
    height: 35rem;
  }
`;
const PROaccessory = styled(motion.div)`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 821px) {
    height: 35rem;
  }
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;
const PROaccessoryOverlay = styled(motion.div)`
  width: 100%;
  border-radius: 10px;
  @media (max-width: 450px) {
    border-radius: 0;
  }
`;
const PROaccesoryText = styled(motion.div)`
  padding: 2rem;
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;
const PROaccessorySmText = styled(motion.p)`
  width: 25rem;
  @media (max-width: 450px) {
    font-size: 0.8rem;
    width: fit-content;
    padding-left: 1rem;
  }
`;
const PROaccessoryH2 = styled(motion.h2)`
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;

// ABOUT
const AboutMain = styled(motion.div)`
  grid-template-columns: 1fr 1fr;

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
const AboutTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  padding-left: 5rem;
  padding-right: 3rem;
  justify-content: left;
  @media (max-width: 821px) {
    padding-left: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.8rem;
    padding-left: 1rem;
     padding-right: 1rem;
  }
`;
const AboutTextGrid = styled.div`
  @media (max-width: 821px) {
    margin: 5rem 0;
  }
  @media (max-width: 450px) {
    margin: 2rem 0;
    text-align: center;
  }
`;
const AboutOverlayWrapper = styled.div`
  height: 25rem;
  position: relative;
`;
const AboutOverlay = styled.div`
  background: #e5b861,
  z-index: +5,
  position: absolute,
  height: 100%,
  width: 100%,
  opacity: 0.15,
  
`;
const AboutImage = styled.div`
  width: 100%;
  height: 100%;
`;
const AboutTextH2 = styled.h2`
  margin-bottom: 2rem;
  color: #e5b861;
  @media (max-width: 821px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;
const AboutTextSm = styled.p`
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;
const AboutTextButton = styled.button`
  background-color: #fff;
  color: #323232;
  font-weight: 400;
  margin-top: 2rem;
  display: flex;
  gap: 0.5em;
  @media (max-width: 450px) {
    padding: 0.5rem 1rem;
    margin: 2rem auto;
  }
`;
//WHY CHOOSE US
const WCU = styled.div`
  height: 80vh;
  width: 100%;
  @media (max-width: 821px) {
    margin-bottom: 1rem;
    height: 100%;
  }
  @media (max-width: 450px) {
    height: 100%;
  }
`;

const WCUgrid = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  padding: 5rem;
  @media (max-width: 821px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    padding: 2rem;
  }
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;
const WCUh1 = styled.h1`
  color: #e5b861;
  @media (max-width: 821px) {
    font-size: 2.25rem;
  }
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;
const WCUh4 = styled.h4`
  @media (max-width: 450px) {
    font-size: 1.1rem;
    padding-top: 1rem;
  }
`;
const WCUgridSmText = styled.p`
  margin: 1rem 0;

  @media (max-width: 821px) {
    margin: 0;
  }
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

const WCUgridLink = styled(Link)`
  margin: 1rem 0;
  font-size: 1.2rem;
  @media (max-width: 821px) {
    margin: 0 0 1rem;
  }
  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;
const WCUbutton = styled.button`
  @media (max-width: 450px) {
    padding: 0.5rem 1rem;
  }
`;
const WCUicons = styled.div`
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    margin-top: 1rem;
  }
`;
const WCUiconsH3 = styled.h3`
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;
const WCUiconsSmText = styled.p`
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

//TESTIMONAL
const TTMmain = styled.div`
  padding: 5rem;
  @media (max-width: 821px) {
    padding: 2rem;
  }
  @media (max-width: 450px) {
    padding: 1rem;
  }
`;
const TTMtextContainer = styled.div`
  padding: 2rem;
`;
const TTMh2 = styled.h2`
  color: #e5b861;
  margin-bottom: 4rem;
  @media (max-width: 821px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;
const TTMSmText = styled.p`
  padding: 3rem;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;
const TTMh4 = styled.h4`
  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;
const TTMh6 = styled.h6`
  color: #e5b861;
  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;

//FOOTER
const FooterMain = styled.div`
  grid-template-columns: 1fr 1fr;

  @media (max-width: 821px) {
    grid-template-columns: 1fr;
  }
`;
const FooterContent = styled.div`
  padding: 5rem 5rem 5rem 2rem;

  @media (max-width: 821px) {
    padding: 5rem 2rem;
  }
  @media (max-width: 450px) {
    padding: 2rem 1rem;
  }
`;

const FooterImage = styled.div`
  @media (max-width: 821px) {
    display: none;
  }
`;
const FooterContentGrid = styled.div`
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
const FooterH3 = styled.h3`
  @media (max-width: 450px) {
    font-size: 1.8rem;
  }
`;
const FooterH4 = styled.h4`
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
`;
const FooterSmText = styled.p`
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`;

export {
  NavWrapper,
  Logo,
  Logo2,
  NavWrapperLink,
  StyledNavIcon,
  StyledNavText,
  NavWrapperLinkIcon,
  StyledMenuIcon,
  HeroContainer,
  HeroButton,
  HeroContainerOverlay,
  HeroHeader,
  HeroSmText,
  HeroMain,
  AboutMain,
  AboutTextButton,
  AboutTextContainer,
  AboutTextGrid,
  AboutTextH2,
  AboutTextSm,
  AboutImage,
  AboutOverlay,
  AboutOverlayWrapper,
  ProductMain,
  PROcontentWrapper,
  PROwig,
  PROaccessory,
  PROaccesoryText,
  PROaccessoryH2,
  ProductH2,
  PROwigImage,
  PROwigText,
  PROwigH2,
  PROwigButton,
  PROwigSmText,
  PROaccessoryOverlay,
  PROaccessorySmText,
  WCU,
  WCUh1,
  WCUiconsSmText,
  WCUgrid,
  WCUgridLink,
  WCUh4,
  WCUgridSmText,
  WCUbutton,
  WCUiconsH3,
  WCUicons,
  TTMmain,
  TTMh2,
  TTMSmText,
  TTMh4,
  TTMh6,
  TTMtextContainer,
  FooterMain,
  FooterContent,
  FooterImage,
  FooterH3,
  FooterSmText,
  FooterH4,
  FooterContentGrid,
};
