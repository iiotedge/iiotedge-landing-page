import Hero from "./(components)/Hero";
import CoreFocus from "./(components)/CoreFocus";
import Ecosystem from "./(components)/Ecosystem";
import Deliverables from "./(components)/Deliverables";
import Industries from "./(components)/Industries";
import WhyChoose from "./(components)/WhyChoose";
import PartnerCTA from "./(components)/PartnerCTA";
import Contact from "./(components)/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreFocus />
      <Ecosystem />
      <Deliverables />
      <Industries />
      <WhyChoose />
      <PartnerCTA />
      <Contact />
    </>
  );
}
