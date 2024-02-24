import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  HeroButton,
  HeroContainer,
  HeroContainerOverlay,
  HeroHeader,
  HeroMain,
  HeroSmText,
} from "../styles/index.styled";
import { motion, useAnimation } from "framer-motion";
import { WhatsApp } from "@mui/icons-material";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.6, ease: "easeOut" },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: 1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {" "}
      <HeroMain id="hero">
        <HeroContainer
          variants={containerVariants}
          animate="visible"
          initial="hidden"
        >
          <HeroContainerOverlay variants={overlayVariants}>
            <HeroHeader variants={headerVariants}>Modern Wigs</HeroHeader>
            <HeroSmText variants={textVariants}>
              Luxury Hair Solutions Tailored for You - Dimchi Beauty Unleashed.
            </HeroSmText>
            <Link to={"https://wa.link/0m8iqw"}>
              <HeroButton variants={buttonVariants}>
                <motion.span> Contact us</motion.span> <WhatsApp />
              </HeroButton>
            </Link>
          </HeroContainerOverlay>
        </HeroContainer>
      </HeroMain>
    </>
  );
};

export default Hero;
