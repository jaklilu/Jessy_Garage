import { PHONE_TEL } from "../i18n";
import { useLocale } from "../hooks/useLocale";
import "./StickyCall.css";

export function StickyCall() {
  const { t } = useLocale();

  return (
    <a className="sticky-call" href={`tel:${PHONE_TEL}`} aria-label={t.stickyCall.label}>
      <span className="sticky-call__label">{t.nav.call}</span>
      <span className="sticky-call__phone">{t.common.phone}</span>
    </a>
  );
}
