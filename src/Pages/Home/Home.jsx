import Hero from "../../components/Hero/Hero";
import HowWeDoIt from "../../components/HowWeDoIt/HowWeDoIt";
import OurPartners from "../../components/OurPartners/OurPartners";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

function Home() {
  return (
    <div className="home">
      <Hero />
      <OurPartners />
      <WhatWeDo />
      <HowWeDoIt />
      <SmallBanner />
    </div>
  );
}

export default Home;
