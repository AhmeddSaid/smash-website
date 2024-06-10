import SectionTitle from "../UI/SectionTitle";
import "./WhatsNew.css";
import avatar from "../../assets/avatars/avatar.webp";
import img1 from "../../assets/whats-new/img1.png";
import img2 from "../../assets/whats-new/img2.png";
import img3 from "../../assets/whats-new/img3.png";
import MainButton from "../UI/MainButton";

function WhatsNew() {
  const cards = [
    {
      id: 1,
      img: img1,
      tags: ["Development", "E-Commerce"],
      title: "5 Key Reasons Why E-Commerce Is Set To",
      date: "December 19th, 2021",
      avatar: avatar,
      name: "John Doe",
      jobTitle: "Web developer at SDS",
    },
    {
      id: 2,
      img: img2,
      tags: ["Development", "E-Commerce"],
      title: "5 Key Reasons Why E-Commerce Is Set To",
      date: "December 19th, 2021",
      avatar: avatar,
      name: "John Doe",
      jobTitle: "Web developer at SDS",
    },
    {
      id: 3,
      img: img3,
      tags: ["Development", "E-Commerce"],
      title: "5 Key Reasons Why E-Commerce Is Set To",
      date: "December 19th, 2021",
      avatar: avatar,
      name: "John Doe",
      jobTitle: "Web developer at SDS",
    },
  ];

  const renderCards = () => {
    return cards.map((card) => (
      <div
        key={card.id}
        className="news-card h-[645px] w-[475px] rounded-2xl bg-[#ebebeb]"
      >
        <div className="top flex h-[320px] w-[475px] items-center justify-center overflow-hidden">
          <img src={card.img} alt="" />
        </div>
        <div className="bottom h-[326px] w-[475px] cursor-pointer p-7">
          <div className="tags flex gap-3 text-xl font-medium">
            {card.tags.map((tag, i) => (
              <span className="tag relative z-10" key={i}>
                {tag}
              </span>
            ))}
          </div>
          <div className="title py-4 text-4xl font-bold text-main-blue">
            {card.title}
          </div>
          <div className="date text-light-blue">{card.date}</div>
          <div className="user-info flex items-center gap-5 py-4">
            <img
              src={card.avatar}
              alt=""
              width="100"
              className="rounded-full"
            />
            <div className="name-title">
              <div className="username text-2xl font-bold text-light-blue">
                {card.name}
              </div>
              <div className="user-title font-semibold opacity-60">
                {card.jobTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="whats-new-section  bg-[#fafafa] py-28">
      <SectionTitle title="What's new?" />
      <div className="news-cards-container my-14 flex items-center justify-center gap-10">
        {renderCards()}
      </div>
      <MainButton text="Read More" />
      <div className="newsletter m-auto mt-64 flex h-72 w-[80%] items-center justify-center gap-8 rounded-2xl px-24 ">
        <span className="h-20 w-[40%] text-4xl font-bold text-white">
          Subscribe to our newsletter and get in on the latest skoop!
        </span>
        <input
          type="email"
          className="w-[30%] rounded-2xl p-5 text-2xl"
          placeholder="Enter your email address"
        />
        <button className="w-[20%] rounded-2xl bg-[#55bd80] p-5 text-2xl font-semibold text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default WhatsNew;
