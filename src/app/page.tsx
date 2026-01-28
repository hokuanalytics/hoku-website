import Hero from "@/components/sections/Hero";
import ValueChain from "@/components/sections/ValueChain";
import Solutions from "@/components/sections/Solutions";
import Vision from "@/components/sections/Vision";
import ProjectsPreview from "@/components/sections/ProjectsPreview";
import NewsPreview from "@/components/sections/NewsPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueChain />
      <Solutions />
      <Vision />
      <ProjectsPreview />
      <NewsPreview />
      <CTA />
    </>
  );
}
