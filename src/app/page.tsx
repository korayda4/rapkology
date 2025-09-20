import { homeMetaData } from "@/meta/HomeMeta";
import ExploreSection from "@/components/explore/ExploreSection";
import FavoritesSection from "@/components/favorites/FavoritesSection";
import Hero from "@/components/hero/Hero";
import Hero2 from "@/components/hero2/Hero2";
import TrendsSection from "@/components/trend/TrendSection";

export const metadata = homeMetaData;

export default function Home() {
  return (
    <main>
      <Hero />
      <Hero2 />
      <TrendsSection />
      <FavoritesSection />
      <ExploreSection />
    </main>
  );
}
