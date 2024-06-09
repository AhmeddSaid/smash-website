import "./Technologies.css";
import SectionTitle from "../UI/SectionTitle";
import icon from "../../assets/techs/tech-icon.svg";

function Technologies() {
  let items = [
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
    {
      id: "",
      name: "",
      img: icon,
    },
  ];

  const renderTechs = () => {
    return items.map((tech, i) => (
      <div className="item-holder flex w-[20%] justify-center p-5 " key={i}>
        <img src={tech.img} alt="" width="120" />
      </div>
    ));
  };

  return (
    <div className="technologies-section flex h-[736px] flex-col items-center justify-center bg-[#fafafa] py-16 gap-16">
      <SectionTitle title="Our Technologies" />
      <div className="tech-container m-auto  flex w-[70%] flex-wrap items-center justify-between">
        {renderTechs()}
      </div>
    </div>
  );
}

export default Technologies;
