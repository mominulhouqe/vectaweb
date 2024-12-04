import OurBrand from "@/components/component/OurBrand";
import OurTeam from "@/components/component/OurTeam";
import Banner from "@/components/shared/Banner";
import ChatWidget from "@/components/ui/ChatWidget";
import OurJourney from "@/components/ui/OurJourny";

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <Banner />
      {/* <AnimatedBackground />
      <FloatingBubbles />
      <PackageCard />
      <OurJourny />
      <OurService />
      <PortfolioCaseStudy />
      <OurTeam />
      <Milestones />
      <FAQSection />
      <Contact /> */}
      <ChatWidget />
      {/* #1F42A6 */}
      <OurBrand />
      <OurJourney />
      <OurTeam />
    </div>
  );
};

export default HomePage;
