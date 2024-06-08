import zn from "../../assets/partners/zn.png";
import fullBright from "../../assets/partners/full-bright.svg";
import iwan from "../../assets/partners/iwan.svg";
import kive from "../../assets/partners/kive.svg";
import misrInsur from "../../assets/partners/misr-insur.svg";
import mylerz from "../../assets/partners/mylerz.svg";
import tayef from "../../assets/partners/tayf.svg";
import "./OurParnters.css";
import SectionTitle from "../UI/SectionTitle";

function OurPartners() {
  return (
    <div
      id="our-partners"
      className="our-partners mb-16 flex h-[600px] flex-col items-center gap-20 bg-white pt-[260px] "
    >
      <SectionTitle title="our partners" />
      <div className="images-container flex w-[80%] flex-wrap items-center justify-center gap-10">
        <img className="partner-image" src={zn} alt="" width="160" />
        <img className="partner-image" src={fullBright} alt="" width="160" />
        <img className="partner-image" src={iwan} alt="" width="160" />
        <img className="partner-image" src={kive} alt="" width="160" />
        <img className="partner-image" src={misrInsur} alt="" width="160" />
        <img className="partner-image" src={mylerz} alt="" width="160" />
        <img className="partner-image" src={tayef} alt="" width="160" />
      </div>
    </div>
  );
}

export default OurPartners;
