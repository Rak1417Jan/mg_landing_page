import HeroSection from "@/components/sections/HeroSection";
import CoreUSPStrip from "@/components/sections/CoreUSPStrip";
import TechPowerSection from "@/components/sections/TechPowerSection";
import MGIFeatureShowcase from "@/components/sections/MGIFeatureShowcase";
import PrintingCapability from "@/components/sections/PrintingCapability";
import DieCuttingSection from "@/components/sections/DieCuttingSection";
import FinishingServicesGrid from "@/components/sections/FinishingServicesGrid";
import ApplicationsShowcase from "@/components/sections/ApplicationsShowcase";
import SpeedAdvantageSection from "@/components/sections/SpeedAdvantageSection";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ContactForm from "@/components/sections/ContactForm";
import GoogleMapsSection from "@/components/sections/GoogleMapsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CoreUSPStrip />
      <div id="services">
        <TechPowerSection />
      </div>
      <div id="mgi-showcase">
        <MGIFeatureShowcase />
      </div>
      <PrintingCapability />
      <DieCuttingSection />
      <FinishingServicesGrid />
      <div id="industries">
        <ApplicationsShowcase />
      </div>
      <SpeedAdvantageSection />
      <ProcessSteps />
      <ContactForm />
      <GoogleMapsSection />
    </>
  );
}
