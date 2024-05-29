import { Link } from "react-router-dom";
import "./NavMenu.css";

function NavMenu({ active, setActive }) {
  return (
    <div
      className={`nav-menu  fixed ${active ? "left-0" : "left-[-100%]"} top-[120px] z-50 flex h-[100VH] w-full  bg-[#34a9cb] duration-500`}
    >
      <ul className="nav-links flex w-full flex-col gap-[40px] p-[100px]">
        <li className="nav-link">
          <Link
            to="/"
            className="flex w-full items-center text-[70px] font-bold uppercase text-white duration-500 hover:text-slate-500"
            onClick={() => setActive(false)}
          >
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/about"
            className="flex w-full items-center text-[70px] font-bold uppercase text-white duration-500 hover:text-slate-500"
            onClick={() => setActive(false)}
          >
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/work"
            className="flex w-full items-center text-[70px] font-bold uppercase text-white duration-500 hover:text-slate-500"
            onClick={() => setActive(false)}
          >
            Our Work
          </Link>
        </li>
        <li className="nav-link">
          <Link
            to="/contact"
            className="flex w-full items-center text-[70px] font-bold uppercase text-white duration-500 hover:text-slate-500"
            onClick={() => setActive(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
