import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pipeline } from "@/components/sections/pipeline";
import { TerminalDemo } from "@/components/sections/terminal-demo";
import { ShowcasePreview } from "@/components/sections/showcase-preview";
import { CompetitorTable } from "@/components/sections/competitor-table";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
      <Hero />
      <TerminalDemo />
      <HowItWorks />
      <Pipeline />
      <ShowcasePreview />
      <CompetitorTable />
      <CTASection />
    </div>
  );
}
