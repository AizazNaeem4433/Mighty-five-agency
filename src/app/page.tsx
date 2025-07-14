import AuditPitch from "./components/AuditPitch";
import AwardBanner from "./components/AwardBanner";
import PartnersBanner from "./components/Banner";
import Count from "./components/Count";
import GuaranteeSection from "./components/Guarante";
import Hero from "./components/Hero";
import MeetOurTeam from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <PartnersBanner />
      <AuditPitch />
      <Testimonials />
      <MeetOurTeam />
      <Count />
      <GuaranteeSection />
      <AwardBanner />
    </div>
  );
}
