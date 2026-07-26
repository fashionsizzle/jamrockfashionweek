import type { Metadata } from "next";
import { SubHeader } from "@/components/site/sub-header";
import { Press } from "@/components/site/press";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Selected notices from the last edition of Jamrock Fashion Week.",
};

export default function PressPage() {
  return (
    <>
      <SubHeader />
      <main id="main-content" tabIndex={-1}>
        <Press />
      </main>
      <Footer />
    </>
  );
}
