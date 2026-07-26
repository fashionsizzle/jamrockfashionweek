import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/site/legal-layout";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Jamrock Fashion Week's commitment to digital accessibility.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement" effective="July 26, 2026">
      <p>
        Jamrock Fashion Week is committed to ensuring jamrockfashionweek.com
        (the &ldquo;Site&rdquo;) is accessible to people of all abilities, consistent
        with applicable New York and federal accessibility guidance,
        including the Americans with Disabilities Act (ADA) and the Web
        Content Accessibility Guidelines (WCAG) 2.1, Level AA, as a
        reference standard.
      </p>

      <LegalSection heading="1. Our approach">
        <ul>
          <li>Structuring pages with semantic headings and landmarks.</li>
          <li>Providing visible focus states and keyboard-navigable menus and forms.</li>
          <li>Supporting reduced-motion preferences for animated content.</li>
          <li>Maintaining sufficient color contrast for text and interactive elements.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="2. Known limitations">
        <p>
          Digital accessibility is an ongoing effort. Some third-party
          embeds (such as video) may not fully meet the standards above. We
          are working to address known limitations as the Site evolves.
        </p>
      </LegalSection>

      <LegalSection heading="3. Feedback">
        <p>
          If you experience difficulty accessing any part of the Site, please
          let us know so we can assist you and improve accessibility going
          forward. Contact us at{" "}
          <a href="mailto:accessibility@jamrockfashionweek.com">
            accessibility@jamrockfashionweek.com
          </a>
          .
        </p>
      </LegalSection>

      <p className="border-t border-line pt-6 text-xs text-ink-faint">
        This page is a general-purpose template provided for convenience and
        does not constitute legal advice or a certification of compliance.
      </p>
    </LegalLayout>
  );
}
