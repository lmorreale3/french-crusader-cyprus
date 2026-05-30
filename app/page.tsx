import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { FeaturedTexts } from "@/components/featured-texts";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedTexts />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
