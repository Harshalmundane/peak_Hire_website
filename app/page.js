"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedBatch from "@/components/FeaturedBatch";
import IndustrySectors from "@/components/IndustrySectors";
import CourseCatalog from "@/components/CourseCatalog";
import CareerEcosystem from "@/components/CareerEcosystem";
import PricingSection from "@/components/PricingSection";
import Testimonials from "@/components/Testimonials";
import RecruitmentSection from "@/components/RecruitmentSection";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  // One shared lead modal (mock): demo booking, enrollment and plan CTAs all open it.
  const [lead, setLead] = useState(null);
  const openLead = (title, subtitle) => setLead({ title, subtitle });
  return (
    <>
      <Header onDemo={() => openLead("Book a free live demo", "Pick a time and a counselor will confirm on WhatsApp.")} />
      <main>
        <section id="home" className="ph-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-7"><HeroSection onEnroll={() => openLead("Enroll in the next live batch", "Workday HCM & Integration Masterclass")} /></div>
              <div className="col-lg-5"><FeaturedBatch onReserve={() => openLead("Reserve your seat", "Workday HCM & Integration Masterclass")} /></div>
            </div>
          </div>
        </section>
        <IndustrySectors />
        <RecruitmentSection onLead={openLead} />
        <CourseCatalog onEnroll={(c) => openLead(`Enroll: ${c.title}`, `${c.price} · ${c.weeks}`)} />
        <CareerEcosystem />
        <PricingSection onSelect={(p) => openLead(p.name, "I would like to know more about this package.")} />
        <Testimonials />
        <AboutSection onTalk={() => openLead("Talk to our team", "Tell us whether you need training or hiring support.")} />
        <FinalCTA onBook={() => openLead("Book a free counseling call", "Speak with an admissions counselor.")} />
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadModal lead={lead} onClose={() => setLead(null)} />
    </>
  );
}
