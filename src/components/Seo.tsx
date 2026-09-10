import { useEffect } from "react";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_TEL } from "../i18n";
import { useLocale } from "../hooks/useLocale";

type SeoProps = {
  title: string;
  description: string;
};

export function Seo({ title, description }: SeoProps) {
  const { locale } = useLocale();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = locale;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      telephone: PHONE_DISPLAY,
      url: "https://jessygaragedoors.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bell",
        addressRegion: "CA",
        postalCode: "90201",
        addressCountry: "US",
      },
      areaServed: ["Bell, CA", "Los Angeles County"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "19:00",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_TEL,
        contactType: "customer service",
        availableLanguage: ["English", "Spanish"],
      },
    };

    let script = document.getElementById("local-business-jsonld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "local-business-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);
  }, [title, description, locale]);

  return null;
}
