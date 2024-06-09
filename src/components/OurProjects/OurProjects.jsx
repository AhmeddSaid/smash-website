import SectionTitle from "../UI/SectionTitle";
import "./OurProjects.css";
import img from "../../assets/projects/project-1.png";
import arrowRight from "../../assets/icons/arrow.svg";

function OurProjects() {
  return (
    <div className="our-projects-section mt-32 bg-[#f3f3f3] py-32">
      <SectionTitle title={"Don't blink! Take a look at our projects!"} />
      <div className="grid-container mb-10">
        <div className="item-holder m-auto flex w-fit flex-col gap-5">
          <img className="rounded-2xl" src={img} alt="" width="576" />
          <div className="project-title text-5xl font-bold text-main-blue">
            Website
          </div>
          <div className="details flex justify-between">
            <span className="text-xl">Website Design and Development</span>
            <span className="text-xl">April 13, 2024</span>
          </div>
        </div>
        <div className="item-holder m-auto flex w-fit flex-col gap-5">
          <div className="project-title text-5xl font-bold text-main-blue">
            Website
          </div>
          <div className="details flex justify-between">
            <span className="text-xl">Website Design and Development</span>
            <span className="text-xl">April 13, 2024</span>
          </div>
          <img className="rounded-2xl" src={img} alt="" width="576" />
        </div>
        <div className="item-holder m-auto flex w-fit flex-col gap-5">
          <img className="rounded-2xl" src={img} alt="" width="576" />
          <div className="project-title text-5xl font-bold text-main-blue">
            Website
          </div>
          <div className="details flex justify-between">
            <span className="text-xl">Website Design and Development</span>
            <span className="text-xl">April 13, 2024</span>
          </div>
        </div>
        <div className="item-holder m-auto flex w-fit flex-col gap-5">
          <div className="project-title text-5xl font-bold text-main-blue">
            Website
          </div>
          <div className="details flex justify-between">
            <span className="text-xl">Website Design and Development</span>
            <span className="text-xl">April 13, 2024</span>
          </div>
          <img className="rounded-2xl" src={img} alt="" width="576" />
        </div>
      </div>
      <button className="m-auto flex items-center gap-3 rounded-xl bg-light-blue px-8 py-4 text-3xl font-bold text-white">
        View all <img src={arrowRight} alt="" />
      </button>
    </div>
  );
}

export default OurProjects;
