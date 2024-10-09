import Hero from "../../components/Hero/Hero";
import HowWeDoIt from "../../components/HowWeDoIt/HowWeDoIt";
import OurPartners from "../../components/OurPartners/OurPartners";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import OurProjects from "../../components/OurProjects/OurProjects";
import Technologies from "../../components/Technologies/Technologies";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhatsNew from "../../components/WhatsNew/WhatsNew";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Hero />
      <OurPartners />
      <WhatWeDo />
      <HowWeDoIt />
      <SmallBanner />
      <OurProjects />
      <Technologies />
      <Testimonials />
      <WhatsNew />
      <Footer />
    </div>
  );
}

export default Home;
