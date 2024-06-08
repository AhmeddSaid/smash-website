import React from "react";
import SectionTitle from "../UI/SectionTitle";
import webIcon from "../../assets/icons/web.svg";
import seoIcon from "../../assets/icons/seo.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";

const items = [
  {
    icon: webIcon,
    title: "Web Design & Development",
    text: "We create impeccable user experiences!",
  },
  {
    icon: seoIcon,
    title: "Search Engine Optimisation",
    text: "We will increase your traffic and make you sell more!",
  },
];

function WhatWeDo() {
  const renderServices = () => {
    return items.map((item, index) => (
      <div
        key={index}
        className="item flex h-[333px] w-[625px] flex-col items-center justify-between bg-white px-4 py-10"
      >
        <img src={item.icon} alt={item.title} width="55" />
        <h3 className="font-['Orbitron']  text-[1.75em] font-extrabold text-light-blue">
          {item.title}
        </h3>
        <p className="text-[1.1em] font-semibold leading-[1.3]">{item.text}</p>
        <Link
          to="/"
          className="text-[1.2em] font-bold leading-[1.5] text-[#002af5b3]"
        >
          Learn More
        </Link>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-[#f3f3f3] py-14">
      <SectionTitle title="what we do best" />
      <div className="holder flex items-center justify-center gap-9">
        {renderServices()}
      </div>
      <Link
        to="/"
        className="flex items-center justify-center gap-6 rounded-2xl bg-light-blue p-6 text-2xl font-bold text-white"
      >
        Learn More <img src={arrow} alt="" />
      </Link>
    </div>
  );
}

export default WhatWeDo;
