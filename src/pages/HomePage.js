import React from "react";
import { EmergencyBanner } from "../components/home/EmergencyBanner";
import { HeroSection } from "../components/home/HeroSection";
import { StatsSection } from "../components/home/StatsSection";
import { DepartmentsSection } from "../components/home/DepartmentsSection";
import { SpecialistsSection } from "../components/home/SpecialistsSection";
import { PackagesSection } from "../components/home/PackagesSection";
import { AppPromoSection } from "../components/home/AppPromoSection";

const HomePage = () => {
  return (
    <>
      <EmergencyBanner />
      <HeroSection />
      <StatsSection />
      <DepartmentsSection />
      <SpecialistsSection />
      <PackagesSection />
      <AppPromoSection />
    </>
  );
};

export default HomePage;
