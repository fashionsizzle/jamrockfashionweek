import type { Metadata } from "next";
import { SubHeader } from "@/components/site/sub-header";
import { Schedule } from "@/components/site/schedule";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Five evenings, fourteen venues across Kingston. The full runway schedule for Jamrock Fashion Week.",
};

export default function SchedulePage() {
  return (
    <>
      <SubHeader />
      <main id="main-content" tabIndex={-1}>
        <Schedule />
      </main>
      <Footer />
    </>
  );
}
