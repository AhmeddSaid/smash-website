import "./SmallBanner.css";

function SmallBanner() {
  return (
    <div className="small-banner m-auto flex h-[300px] w-[1060px] items-center justify-center rounded-2xl ">
      <div className="text  relative w-[850px] text-center text-4xl font-bold capitalize text-white">
        Providing creative{" "}
        <span className="inline-flex items-center justify-center bg-[#4eb796]">
          digital solutions
        </span>{" "}
        that build connections, add value, and make a true difference.
      </div>
    </div>
  );
}

export default SmallBanner;
