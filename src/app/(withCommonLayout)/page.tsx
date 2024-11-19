"use client";

import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ChatWidget from "@/components/ui/ChatWidget";
import Contact from "@/components/ui/Contactus";
import FAQSection from "@/components/ui/FAQSection";
import FloatingBubbles from "@/components/ui/FloatingBubbles";
import Milestones from "@/components/ui/Milestones";

import OurJourny from "@/components/ui/OurJourny";
import OurService from "@/components/ui/OurService";

import OurTeam from "@/components/ui/OurTeam";
import PackageCard from "@/components/ui/PackageCard";

import PortfolioCaseStudy from "@/components/ui/PortfolioCaseStudy";

const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <FloatingBubbles />
      <PackageCard />
      <OurJourny />
      <OurService />
      <PortfolioCaseStudy />
      <OurTeam />
      <ChatWidget />
      <Milestones />
      <FAQSection />
      <Contact />
    </div>
  );
};

export default HomePage;
