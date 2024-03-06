import { Link } from "react-router-dom";
import {
  FooterContent,
  FooterContentGrid,
  FooterH3,
  FooterH4,
  FooterImage,
  FooterMain,
  FooterSmText,
} from "../styles/index.styled";
import {
  EmailRounded,
  Google,
  Instagram,
  PhoneCallbackRounded,
  WhatsApp,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <FooterMain id="footer">
        <FooterImage className="image"></FooterImage>
        <FooterContent className="content">
          <div className="text">
            <FooterH3>Dimchi</FooterH3>
            <FooterSmText>
              Indulge in Dimchi's hair haven – where extensions and wigs meet
              elegance, accessories accentuate beauty, and creams provide a
              luscious touch. Elevate your style effortlessly!
            </FooterSmText>
          </div>
          <FooterContentGrid className="grid">
            {/* <div className="location">
              <h4>We are here</h4>
              <p>Nigeria, Lagos.</p>
              <p>39, New County Rd</p>
              <Link>
                <FmdGoodRounded /> <span>Visit us</span>
              </Link>
            </div> */}
            <div className="contact">
              <FooterH4>Contact Us</FooterH4>
              <p>
                <PhoneCallbackRounded
                  sx={{
                    width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
                  }}
                />
                <FooterSmText>+2348166757488</FooterSmText>
              </p>
              <p>
                <EmailRounded
                  sx={{
                    width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
                  }}
                />
                <FooterSmText>dimchiluxuryhairs@gmail.com</FooterSmText>
              </p>
            </div>
            <div className="socials">
              <FooterH4>Get us on socials</FooterH4>
              <div className="icon">
                <Link
                  style={{ color: "#392a16" }}
                  to={
                    "https://www.instagram.com/dimchi_luxury_hairs?igsh=dXBhZGptZGJpanp0&utm_source=qr"
                  }
                >
                  <Instagram
                    sx={{
                      width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
                    }}
                  />
                </Link>
                <Link
                  style={{ color: "#392a16" }}
                  to={"https://wa.link/0m8iqw"}
                >
                  <WhatsApp
                    sx={{
                      width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
                    }}
                  />
                </Link>
                <Link
                  style={{ color: "#392a16" }}
                  to={"https://g.co/kgs/j6wUje3"}
                >
                  <Google
                    sx={{
                      width: { lg: "1em", md: "1em", sm: "1em", xs: "0.8em" },
                    }}
                  />
                </Link>
              </div>
            </div>
          </FooterContentGrid>
        </FooterContent>
      </FooterMain>
    </>
  );
};

export default Footer;
