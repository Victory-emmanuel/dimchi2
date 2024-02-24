import { Link } from "react-router-dom";
import {
  PROaccesoryText,
  PROaccessory,
  PROaccessoryH2,
  PROaccessoryOverlay,
  PROaccessorySmText,
  PROcontentWrapper,
  PROwig,
  PROwigButton,
  PROwigH2,
  PROwigImage,
  PROwigSmText,
  PROwigText,
  ProductH2,
  ProductMain,
} from "../styles/index.styled";
import { WhatsApp } from "@mui/icons-material";
const Product = () => {
  return (
    <>
      <ProductMain id="product">
        <ProductH2>Our Products</ProductH2>
        <PROcontentWrapper className="content">
          <PROaccessory className="accessory cream">
            <PROaccessoryOverlay className="overlay"></PROaccessoryOverlay>
            <PROaccesoryText className="text">
              <PROaccessoryH2>Hair Treatment</PROaccessoryH2>
              <PROaccessorySmText>
                Nourish your strands with Dimchi's luxurious hair creams and
                treatments - a touch of opulence for your locks.
              </PROaccessorySmText>
              <Link to={"https://wa.link/0m8iqw"}>
                <PROwigButton>
                  <span> Contact us</span> <WhatsApp />
                </PROwigButton>
              </Link>
            </PROaccesoryText>
          </PROaccessory>
          <PROwig className="wig">
            <PROwigImage className="image"></PROwigImage>
            {/* <img src={pimg1} alt="" /> */}
            <PROwigText className="text">
              <PROwigH2>Women Wigs</PROwigH2>
              <PROwigSmText>
                Indulge in Dimchi's exquisite hair extensions and wigs, crafted
                for elegance, designed for confidence.
              </PROwigSmText>
              <Link to={"https://wa.link/0m8iqw"}>
                <PROwigButton>
                  <span> Contact us </span>
                  <WhatsApp />
                </PROwigButton>
              </Link>
            </PROwigText>
          </PROwig>
          <PROaccessory className="accessory">
            <PROaccessoryOverlay className="overlay"></PROaccessoryOverlay>
            <PROaccesoryText className="text">
              <PROaccessoryH2>Accessories</PROaccessoryH2>
              <PROaccessorySmText>
                Elevate your style with Dimchi's curated hair accessories, each
                piece a statement, every detail refined elegance
              </PROaccessorySmText>
              <Link to={"https://wa.link/0m8iqw"}>
                <PROwigButton>
                  <span> Contact us</span> <WhatsApp />
                </PROwigButton>
              </Link>
            </PROaccesoryText>
          </PROaccessory>
        </PROcontentWrapper>
      </ProductMain>
    </>
  );
};

export default Product;
