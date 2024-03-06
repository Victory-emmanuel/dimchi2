import { Google, Instagram, WhatsApp } from "@mui/icons-material";
import logo from "../assets/logo.png";
import {
  Logo,
  Logo2,
  NavWrapper,
  NavWrapperLink,
  NavWrapperLinkIcon,
  StyledMenuIcon,
  StyledNavIcon,
  StyledNavText,
} from "../styles/index.styled";
import { useState } from "react";
const Nav = () => {
  const [active, setActive] = useState(false);
  const link = [
    { page: "Product", href: "/" },
    { page: "About", href: "/" },
    { page: "Testimonial", href: "/" },
    { page: "Contact", href: "/" },
  ];
  return (
    <>
      <NavWrapper>
        <div>
          <Logo>Dimchi</Logo>
          <Logo2 src={logo} alt="" />
        </div>
        <StyledMenuIcon
          sx={{
            display: { lg: "none", md: "none", sm: "none", xs: "block" },
            right: "20px",
            top: "30px",
          }}
          onClick={() => setActive(!active)}
        />
        <NavWrapperLink active={active}>
          {link.map((link) => (
            <StyledNavText
              // activeclassname="active"
              key={link.page}
              to={link.href}
            >
              {link.page}
            </StyledNavText>
          ))}
        </NavWrapperLink>
        <NavWrapperLinkIcon active={active}>
          <StyledNavIcon
            to={
              "https://www.instagram.com/dimchi_luxury_hairs?igsh=dXBhZGptZGJpanp0&utm_source=qr"
            }
          >
            <Instagram
              sx={{
                width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
              }}
            />
          </StyledNavIcon>
          <StyledNavIcon to={"https://wa.link/0m8iqw"}>
            <WhatsApp
              sx={{
                width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
              }}
            />
          </StyledNavIcon>
          
          </StyledNavIcon>
          <StyledNavIcon to={"https://g.co/kgs/j6wUje3"}>
            <Google
              sx={{
                width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
              }}
            />
          </StyledNavIcon>
        </NavWrapperLinkIcon>
      </NavWrapper>
    </>
  );
};

export default Nav;
