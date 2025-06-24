import { Banner } from "./components/section/Banner";
import { DemoInstall } from "./components/section/DemoInstall";
import { FeatureList } from "./components/section/FeatureList";
import { Homepages } from "./components/section/Homepages";
import { ReleasePages } from "./components/section/ReleasePages";
import { SocialNetwork } from "./components/section/SocialNetwork";
import { WoocommerceShop } from "./components/section/WoocommerceShop";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Home Page */}
      <Homepages />

      {/* Social Network */}
      <SocialNetwork />

      {/* Release Pages */}
      <ReleasePages />

      {/* Demo Install */}
      <DemoInstall />

      {/* Woocommerce Shop */}
      <WoocommerceShop />

      {/* Feature List */}
      <FeatureList />
    </>
  );
}
