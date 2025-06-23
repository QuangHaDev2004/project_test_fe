import { Banner } from "./components/section/Banner";
import { Homepages } from "./components/section/Homepages";
import { SocialNetwork } from "./components/section/SocialNetwork";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Home Page */}
      <Homepages />

      {/* Social Network */}
      <SocialNetwork />
    </>
  );
}
