import { useState, useEffect } from "react";
import logo from "../../assets/sds-logo.png";
import "./Header.css";
import NavMenu from "../NavMenu/NavMenu";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [headerColor, setHeaderColor] = useState("transparent");

  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY;
  //   if (scrollPosition > window.innerHeight) {
  //     setHeaderColor("#1100db");
  //   } else {
  //     setHeaderColor("#fff");
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="header fixed left-0 top-0 z-50 flex h-[120px] w-full justify-between bg-white px-[200px] py-[10px]">
      <img src={logo} alt="logo" />
      <div
        className="burger-container flex items-center justify-center"
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div className={`toggle ${isActive ? "active" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <NavMenu active={isActive} setActive={setIsActive} />
    </div>
  );
}

export default Header;
