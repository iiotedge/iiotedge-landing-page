import HeroSection from "./(components)/Hero";
import SocialProofStrip from "./(components)/SocialProofStrip";
import ProblemSolutionSection from "./(components)/ProblemSolutionSection";
import CompleteStackSection from "./(components)/CompleteStackSection";
import PlatformDemoSection from "./(components)/PlatformDemoSection";
import IndustriesSection from "./(components)/IndustriesSection";
import CapabilitiesSection from "./(components)/CapabilitiesSection";
import Contact from "./(components)/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <ProblemSolutionSection />
      <CompleteStackSection />
      <PlatformDemoSection />
      <IndustriesSection />
      <CapabilitiesSection />
      <Contact />
    </>
  );
}
