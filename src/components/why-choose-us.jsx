import { Link } from "react-router-dom";
import {
  WCU,
  WCUbutton,
  WCUgrid,
  WCUgridLink,
  WCUgridSmText,
  WCUh1,
  WCUh4,
  WCUicons,
  WCUiconsH3,
  WCUiconsSmText,
} from "../styles/index.styled";
import {
  AttachMoney,
  Favorite,
  LocalShipping,
  SupportAgent,
  ThumbUp,
  WhatsApp,
} from "@mui/icons-material";
const WhyChooseUs = () => {
  return (
    <>
      <WCU id="why-choose-us">
        <div className="overlay"></div>
        <WCUgrid className="grid">
          <div className="text">
            <WCUh4>Why People Choose Us?</WCUh4>
            <WCUh1>Try Our Products</WCUh1>
            <WCUgridSmText>
              Dimchi, born from a passion for exquisite hair, offers premium
              extensions, wigs, accessories, and treatments. Elevate your
              confidence with our luxurious, quality-crafted solutions for every
              woman's journey.
            </WCUgridSmText>
            <WCUgridLink>
              Feel free to express yourself through your looks!
            </WCUgridLink>
            <Link to={"https://wa.link/0m8iqw"} className="btn-link">
              <WCUbutton>
                <span> Contact us</span> <WhatsApp />
              </WCUbutton>
            </Link>
          </div>
          <WCUicons className="icon">
            <div className="one">
              <div className="all-svg">
                <LocalShipping sx={{}} />
              </div>
              <WCUiconsH3>Fast Delivery</WCUiconsH3>
              <WCUiconsSmText>
                Swiftly transform your look with Dimchi's seamless, express
                delivery services.
              </WCUiconsSmText>
            </div>
            <div className="two">
              <SupportAgent />
              <WCUiconsH3>24/7 Support</WCUiconsH3>
              <WCUiconsSmText>
                Your beauty journey is our priority; Dimchi, always here for
                you.
              </WCUiconsSmText>
            </div>
            <div className="three">
              <AttachMoney />
              <WCUiconsH3>Best Price</WCUiconsH3>
              <WCUiconsSmText>
                Value-worthy prices reflect luxury without compromising quality
                and elegance.
              </WCUiconsSmText>
            </div>
            <div className="four">
              <ThumbUp />
              <WCUiconsH3>Premium Quality</WCUiconsH3>
              <WCUiconsSmText>
                Delivering Quality Hair, Ensuring Your Value Transforms
                Beautifully.
              </WCUiconsSmText>
            </div>
          </WCUicons>
        </WCUgrid>
      </WCU>
    </>
  );
};

export default WhyChooseUs;
