import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/site/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Jamrock Fashion Week collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" effective="July 26, 2026">
      <p>
        This Privacy Policy explains how Jamrock Fashion Week (&ldquo;Jamrock,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), organized and operating out of
        New York, New York, collects, uses, discloses, and protects information
        we receive through jamrockfashionweek.com (the &ldquo;Site&rdquo;) and related
        accreditation, RSVP, and application forms.
      </p>

      <LegalSection heading="1. Information we collect">
        <p>We collect information you provide directly to us, including:</p>
        <ul>
          <li>
            Contact details (name, email address, profession or publication)
            submitted through our RSVP, accreditation, and application forms.
          </li>
          <li>
            Any additional notes, portfolio links, or materials you choose to
            include with an application or request.
          </li>
          <li>Email address, if you subscribe to our newsletter.</li>
        </ul>
        <p>
          We also automatically collect limited technical information — such
          as IP address, browser type, device type, and pages visited —
          through standard web server logs and analytics tools when you
          browse the Site.
        </p>
      </LegalSection>

      <LegalSection heading="2. How we use information">
        <ul>
          <li>To process and respond to RSVP, accreditation, and application requests.</li>
          <li>To send confirmations, updates, and schedule announcements related to Jamrock Fashion Week.</li>
          <li>To send newsletter communications to subscribers who opt in.</li>
          <li>To maintain the security, integrity, and performance of the Site.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection heading="3. How we share information">
        <p>
          We do not share your personal information with third parties except:
        </p>
        <ul>
          <li>
            With service providers who help us operate the Site, process
            forms, or send communications (for example, our hosting provider
            and email delivery service), under obligations to protect your
            information.
          </li>
          <li>If required by law, subpoena, or other legal process.</li>
          <li>To protect the rights, property, or safety of Jamrock, our attendees, or the public.</li>
          <li>In connection with a merger, acquisition, or sale of assets, with notice to you where required.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Data retention">
        <p>
          We retain application, RSVP, and accreditation information for as
          long as reasonably necessary to administer the relevant edition of
          Jamrock Fashion Week and to comply with legal, accounting, or
          reporting obligations. Newsletter subscriber information is
          retained until you unsubscribe.
        </p>
      </LegalSection>

      <LegalSection heading="5. Your choices and rights">
        <ul>
          <li>You may unsubscribe from newsletter emails at any time using the link in any message.</li>
          <li>
            You may request access to, correction of, or deletion of personal
            information we hold about you by emailing{" "}
            <a href="mailto:privacy@jamrockfashionweek.com">
              privacy@jamrockfashionweek.com
            </a>
            .
          </li>
          <li>
            Depending on your state of residence, you may have additional
            rights under applicable state privacy laws. We will respond to
            verifiable requests consistent with those laws.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Data security">
        <p>
          We maintain reasonable administrative, technical, and physical
          safeguards designed to protect personal information, consistent
          with the New York SHIELD Act. No method of transmission or storage
          is completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection heading="7. Children's privacy">
        <p>
          The Site is not directed to children under 13, and we do not
          knowingly collect personal information from children under 13. If
          you believe a child has provided us with personal information,
          please contact us so we can delete it.
        </p>
      </LegalSection>

      <LegalSection heading="8. Cookies and tracking">
        <p>
          The Site may use cookies and similar technologies as described in
          our{" "}
          <Link href="/legal/cookies">Cookie Policy</Link>.
        </p>
      </LegalSection>

      <LegalSection heading="9. International visitors">
        <p>
          The Site is operated from the United States. If you access the Site
          from outside the United States, your information will be
          transferred to, stored, and processed in the United States, which
          may not offer the same level of data protection as your home
          jurisdiction.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. Changes are
          effective when posted, with the &ldquo;Effective&rdquo; date above updated
          accordingly.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact us">
        <p>
          Questions about this Privacy Policy can be directed to{" "}
          <a href="mailto:privacy@jamrockfashionweek.com">
            privacy@jamrockfashionweek.com
          </a>
          .
        </p>
      </LegalSection>

      <p className="border-t border-line pt-6 text-xs text-ink-faint">
        This page is a general-purpose template provided for convenience and
        does not constitute legal advice. Consult a licensed attorney to
        confirm this policy meets the requirements applicable to your
        business.
      </p>
    </LegalLayout>
  );
}
