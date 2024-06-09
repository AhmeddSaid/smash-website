import "./Testimonials.css";
import SectionTitle from "../UI/SectionTitle";
import avatar from "../../assets/avatars/avatar.webp";

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
        <div className="img-holder m-auto mt-[-56px] size-[115px] overflow-hidden rounded-full border-[6px] border-light-blue">
          <img src={slide.img} alt="" />
        </div>
        <div className="name mt-4 flex justify-center text-3xl font-bold text-main-blue">
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

  return (
    <div className="testimonials-section py-36">
      <SectionTitle title="Words From People Who Trust Us" />
      <div className="testimonials-container mt-32 flex flex-col gap-3 ">
        {renderCard()}
      </div>
    </div>
  );
}

export default Testimonials;
