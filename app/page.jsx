import Community from "@/components/commenity/Community";
import FeatureSection from "@/components/feature/FeatureSection";
import LatestSection from "@/components/latestSection/LatestSection";
import Overview from "@/components/overview/Overview";

export default function Home() {
  return <div className="">
    <LatestSection />
    <FeatureSection />
    <Community/>
    <Overview/>
  </div>;
}
