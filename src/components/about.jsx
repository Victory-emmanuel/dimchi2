import { Link } from "react-router-dom";
import {
  AboutImage,
  AboutMain,
  AboutOverlay,
  AboutOverlayWrapper,
  AboutTextButton,
  AboutTextContainer,
  AboutTextGrid,
  AboutTextH2,
  AboutTextSm,
} from "../styles/index.styled";
import { WhatsApp } from "@mui/icons-material";
const About = () => {
  return (
    <>
      {" "}
      <AboutMain id="about">
        <AboutTextContainer className="text">
          <AboutTextGrid className="grid">
            <AboutTextH2>About us</AboutTextH2>
            <AboutTextSm>
              I started selling in the year 2019. I have always had a flair and
              deep interest for hairs. Looking at a lady and the first thing that gets my attention is her hair, 
              because our face card never decline.
              Dimchi Hairs is birthed to boost and maintain such confidence. Being in the hair
              business is not just cause of the money but cause i love to see
              women slaying and walking with so much confidence cause our face
              card never declines with Dimchi Hairs.
            </AboutTextSm>
            <Link to={"https://wa.link/0m8iqw"}>
              <AboutTextButton>
                <span> Contact us</span> <WhatsApp />
              </AboutTextButton>
            </Link>
          </AboutTextGrid>
        </AboutTextContainer>
        <AboutOverlayWrapper>
          <AboutImage style={{ position: "relative" }} id="images">
            <AboutOverlay>.</AboutOverlay>
          </AboutImage>
        </AboutOverlayWrapper>
      </AboutMain>
    </>
  );
};

export default About;
