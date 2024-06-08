import SectionTitle from "../UI/SectionTitle";
import curArrow from "../../assets/icons/curved-arrow.svg";

function HowWeDoIt() {
  return (
    <div className="py-28">
      <SectionTitle title="how we do it" />

      <div className="mt-10 flex justify-center gap-16">
        <div className="item flex h-64 w-[334px] flex-col justify-between">
          <div className="num mb-3 flex  items-center justify-between ">
            <span className="flex size-20  items-center justify-center rounded-xl bg-light-blue text-5xl font-semibold text-white">
              01
            </span>
            <img src={curArrow} alt="" />
          </div>
          <div className="title text-2xl font-bold text-light-blue ">
            Listen & Understand
          </div>
          <div className="text mt-[0.8em] text-main-blue">
            This is where we ask alot of questions. To cater to your needs, we
            take a look into your industry world, gain deeper insights and
            listen to your goals to make the decisions that best fit your brand.
          </div>
        </div>
        <div className="item mt-14 flex h-64 w-[334px] flex-col justify-between">
          <div className="num mb-3 flex  items-center justify-between ">
            <span className="flex size-20  items-center justify-center rounded-xl bg-light-blue text-5xl font-semibold text-white">
              02
            </span>
            <img src={curArrow} alt="" />
          </div>
          <div className="title text-2xl font-bold text-light-blue ">
            Plan & Design
          </div>
          <div className="text mt-[0.8em] text-main-blue">
            The perfect strategy gets the perfect results! After research and
            analyses of your brand, we create strategies that deliver value,
            exceed expectations andget you the digital future you deserve.
          </div>
        </div>
        <div className="item mt-24 flex h-64 w-[334px] flex-col justify-between">
          <div className="num mb-3 flex  items-center justify-between ">
            <span className="flex size-20  items-center justify-center rounded-xl bg-light-blue text-5xl font-semibold text-white">
              03
            </span>
          </div>
          <div className="title text-2xl font-bold text-light-blue ">
            Develop & Monitor
          </div>
          <div className="text mt-[0.8em] text-main-blue">
            We’re with you till the end. Your team at Kaii Lab will implement
            the new strategies, monitor performance, and support you afterwards
            making sure your goals are being met!
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeDoIt;
