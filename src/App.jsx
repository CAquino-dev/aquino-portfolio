import React, { useState } from "react";

import Navbar from "./components/Navbar";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectGalleryDialog from "./components/ProjectGalleryDialog";

import { duvGallery } from "./data/duvGallery";
import { financeGallery } from "./data/financeGallery";

const galleries = {
  duv:     { gallery: duvGallery },
  finance: { gallery: financeGallery },
};

function App() {
  const [activeGallery, setActiveGallery] = useState(null); // { key, title }

  const handleOpenGallery = (key, title) => setActiveGallery({ key, title });
  const handleCloseGallery = () => setActiveGallery(null);

  const current = activeGallery ? galleries[activeGallery.key] : null;

  return (
    <div className="font-poppins">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection onOpenGallery={handleOpenGallery} />
      <ContactSection />

      <ProjectGalleryDialog
        open={!!activeGallery}
        onOpenChange={(open) => !open && handleCloseGallery()}
        title={activeGallery?.title ?? ""}
        gallery={current?.gallery ?? []}
      />
    </div>
  );
}

export default App;