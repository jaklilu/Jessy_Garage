import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_TEL, switchLocalePath, type Locale } from "../i18n";
import { useLocale } from "../hooks/useLocale";

const SITE_URL = "https://jessy-garage.netlify.app";

type SeoProps = {
  title: string;
  description: string;
};

export function Seo({ title, description }: SeoProps) {
  const { locale } = useLocale();
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = locale;

    const currentUrl = `${SITE_URL}${pathname}`;
    const otherLocale: Locale = locale === "en" ? "es" : "en";
    const alternateUrl = `${SITE_URL}${switchLocalePath(pathname, otherLocale)}`;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    function setMeta(name: string, content: string, isProperty = false) {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    function setLink(rel: string, href: string, extraAttrs?: Record<string, string>) {
      const selector = extraAttrs
        ? `link[rel="${rel}"]${Object.entries(extraAttrs).map(([k, v]) => `[${k}="${v}"]`).join("")}`
        : `link[rel="${rel}"]`;
      let el = document.querySelector(selector) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        if (extraAttrs) {
          Object.entries(extraAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
        }
        document.head.appendChild(el);
      }
      el.href = href;
    }

    setLink("canonical", currentUrl);
    setLink("alternate", currentUrl, { hreflang: locale });
    setLink("alternate", alternateUrl, { hreflang: otherLocale });

    setMeta("og:type", "website", true);
    setMeta("og:site_name", BUSINESS_NAME, true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", currentUrl, true);
    setMeta("og:locale", locale === "en" ? "en_US" : "es_MX", true);
    setMeta("og:locale:alternate", locale === "en" ? "es_MX" : "en_US", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      telephone: PHONE_DISPLAY,
      url: SITE_URL,
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
  }, [title, description, locale, pathname]);

  return null;
}
