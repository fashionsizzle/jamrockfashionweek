import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/site/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Jamrock Fashion Week uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" effective="July 26, 2026">
      <p>
        This Cookie Policy explains how Jamrock Fashion Week (&ldquo;Jamrock,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies and similar technologies on
        jamrockfashionweek.com (the &ldquo;Site&rdquo;).
      </p>

      <LegalSection heading="1. What cookies are">
        <p>
          Cookies are small text files placed on your device by websites you
          visit. They are widely used to make websites function, work more
          efficiently, and provide reporting information.
        </p>
      </LegalSection>

      <LegalSection heading="2. Cookies we use">
        <ul>
          <li>
            <strong>Essential cookies</strong> — required for the Site to
            function correctly, such as remembering that you have already
            seen the newsletter subscription pop-up.
          </li>
          <li>
            <strong>Analytics cookies</strong> — help us understand how
            visitors use the Site so we can improve it. These may be set by
            third-party analytics providers.
          </li>
        </ul>
        <p>We do not use cookies for third-party advertising.</p>
      </LegalSection>

      <LegalSection heading="3. Managing cookies">
        <p>
          Most browsers let you refuse or delete cookies through their
          settings. Blocking essential cookies may affect how parts of the
          Site function, such as the newsletter pop-up reappearing on every
          visit.
        </p>
      </LegalSection>

      <LegalSection heading="4. Changes to this policy">
        <p>
          We may update this Cookie Policy from time to time. Changes are
          effective when posted, with the &ldquo;Effective&rdquo; date above updated
          accordingly.
        </p>
      </LegalSection>

      <LegalSection heading="5. Contact us">
        <p>
          Questions about this Cookie Policy can be directed to{" "}
          <a href="mailto:privacy@jamrockfashionweek.com">
            privacy@jamrockfashionweek.com
          </a>
          .
        </p>
      </LegalSection>

      <p className="border-t border-line pt-6 text-xs text-ink-faint">
        This page is a general-purpose template provided for convenience and
        does not constitute legal advice.
      </p>
    </LegalLayout>
  );
}
