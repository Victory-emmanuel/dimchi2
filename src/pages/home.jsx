// import Img3 from "../assets/gimg3.jpg";
// import Img4 from "../assets/gimg4.jpg";
// import Img5 from "../assets/gimg5.jpg";
// import Img6 from "../assets/gimg6.jpg";

import {
  Hero,
  Product,
  About,
  Testimonial,
  Footer,
} from "../components/components";
import WhyChooseUs from "../components/why-choose-us";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <Hero />
      {/* <div id="gallery">
        <h2>Our Gallery</h2>
        <div className="images">
          <div className="first"></div>
          <img src={Img6} alt="" />
          <img src={Img3} alt="" />
          <img src={Img4} alt="" />
          <img src={Img5} alt="" />
       
        </div>
      </div> */}
      {/* PRODUCTS */}
      <Product />
      {/* ABOUT */}
      <About />
      {/* WHY CHOOSE US */}
      <WhyChooseUs />
      {/* TESTIMONIAL */}
      <Testimonial />
      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Home;
