import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyCall } from "./StickyCall";
import { LocaleContext } from "../hooks/useLocale";
import { getDictionary, type Locale } from "../i18n";
import { useScrollToTop } from "../hooks/useScrollToTop";

export function Layout() {
  const { pathname } = useLocation();
  useScrollToTop();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const t = getDictionary(locale);

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
      <StickyCall />
    </LocaleContext.Provider>
  );
}
