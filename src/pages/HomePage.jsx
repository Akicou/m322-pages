import { useEffect } from "react";
import { HomeHero } from "../components/home/HomeHero";
import {
  HomeStrip,
  HomeProblemsPreview,
  HomeFeatures,
  HomeDsgvo,
  HomeTestimonials,
  HomeCta,
} from "../components/home/HomeRest";

export function HomePage() {
  useEffect(() => {
    document.title = "Yes-Doc – Smarte Praxisdokumentation";
  }, []);

  return (
    <main>
      <HomeHero />
      <HomeStrip />
      <HomeProblemsPreview />
      <HomeFeatures />
      <HomeDsgvo />
      <HomeTestimonials />
      <HomeCta />
    </main>
  );
}
