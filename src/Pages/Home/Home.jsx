import Hero from "../../components/Hero/Hero";
import OurPartners from "../../components/OurPartners/OurPartners";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

function Home() {
  return (
    <div className="home">
      <Hero />
      <OurPartners />
      <WhatWeDo />
    </div>
  );
}

export default Home;
