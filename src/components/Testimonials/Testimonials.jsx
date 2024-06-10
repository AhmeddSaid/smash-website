import "./Testimonials.css";
import SectionTitle from "../UI/SectionTitle";
import avatar from "../../assets/avatars/avatar.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slickPrevArrow from "../../assets/icons/slick-prev-arrow.svg";
import slickNextArrow from "../../assets/icons/slick-next-arrow.svg";

function Testimonials() {
  let slides = [
    {
      id: "1",
      name: "John Doe",
      img: avatar,
      title: "Operations Manager",
      company: "Smash",
      review:
        "Working closely with SDS team was truly enjoyable, the team is very highly motivated, talented and always ready to help, give the right recommendation and come up with creative ideas. All deliverables were sent on time, not once late.",
    },
    {
      id: "2",
      name: "John Doe",
      img: avatar,
      title: "Operations Manager",
      company: "Smash",
      review:
        "Working closely with SDS team was truly enjoyable, the team is very highly motivated, talented and always ready to help, give the right recommendation and come up with creative ideas. All deliverables were sent on time, not once late.",
    },
    {
      id: "3",
      name: "John Doe",
      img: avatar,
      title: "Operations Manager",
      company: "Smash",
      review:
        "Working closely with SDS team was truly enjoyable, the team is very highly motivated, talented and always ready to help, give the right recommendation and come up with creative ideas. All deliverables were sent on time, not once late.",
    },
    {
      id: "4",
      name: "John Doe",
      img: avatar,
      title: "Operations Manager",
      company: "Smash",
      review:
        "Working closely with SDS team was truly enjoyable, the team is very highly motivated, talented and always ready to help, give the right recommendation and come up with creative ideas. All deliverables were sent on time, not once late.",
    },
    {
      id: "5",
      name: "John Doe",
      img: avatar,
      title: "Operations Manager",
      company: "Smash",
      review:
        "Working closely with SDS team was truly enjoyable, the team is very highly motivated, talented and always ready to help, give the right recommendation and come up with creative ideas. All deliverables were sent on time, not once late.",
    },
    {
      id: "6",
      name: "John Doe",
      img: avatar,
      title: "Operations Manager",
      company: "Smash",
      review:
        "Working closely with SDS team was truly enjoyable, the team is very highly motivated, talented and always ready to help, give the right recommendation and come up with creative ideas. All deliverables were sent on time, not once late.",
    },
  ];

  const renderCard = () => {
    return slides.map((slide, i) => (
      <div className="review-item m-auto h-[518px] w-[946px] rounded-2xl bg-[#fafafa] px-24 ">
        <div className="img-holder m-auto mt-[-56px] relative top-[-56px] size-[115px] overflow-hidden rounded-full border-[6px] border-light-blue">
          <img src={slide.img} alt="" />
        </div>
        <div className="name mt-[-40px] flex justify-center text-3xl font-bold text-main-blue">
          {slide.name}
        </div>
        <div className="title mt-2 flex justify-center font-bold text-light-blue">
          {slide.title}, {slide.company}
        </div>
        <div className="review mt-20 flex justify-center text-center text-3xl font-bold italic text-main-blue">
          "{slide.review}"
        </div>
      </div>
    ));
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <img
        src={slickPrevArrow}
        alt=""
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <img
        src={slickNextArrow}
        alt=""
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div>
        <ul
          className="flex items-center justify-center"
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="slider-dot"
        style={{
          color: "blue",
          // border: "1px solid var(--light-blue)",
          borderRadius: "50%",
          height: "10px",
          width: "10px",
          background: "#d2d6e1",
          margin: "auto",
          marginTop: "-36px",
          transition: "300ms",
        }}
      ></div>
    ),
  };

  return (
    <div className="testimonials-section py-36">
      <SectionTitle title="Words From People Who Trust Us" />
      <Slider {...settings}>{renderCard()}</Slider>
    </div>
  );
}

export default Testimonials;
