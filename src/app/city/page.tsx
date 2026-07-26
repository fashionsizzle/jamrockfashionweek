import type { Metadata } from "next";
import { SubHeader } from "@/components/site/sub-header";
import { Venues } from "@/components/site/venues";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "The City",
  description:
    "Selected rooms and gardens across Kingston hosting Jamrock Fashion Week.",
};

export default function CityPage() {
  return (
    <>
      <SubHeader />
      <main id="main-content" tabIndex={-1}>
        <Venues />
      </main>
      <Footer />
    </>
  );
}
