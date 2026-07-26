import { Curtain } from "@/components/site/curtain";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Ticker } from "@/components/site/ticker";
import { Manifesto } from "@/components/site/manifesto";
import { Campaign } from "@/components/site/campaign";
import { Designers } from "@/components/site/designers";
import { Lookbook } from "@/components/site/lookbook";
import { Interstitial } from "@/components/site/interstitial";
import { Rsvp } from "@/components/site/rsvp";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Curtain />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Ticker />
        <Manifesto />
        <Campaign />
        <Designers />
        <Lookbook />
        <Interstitial />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
