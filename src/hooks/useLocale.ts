import { createContext, useContext } from "react";
import { getDictionary, type Dictionary, type Locale } from "../i18n";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
};

export const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  t: getDictionary("en"),
});

export function useLocale() {
  return useContext(LocaleContext);
}
