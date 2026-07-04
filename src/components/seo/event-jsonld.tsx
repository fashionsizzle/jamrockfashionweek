import { EVENT, SCHEDULE } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

/**
 * Structured data (schema.org) for the festival and its individual shows,
 * to enrich search results and event listings.
 */
export function EventJsonLd() {
  const subEvents = SCHEDULE.flatMap((day) => {
    const dd = String(parseInt(day.date, 10)).padStart(2, "0");
    return day.shows.map((show) => ({
      "@type": "Event",
      name: show.title,
      startDate: `${EVENT.year}-11-${dd}T${show.time}:00${EVENT.tz}`,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: show.venue,
        address: { "@type": "PostalAddress", addressLocality: "Kingston", addressCountry: "JM" },
      },
    }));
  });

  const data = {
    "@context": "https://schema.org",
    "@type": "Festival",
    name: "Jamrock Fashion Week",
    description:
      "Five evenings of Caribbean design, presented across Kingston.",
    startDate: EVENT.startISO,
    endDate: EVENT.endISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Kingston",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kingston",
        addressCountry: "JM",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Jamrock Fashion Week",
      url: SITE_URL,
    },
    image: `${SITE_URL}/opengraph-image`,
    subEvent: subEvents,
  };

  return (
    <script
      type="application/ld+json"
      // schema.org JSON-LD is static and trusted
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
