import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/site/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern use of the Jamrock Fashion Week website.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" effective="July 26, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of
        jamrockfashionweek.com (the &ldquo;Site&rdquo;), operated by Jamrock Fashion Week
        (&ldquo;Jamrock,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), based in New York, New York.
        By accessing or using the Site, you agree to these Terms.
      </p>

      <LegalSection heading="1. Use of the Site">
        <p>
          You may use the Site to learn about Jamrock Fashion Week and to
          submit RSVP, accreditation, and application requests. You agree not
          to misuse the Site, including by attempting unauthorized access,
          interfering with its normal operation, or submitting false or
          fraudulent information through any form.
        </p>
      </LegalSection>

      <LegalSection heading="2. Applications, RSVPs, and accreditation">
        <p>
          Jamrock Fashion Week is an invitation-only event. Submitting an
          RSVP, accreditation request, or a designer, model, or stylist
          application does not guarantee acceptance, accreditation, or
          admission. All decisions regarding invitations and accreditation
          are made at our sole discretion. We may request additional
          information or documentation before confirming any request.
        </p>
      </LegalSection>

      <LegalSection heading="3. Intellectual property">
        <p>
          All content on the Site — including text, photography, graphics,
          logos, and the Jamrock Fashion Week name and marks — is owned by or
          licensed to Jamrock and is protected by copyright, trademark, and
          other intellectual property laws. You may not reproduce,
          distribute, or create derivative works from Site content without
          our prior written consent, except for personal, non-commercial
          reference.
        </p>
      </LegalSection>

      <LegalSection heading="4. User submissions">
        <p>
          By submitting an application, portfolio material, or other content
          through the Site, you represent that you own or have the necessary
          rights to that content and grant Jamrock a non-exclusive,
          royalty-free license to review, store, and use it solely for the
          purpose of evaluating your request and administering the relevant
          edition of Jamrock Fashion Week.
        </p>
      </LegalSection>

      <LegalSection heading="5. Third-party links">
        <p>
          The Site may link to third-party websites or services we do not
          control, including social platforms and video hosting. We are not
          responsible for the content, policies, or practices of any
          third-party site.
        </p>
      </LegalSection>

      <LegalSection heading="6. Disclaimers">
        <p>
          The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as
          available,&rdquo; without warranties of any kind, express or implied,
          including warranties of merchantability, fitness for a particular
          purpose, or non-infringement. We do not warrant that the Site will
          be uninterrupted, secure, or error-free, or that event details
          (including dates, venues, and participating designers) will not
          change.
        </p>
      </LegalSection>

      <LegalSection heading="7. Limitation of liability">
        <p>
          To the fullest extent permitted by law, Jamrock and its officers,
          employees, and agents will not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising
          from your access to or use of the Site, even if advised of the
          possibility of such damages.
        </p>
      </LegalSection>

      <LegalSection heading="8. Indemnification">
        <p>
          You agree to indemnify and hold Jamrock harmless from any claims,
          damages, or expenses (including reasonable attorneys&rsquo; fees) arising
          from your violation of these Terms or misuse of the Site.
        </p>
      </LegalSection>

      <LegalSection heading="9. Governing law">
        <p>
          These Terms are governed by the laws of the State of New York,
          without regard to conflict-of-laws principles. Any dispute arising
          from these Terms or the Site will be subject to the exclusive
          jurisdiction of the state and federal courts located in New York
          County, New York.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to these Terms">
        <p>
          We may update these Terms from time to time. Continued use of the
          Site after changes are posted constitutes acceptance of the revised
          Terms.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact us">
        <p>
          Questions about these Terms can be directed to{" "}
          <a href="mailto:legal@jamrockfashionweek.com">
            legal@jamrockfashionweek.com
          </a>
          .
        </p>
      </LegalSection>

      <p className="border-t border-line pt-6 text-xs text-ink-faint">
        This page is a general-purpose template provided for convenience and
        does not constitute legal advice. Consult a licensed attorney to
        confirm these terms meet the requirements applicable to your
        business.
      </p>
    </LegalLayout>
  );
}
