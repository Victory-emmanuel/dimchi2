import {
  TTMSmText,
  TTMh2,
  TTMh4,
  TTMh6,
  TTMmain,
  TTMtextContainer,
} from "../styles/index.styled";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginRight: "3rem",
        marginTop: "2rem",
        color: "#e5b861",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "3rem",
        marginTop: "2rem",
        color: "#e5b861",
      }}
      onClick={onClick}
    />
  );
}
const Testimonial = () => {
  const carousel = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <TTMmain id="testimonial">
        <Slider {...carousel}>
          <TTMtextContainer className="text">
            <TTMh2>Testimonial</TTMh2>
            <div className="image adaeze"></div>
            <TTMSmText>
              Incredible wig quality! Transformed my look instantly. Dimchi
              Beauty, my go-to for premium hair solutions.
            </TTMSmText>

            <TTMh4>Adaeze Okonkwo</TTMh4>
            <TTMh6>Make up Artist</TTMh6>
          </TTMtextContainer>
          <TTMtextContainer className="text">
            <TTMh2>Testimonial</TTMh2>
            <div className="image ngozi"></div>
            <TTMSmText>
              Exquisite hair accessories! Unmatched style, durability, and
              variety. Dimchi Beauty, where elegance meets excellence.
            </TTMSmText>

            <TTMh4>Ngozi Adekunle</TTMh4>
            <TTMh6>Influcencer</TTMh6>
          </TTMtextContainer>
          <TTMtextContainer className="text">
            <TTMh2>Testimonial</TTMh2>
            <div className="image chiamaka"></div>
            <TTMSmText>
              Dimchi's hair cream is a game-changer! Nourishes, smoothens, and
              smells divine. A must-have in my beauty routine.
            </TTMSmText>

            <TTMh4>Chiamaka Okafor</TTMh4>
            <TTMh6>Hairdresser</TTMh6>
          </TTMtextContainer>
          <TTMtextContainer className="text">
            <TTMh2>Testimonial</TTMh2>
            <div className="image ifeoluwa"></div>
            <TTMSmText>
              Top-notch wigs! Stylish, comfortable, and natural-looking. Dimchi
              Beauty, exceeding expectations with every purchase.
            </TTMSmText>

            <TTMh4>Ifeoluwa Adeleke</TTMh4>
            <TTMh6>Stylist</TTMh6>
          </TTMtextContainer>
          <TTMtextContainer className="text">
            <TTMh2>Testimonial</TTMh2>
            <div className="image olufunke"></div>
            <TTMSmText>
              Obsessed with Dimchi's hair accessories! Elevate your style
              effortlessly. Quality and chic designs that steal the show
            </TTMSmText>

            <TTMh4>Olufunke Adebayo</TTMh4>
            <TTMh6>Make up Artist</TTMh6>
          </TTMtextContainer>
        </Slider>
      </TTMmain>
    </>
  );
};

export default Testimonial;
