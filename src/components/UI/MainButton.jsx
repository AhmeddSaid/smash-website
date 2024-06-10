import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.svg";

function MainButton({ text }) {
  return (
    <Link
      to="/"
      className="flex w-fit m-auto items-center justify-center gap-6 rounded-2xl bg-light-blue p-6 text-2xl font-bold text-white"
    >
      {text} <img src={arrow} alt="" />
    </Link>
  );
}

export default MainButton;
