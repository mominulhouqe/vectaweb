"use client";
import Banner from "@/components/shared/Banner";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ChatWidget from "@/components/ui/ChatWidget";
import Contact from "@/components/ui/Contactus";
import FAQSection from "@/components/ui/FAQSection";
import FloatingBubbles from "@/components/ui/FloatingBubbles";

import Milestones from "@/components/ui/Milestones";

import MouseFollowAnimation from "@/components/ui/MouseFollowAnimation";
import NewsletterSection from "@/components/ui/NewsletterSection";
import OurJourny from "@/components/ui/OurJourny";
import OurService from "@/components/ui/OurService";

import OurTeam from "@/components/ui/OurTeam";
import PackageCard from "@/components/ui/PackageCard";

import PortfolioCaseStudy from "@/components/ui/PortfolioCaseStudy";
import ShootingStars from "@/components/ui/ShootingStars";

const HomePage = async () => {
  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      <FloatingBubbles />
      {/*
      <ShootingStars /> */}
      {/* <SlidingWaves /> */}
      {/* <Banner /> */}
      {/* <Portfolio /> */}
      <MouseFollowAnimation />
      <PackageCard />
      <OurJourny />
      <OurService />
      <PortfolioCaseStudy />
      <OurTeam />
      <ChatWidget />
      <Milestones />
      <FAQSection />
      <Contact />
      {/* <NewsletterSection /> */}
    </div>
  );
};

export default HomePage;
