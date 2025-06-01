"use client";
import { CarShowcaseSection } from "./components/sections/CarShowcaseSection/CarShowcaseSection";
import { CustomerTestimonialsSection } from "./components/sections/CustomerTestimonialsSection";
import { FooterSection } from "./components/sections/FooterSection";
import Header from "./components/sections/HeaderSection/Header";
import Hero from "./components/sections/Hero/Hero";
import { HowItWorksSection } from "./components/sections/HowItWorksSection/HowItWorksSection";
import { ServicesBenefitsSection } from "./components/sections/ServicesBenefitsSection";
import React from "react";
import FeedbackSection from "./components/sections/FeedbackSection/FeedbackSection";

export default function Home() {
  return (
    <main className="bg-[#FFFFFFED] flex flex-col items-center w-full overflow-x-hidden">
      {/* Fixed Header */}
      <Header />
      {/* Hero Section - Full Viewport */}
      <Hero />
      {/* Main Content */}
      <div className="w-[80vw] mx-auto">
        <CarShowcaseSection />
        <HowItWorksSection />
      </div>
      <ServicesBenefitsSection />
      <div className="w-[80vw] mx-auto">
        <section className="w-full mt-16">
          <FeedbackSection />
          <CustomerTestimonialsSection />
        </section>
      </div>

      <FooterSection />
    </main>
  );
}