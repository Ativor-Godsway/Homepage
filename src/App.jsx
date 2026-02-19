import { useState } from "react";
import Navbar from "./HompePageSections/Navbar";
import Hero from "./HompePageSections/Hero";
import VisionMission from "./HompePageSections/Vision";
import WhyIC from "./HompePageSections/WhyIC";
import HowItWorks from "./HompePageSections/HowItWorks";
import Dashboards from "./HompePageSections/Dashboards";
import Faqs from "./HompePageSections/Faqs";
import Topics from "./HompePageSections/Topics";
import Footer from "./HompePageSections/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" relative font-sans">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Hero />
      <VisionMission />
      <WhyIC />
      <HowItWorks />
      <Dashboards />
      <Faqs />
      <Topics />
      <Footer />
    </div>
  );
}

export default App;
