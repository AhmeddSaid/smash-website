import "./Hero.css";

function Hero() {
  return (
    <div className="hero flex h-dvh flex-col items-center justify-center gap-8 bg-slate-400 pt-[120px]">
      <h1 className="flex flex-col items-center text-9xl font-bold uppercase tracking-wider">
        <span className="flex w-[600px] justify-center text-center text-white">
          Smash
        </span>
        <span className=" text-center  text-7xl text-white">
          Digital Solutions
        </span>
      </h1>
      <p className="w-[600px] text-center  ">
        At Smash Digital Solutions (SDS), we are passionate about driving the
        growth and success of startup and medium-sized businesses. With our
        innovative strategies and expert guidance, we empower our clients to
        unleash their full potential and achieve extraordinary results in the
        competitive business landscape.
      </p>

      <a href="#our-partners" class="container_mouse">
        <span class="mouse-btn">
          <span class="mouse-scroll"></span>
        </span>
      </a>
    </div>
  );
}

export default Hero;
