import Layout from "../components/Layout/Layout";
import CtaBanner from "../components/landingPage/Ctabanner";
import FeaturesStrip from "../components/landingPage/Featuresstrip";
import HeroSection from "../components/landingPage/HeroSection";
import WatchlistSection from "../components/landingPage/Watchlistsection";


export default function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <WatchlistSection />
      <FeaturesStrip />
      <CtaBanner />
    </Layout>
  );
}